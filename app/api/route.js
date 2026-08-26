import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { connectDB } from "@/lib/db";
import Instagram from "@/models/Instagram";
import { uploadToR2 } from "@/lib/uploadToR2";
import { deleteFromR2 } from "@/lib/deleteFromR2";

async function checkAdmin() {
  const cookieStore = await cookies();

  const adminToken = cookieStore.get("admin_token")?.value;

  if (!adminToken || adminToken !== process.env.ADMIN_SECRET) {
    return false;
  }

  return true;
}

// =========================
// GET ALL INSTAGRAM LINKS
// =========================

export async function GET() {
  try {

  

    await connectDB();

    const instagramLinks = await Instagram.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: instagramLinks,
    });
  } catch (error) {
    console.error("GET Instagram error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch Instagram links",
      },
      {
        status: 500,
      },
    );
  }
}

// =========================
// CREATE INSTAGRAM LINK
// =========================

export async function POST(req) {
  let uploadedFileId = null;

  try {
    // =========================
    // CHECK ADMIN
    // =========================

    const cookieStore = await cookies();

    const adminToken = cookieStore.get("admin_token")?.value;

    if (adminToken !== "logged_in") {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    // =========================
    // CONNECT DATABASE
    // =========================

    await connectDB();

    // =========================
    // GET FORMDATA
    // =========================

    const formData = await req.formData();

    const url = formData.get("url");
    const image = formData.get("image");

    // =========================
    // VALIDATE FIELDS
    // =========================

    if (!url || !image) {
      return NextResponse.json(
        {
          success: false,
          message: "Instagram URL and thumbnail are required",
        },
        { status: 400 },
      );
    }

    // Make sure image is actually a file
    if (typeof image === "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid image file",
        },
        { status: 400 },
      );
    }

    const instagramUrl = url.toString().trim();

    // =========================
    // VALIDATE INSTAGRAM URL
    // =========================

    const instagramRegex =
      /^https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)\/[^/?#]+/i;

    if (!instagramRegex.test(instagramUrl)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Instagram post/reel URL",
        },
        { status: 400 },
      );
    }

    // =========================
    // VALIDATE IMAGE TYPE
    // =========================

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

    if (!allowedTypes.includes(image.type)) {
      return NextResponse.json(
        {
          success: false,
          message: "Only JPG, PNG and WEBP images are allowed",
        },
        { status: 400 },
      );
    }

    // =========================
    // VALIDATE IMAGE SIZE
    // MAX 5MB
    // =========================

    const maxSize = 5 * 1024 * 1024;

    if (image.size > maxSize) {
      return NextResponse.json(
        {
          success: false,
          message: "Image size must be less than 5MB",
        },
        { status: 400 },
      );
    }

    // =========================
    // CONVERT IMAGE TO BUFFER
    // =========================

    const bytes = await image.arrayBuffer();

    const buffer = Buffer.from(bytes);

    // =========================
    // CREATE FILE NAME
    // =========================

    const fileName = `${Date.now()}-${image.name}`;

    // =========================
    // UPLOAD TO CLOUDFLARE R2
    // =========================

    const resUpload = await uploadToR2({
      file: buffer,
      folder: "instagramThumbnail",
      fileName,
      contentType: image.type,
    });

    // =========================
    // GET R2 DATA
    // =========================

    if (!resUpload?.url || !resUpload?.key) {
      throw new Error("Cloudflare R2 upload failed");
    }

    const imageUrl = resUpload.url;

    const imageFileId = resUpload.key;

    uploadedFileId = imageFileId;

    // =========================
    // SAVE TO MONGODB
    // =========================

    const instagram = await Instagram.create({
      url: instagramUrl,
      imageFileId,
      imageUrl,
    });

    // =========================
    // SUCCESS
    // =========================

    return NextResponse.json(
      {
        success: true,
        message: "Instagram post added successfully",
        data: instagram,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Instagram POST error:", error);

    // =========================
    // DELETE R2 IMAGE
    // IF DATABASE SAVE FAILED
    // =========================

    if (uploadedFileId) {
      try {
        await deleteFromR2(uploadedFileId);

        console.log("R2 image deleted after database failure:", uploadedFileId);
      } catch (deleteError) {
        console.error("Failed to delete R2 image:", deleteError);
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to add Instagram post",
      },
      { status: 500 },
    );
  }
}

// =========================
// DELETE INSTAGRAM LINK
// =========================

export async function DELETE(request) {
  try {
    // =========================
    // CHECK ADMIN
    // =========================

    const isAdmin = await checkAdmin();

    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    // =========================
    // GET ID
    // =========================

    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Instagram ID is required",
        },
        {
          status: 400,
        },
      );
    }

    // =========================
    // CONNECT DATABASE
    // =========================

    await connectDB();

    // =========================
    // FIND INSTAGRAM POST
    // =========================

    const instagram = await Instagram.findById(id);

    if (!instagram) {
      return NextResponse.json(
        {
          success: false,
          message: "Instagram link not found",
        },
        {
          status: 404,
        },
      );
    }

    // =========================
    // DELETE IMAGE FROM R2
    // =========================

    if (instagram.imageFileId) {
      try {
        await deleteFromR2(instagram.imageFileId);

        console.log("Instagram image deleted from R2:", instagram.imageFileId);
      } catch (r2Error) {
        console.error("Failed to delete Instagram image from R2:", r2Error);

        return NextResponse.json(
          {
            success: false,
            message: "Failed to delete thumbnail from Cloudflare R2",
          },
          {
            status: 500,
          },
        );
      }
    }

    // =========================
    // DELETE FROM MONGODB
    // =========================

    await Instagram.findByIdAndDelete(id);

    // =========================
    // SUCCESS
    // =========================

    return NextResponse.json({
      success: true,
      message: "Instagram link and thumbnail deleted successfully",
    });
  } catch (error) {
    console.error("DELETE Instagram error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete Instagram link",
      },
      {
        status: 500,
      },
    );
  }
}

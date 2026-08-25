import { NextResponse } from "next/server";

const ADMIN_EMAIL = "admin@solvestic.com";
const ADMIN_PASSWORD = "Admin@12345";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Static login check
    if (
      email?.trim() !== ADMIN_EMAIL ||
      password !== ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        {
          status: 401,
        }
      );
    }

    // Correct credentials
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    });

    // Store login in cookie
    response.cookies.set("admin_token", "logged_in", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
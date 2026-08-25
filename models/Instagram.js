import mongoose from "mongoose";

const InstagramSchema = new mongoose.Schema(
  {
    // Instagram post/reel URL
    url: {
      type: String,
      required: true,
      trim: true,
    },

    // Cloudflare R2 object key
    imageFileId: {
      type: String,
      required: true,
      trim: true,
    },

    // Cloudflare R2 public image URL
    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Instagram ||
  mongoose.model("Instagram", InstagramSchema);

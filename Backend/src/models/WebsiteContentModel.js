import mongoose from "mongoose";

const websiteContentSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      unique: true,
      enum: [
        "home",
        "about",
        "solar",
        "aquarium",
        "agency",
        "contact",
      ],
    },

    sections: {
      type: Object,
      required: true,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

export const WebsiteContent = mongoose.model(
  "WebsiteContent",
  websiteContentSchema
);
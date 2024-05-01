import mongoose, { Schema } from "mongoose";
import { Images } from "@/interfaces";

const imageSchema = new Schema<Images>(
  {
    src: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ImageModel = mongoose.models.Images || mongoose.model("Images", imageSchema);


export default ImageModel;



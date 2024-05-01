import mongoose, { Schema, model } from "mongoose";
import { Users } from "@/interfaces";

const userSchema = new Schema<Users>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    }
  },
  { timestamps: true }
);


const UserModel =  mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;

import { NextResponse } from "next/server";
import connect from "@/lib/db";
import ImageModel from "@/models/imageSchema";
export async function POST(req: Request) {
  await connect();
  try {
    const { caption, src, author } = await req.json();
    const newImage = new ImageModel({
      src,
      caption,
      author,
    });
    await newImage.save();
    const server = { success: true };
    return NextResponse.json(server);
  } catch (error) {
    console.log("Error - ", error);
  }
}



export async function GET() {
  await connect();
try {
    const data = await ImageModel.find();
    return NextResponse.json({ data });
} catch (error) {
     console.log("Error - ", error);
}

}
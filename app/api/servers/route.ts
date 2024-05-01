import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const server = { success: true };
    return NextResponse.json(server);
  } catch (error) {
    console.log("Error - ", error);
  }
}

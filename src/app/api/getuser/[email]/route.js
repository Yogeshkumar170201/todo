import conDB from "@/utils/conDB";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
      const { email } = await req.json();
      console.log(email);
    await conDB();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "User details retrieved successfully!",
        user,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}

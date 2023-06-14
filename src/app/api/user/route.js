import conDB from '@/utils/conDB';
import User from '@/models/user';
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json();
        await conDB();

        await User.create(body);

        return NextResponse.json(
          {
            message: "Message sent successfully!",
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
 
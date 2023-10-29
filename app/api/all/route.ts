import Contact from "@/models/contact";
import connectMongoDB from "@/utils/database";
import { NextResponse } from "next/server";



export async function GET() {
    await connectMongoDB();
    const contacts = await Contact.find({})
    return NextResponse.json({ contacts });
  }
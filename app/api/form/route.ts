import Contact from "@/models/contact";
import connectMongoDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
    const{ email, marke, modell, erstzulassung, treibstoff, getriebe, kilometerstand, antrieb, fahrzeugzustand, ps, price, telefon, plz, tidStamp } = await request.json()

    try {
        await connectMongoDB()
        const newContact = new Contact({ email, marke, modell, erstzulassung, treibstoff, getriebe, kilometerstand, antrieb, fahrzeugzustand, ps, price, telefon, plz, tidStamp})

        await newContact.save()
        return new NextResponse(JSON.stringify(newContact), { status: 201 })
    } catch (error) {
        
    }
}
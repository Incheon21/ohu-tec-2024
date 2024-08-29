import connectDB from "@/lib/mongodb";
import Bundle from "@/app/models/bundle";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
    const {
        emailBundle,
        namaBundle,
        nimBundle,
        fakultasBundle,
        jurusanBundle,
        idLineBundle,
        buktiBayarBundle,
        buktiPersyaratanBundle,
    } = await req.json();

    try {
        await connectDB();
        await Bundle.create({
            emailBundle,
            namaBundle,
            nimBundle,
            fakultasBundle,
            jurusanBundle,
            idLineBundle,
            buktiBayarBundle,
            buktiPersyaratanBundle,
        });
        return NextResponse.json({
            msg: ["Registration Sucessful."],
            success: true,
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            
        } else {
            
        }
    }
}

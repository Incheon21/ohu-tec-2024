import connectDB from "@/lib/mongodb";
import Daful from "@/app/models/daful";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
    const {
        email,
        nama,
        nim,
        fakultas,
        jurusan,
        idLine,
        buktiBayar,
        buktiPersyaratan,
    } = await req.json();

    try {
        await connectDB();
        await Daful.create({
            email,
            nama,
            nim,
            fakultas,
            jurusan,
            idLine,
            buktiBayar,
            buktiPersyaratan,
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

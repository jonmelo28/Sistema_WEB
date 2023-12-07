import User from "@/models/userModel";
import mongoose, { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request){
    await connect("mongodb://localhost:27017/teste");

    const data = {
        firstName:"Jonatha",
        lastName: "Melo",
        email: "jonatha@email.com",
        password: "12345678",
        birthday: "1992-03-31",
        gender: "M",
        phone: "79981133883",
        role: "admin",
    };  

    const user = await User.create({
        ...data,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    });
         

    return NextResponse.json(user);
}
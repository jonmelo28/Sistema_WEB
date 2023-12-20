import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { NextResponse } from "next/server";

export async function GET(request, { params }){
   try{
    await connectToDB();
    console.log(params);

    const user = await User.findOne({email: params.email});

    return NextResponse.json({user});
   } catch(err){
    console.log(err);
    NextResponse.json({message: "ocorreu um erro ao buscar o Usuário com email "+ params.email}, { status: 500 })
   }
}
import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { NextResponse } from "next/server";

export async function GET(request){
  
  try{
    await connectToDB();

  const users = await User.find();
         

    return NextResponse.json({users});
}catch(err){
    return NextResponse.json({message: "ocorreu um erro ao mostrar os Usuários "}, { status: 500 });
}
}

export async function POST(request){
   try{
    await connectToDB();

    const body = await request.json();
    const user = await User.create({
        ...body,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    });

    return NextResponse.json(user, { status: 201 });
}catch(err){
    return NextResponse.json({message: "ocorreu um erro ao cadastrar o Usuário "}, { status: 500 });
}
}
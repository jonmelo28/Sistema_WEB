import Product from "@/models/productModel";
import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request){
  
  try{
    await connectToDB();

  const products = await Product.find();
         

    return NextResponse.json({products});
}catch(err){
    return NextResponse.json({message: "ocorreu um erro ao mostrar os Produtos "}, { status: 500 });
}
}

export async function POST(request){
   try{
    await connectToDB();

 
    const body = await request.json();

    const session = getServerSession();
    const user = await User.findOne({email: session.user?.email});

   //console.log(session, user);

     const product = await Product.create({
        ...body,
        user: user._id,
        createdAt: Date.now(),
        updatedAt: Date.now(),
     });

    return NextResponse.json(product, { status: 201 });
}catch(err){
    return NextResponse.json({message: "ocorreu um erro ao cadastrar o Produto "}, { status: 500 });
}
}
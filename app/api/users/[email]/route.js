import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { NextResponse } from "next/server";

export async function GET(request, { params }){
   try{
    await connectToDB();

    const user = await User.findOne({email: params.email});

    return NextResponse.json({user});
   } catch(err){
    console.log(err);
    NextResponse.json({message: "ocorreu um erro ao buscar o Usuário com email "+ params.email}, { status: 500 })
   }
}

export async function PATCH(request, { params }){
   try{
    await connectToDB();
    
    const body = await request.json();
    const user = await User.findOne({email: params.email});

    for (const [key,value] of Object.entries(body)){
      value ?  (user[key] = value) : null;
    }
    user.updateAt = Date.now();

    await user.save();

    return NextResponse.json({user});
   } catch(err){
    console.log(err);
    NextResponse.json({message: "ocorreu um erro ao alterar o Usuário com email "+ params.email}, { status: 500 })
   } 
}

export async function DELETE(request, {params}){
   try{
      await connectToDB();
      
      const user = await User.findOneAndDelete({email: params.email});
    
      return new NextResponse(null, {status: 204});
     } catch(err){
      console.log(err);
      NextResponse.json({message: "ocorreu um erro ao deletar o Usuário com email "+ params.email}, { status: 500 })
     } 

}
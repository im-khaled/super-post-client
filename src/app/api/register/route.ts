import { connectMongoDB } from "@/lib/mongodb";
import User  from "@/models/user";
import { NextResponse } from "next/server";


export  async function POST(req:any) {
  
   try {
     const {email, id} = await req.json();
    //  console.log(email, id);
     await connectMongoDB();
     await User.create({id: id, email:email});
    //  console.log(email);
     return NextResponse.json({message: "User Registered"}, {status:201})
   } catch (error) {
     return NextResponse.json({message: "An error occurred"}, {status:500});
   }
};


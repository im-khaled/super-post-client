import { connectMongoDB } from "@/lib/mongodb";
import User  from "@/models/user";
import { NextResponse } from "next/server";

export  async function POST(req:any) {
   try {
     const { email} = await req.json();
     await connectMongoDB();
     await User.create({email})
     return NextResponse.json({message: "User Registered"}, {status:201})
   } catch (error) {
     return NextResponse.json({message: "An error occurred"}, {status:500});
   }
};


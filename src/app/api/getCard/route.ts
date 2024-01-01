import { connectMongoDB } from "@/lib/mongodb";
import GeneratePostCards from "@/models/generatePostCards";

import { NextResponse } from "next/server";

 export async function GET(req:any, res:any){
    try {
        await connectMongoDB();
         const posts = await GeneratePostCards.find({});
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error)
    }
    
};

export async function POST(req:any, res:any){
    try {
        const data = await req.json();
        console.log(data);
        await connectMongoDB();
        await GeneratePostCards.create(data)
        return NextResponse.json('post added');
    } catch (error) {
        console.log(error)
    }
    
};

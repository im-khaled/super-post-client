"use client"
import React from "react";
import IdeaCard from "./IdeaCard";
import { useState } from "react";
import ContentHeader from "../DashBoard/ContentHeader";
import { RiBardFill } from "react-icons/ri";
import OpenAI from "openai";
import LoadingSkeleton from "../Loading/LoadingSkeleton";



const Idea = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = async (event: any) => {
        setLoading(true);
        event.preventDefault();
        const text = event.target.idea.value;

        const openai: any = new OpenAI({
            apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true
        });

        const response: any = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "user",
                    "content": `write 4 sentence about ${text} without numbering the sentence`
                },

            ],
            temperature: 1,
            max_tokens: 96,
            top_p: 1,
        });
        const result: any = await response.choices[0].message;
        const finalRes: any = await result.content.split(". ")

        setData(finalRes)

        event.target.reset()
        setLoading(false)
    }

    type obje = {
        title: string,
        details: string
    }
    const header: obje = {
        title: 'Post Ideas Generator',
        details: 'Generate post ideas for your LinkedIn posts.'
    }
    return (
        <div className='mt-24 w-full'>
            <ContentHeader text={header}></ContentHeader>
            <div className="md:flex justify-start">
                <div className=" w-2/5 space-y-5">
                    <p className="text-md">Add one topic or industry that you want to generate ideas for.</p>
                    <form onSubmit={e => getData(e)}>
                        <input name="idea" type="text" placeholder="SEO, Brand Promotion, New Technology..." className="px-5 py-2 border border-gray-300 rounded-xl input-primary w-4/5 max-w-lg" />
                        <button className=" flex justify-center items-center mt-8 px-5 py-2 bg-main hover:bg-blue-500 text-white font-semibold  rounded-full"><span className="block me-2 font-semibold text-lg"><RiBardFill /></span><p className="block ">Generates Ideas</p></button>
                    </form>
                </div>
                <div className="grid md:w-3/5 lg:grid-cols-2 grid-cols-1 gap-5 pb-5 px-5">
                    {
                        loading && <LoadingSkeleton/>
                    }
                    {
                        data && data.map((content: any, idx: any) => <IdeaCard key={idx} content={content}></IdeaCard>)

                    }
                </div>
            </div>
        </div>
    );
};

export default Idea;
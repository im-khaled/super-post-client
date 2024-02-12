"use client"
import Link from 'next/link';
import React, { useId, useState } from 'react';
type st= {
    img: string,
    title: string,
    cardDetails: string
}
let num = 0;
const SingleCard = ({img, title, cardDetails}:st) => {
    const UniqId = useId();
    const newId = 'XLmSlN'+UniqId.slice(1, -1)
    const [id, setId]= useState(newId);

    const GenerateId = ()=>{
        
        num = num + 1;
        setId(newId+num);
    }
    return (
        <div>
            <Link href={`/app/write-post?post_id=${id}`} onClick={GenerateId}>
            <div className="relative overflow-hidden transition-all duration-200 bg-white border border-gray-200 shadow-xs rounded-xl hover:shadow-md hover:-translate-y-1"><div><img src={img} alt=""></img></div><div className="px-4 py-5 sm:p-6"><h2 className="text-base font-semibold leading-5 text-gray-950"><button>{title}<span aria-hidden="true" className="absolute inset-0"></span></button></h2><p className="mt-2 text-sm font-normal text-gray-500 line-clamp-3">{cardDetails}</p></div></div>
            </Link>
        </div>
    );
};

export default SingleCard;
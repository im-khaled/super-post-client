"use client"
import React from 'react';
type st= {
    img: string,
    title: string,
    cardDetails: string
}
const SingleCard = ({img, title, cardDetails}:st) => {
    return (
        <div>
            
            <div className="relative overflow-hidden transition-all duration-200 bg-white border border-gray-200 shadow-xs rounded-xl hover:shadow-md hover:-translate-y-1"><div><img src={img} alt=""></img></div><div className="px-4 py-5 sm:p-6"><h2 className="text-base font-semibold leading-5 text-gray-950"><button>{title}<span aria-hidden="true" className="absolute inset-0"></span></button></h2><p className="mt-2 text-sm font-normal text-gray-500 line-clamp-3">{cardDetails}</p></div></div>
        
        </div>
    );
};

export default SingleCard;
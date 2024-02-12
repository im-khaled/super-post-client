"use client"
import React from 'react';
import img1 from "../../../../public/carousel/Template_1/slide_1.png"
import img2 from "../../../../public/carousel/Template_1/slide_2.png"
import img3 from "../../../../public/carousel/Template_1/slide_3.png"
import style from "./singleTemplate.module.css"
import Image from 'next/image';
import Link from 'next/link';
import ContentHeader from '../DashBoard/ContentHeader';

const SignleTemplae = () => {
    type obje ={
        title:string,
        details:string
    }
    const header:obje = {
        title: 'Carousel Maker',
        details:'Design high-performing LinkedIn carousel posts in minutes.'
    }
    return (
        <div className='w-full'>
            <ContentHeader text={header}></ContentHeader>
            <Link href='/app/carousel/template'>
                <div className={`overflow-hidden ${style.custom} rounded-box `}>
                    <div className={` ${style.item} ${style.item1} carousel-item w-full`}>
                        {/* <Image src={img1} className="w-full  " alt="carousel img" /> */}
                    </div>
                    
                </div>
            </Link>

             
        </div>
    );
};

export default SignleTemplae;
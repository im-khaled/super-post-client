import React from 'react';
import Insipiration from "../../components/InspirationContent/Insipiration"
import ContentHeader from '@/app/components/DashBoard/ContentHeader';

const page = () => {
    type obje ={
        title:string,
        details:string
    }
    const header:obje = {
        title: 'Content Inspiration',
        details:'Here are viral posts for you. Use them as inspiration'
    }
    return (
        <div className='mt-24 px-5 w-full'>
            <ContentHeader text={header}></ContentHeader>
            <Insipiration></Insipiration>
        </div>
    );
};

export default page;
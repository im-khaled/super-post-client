"use client"
import React, { useState } from 'react';

const Test = ({data}:any) => {
    const [content, setContent] = useState('');
    const getData = async()=>{
        const res = await data;
        setContent(res.content);
    }
    getData()
    if(content){
       const dataArry = content.split('. ');
       console.log(dataArry);
    }
    
        return (
            <div className='m-10 border p-5'>
                {content && content}
            </div>
        );
    
};

export default Test;
"use client"
import { ReactComponentElement, useEffect, useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import img from "../../../../public/fabicon_super.ico"
import Image from "next/image";
import style from "./Template.module.css";

const Page = () => {
    // slide control state 
    const [slide, setSlide] = useState(1);
    const combinedRef:any = useRef([])
    const slideOneRef:any = useRef();
     const slideTwoRef:any = useRef();
    // const slideThreeRef:any = useRef();
    
    const pushRef = (el:any) => combinedRef.current.push(el);
    
    // useEffect(()=>{
    //     combinedRef.current = {slideOneRef}
    // // },[])
    

    const createPDF = useReactToPrint({
        content: () => combinedRef.current[slide-1],
        
        
    })
    // slide 1
    const [heading, setHeading] = useState("Brain's Learning Process");
    const [hook, setHook] = useState("The brain learns three steps: information, meaning, and emotion. Combine all three for effective learning.");
    const [textColor, setTextColor] = useState("#fffafa");
    const [bgColor, setBgColor] = useState("#1148ee");
    const [font, setFont] = useState('');
    // for slide 3
    const [heading2, setHeading2] = useState("Three Steps");
    const [hook2, setHook2] = useState("The brain learns three steps: information, meaning, and emotion. Combine all three for effective learning.");
    const [textColor2, setTextColor2] = useState("#fffafa");
    const [bgColor2, setBgColor2] = useState("#ff9800");
    const [font2, setFont2] = useState('');
    // for slide 3
    const [heading3, setHeading3] = useState("Power of Visualization");
    const [hook3, setHook3] = useState("Visualizing information makes it more memorable. Make your visualization vivid and engaging.");
    const [textColor3, setTextColor3] = useState("#fffafa");
    const [bgColor3, setBgColor3] = useState("#ef4444");
    const [font3, setFont3] = useState('');

    const handleSlide = (e:number) =>{
            setSlide(e);
           
    }
    
    return (
        <div className={`mt-24 w-full px-5 `}>
            
            <div className="md:flex w-full  justify-center my-5">
                <div className="w-64 border p-3">
                    <p>Background</p>
                    <div className="flex justify-between w-full list-none py-2">
                        
                        <li><input type="btn" className="w-8 h-8 bg-[#1148ee] hover:cursor-pointer outline-none rounded-md" onClick={e => {
                            if(slide === 2){
                                setBgColor2('#1148ee');
                            }
                            else if (slide === 3){
                                setBgColor3('#1148ee');
                            }
                            else{
                                setBgColor('#1148ee');
                            }
                            }} id="colorSelector" />
                        </li>
                        <li><input type="btn" className="w-8 h-8 bg-[#11c9ee] hover:cursor-pointer outline-none rounded-md" onClick={e => {
                            if(slide === 2){
                                setBgColor2('#11c9ee');
                            }
                            else if (slide === 3){
                                setBgColor3('#11c9ee');
                            }
                            else{
                                setBgColor('#11c9ee');
                            }
                            }} id="colorSelector" />
                        </li>
                        <li><input type="btn" className="w-8 h-8 bg-[#f40b0b] hover:cursor-pointer outline-none rounded-md" onClick={e => {
                            if(slide === 2){
                                setBgColor2('#f40b0b');
                            }
                            else if (slide === 3){
                                setBgColor3('#f40b0b');
                            }
                            else{
                                setBgColor('#f40b0b');
                            }
                            }} id="colorSelector" /></li>
                        <li><input type="btn" className="w-8 h-8 bg-[#33d583] hover:cursor-pointer outline-none rounded-md" onClick={e => {
                            if(slide === 2){
                                setBgColor2('#33d583');
                            }
                            else if (slide === 3){
                                setBgColor3('#33d583');
                            }
                            else{
                                setBgColor('#33d583');
                            }
                            }} id="colorSelector" />
                        </li>
                        <li><input type="btn" className="w-8 h-8 bg-[#bf84fc] hover:cursor-pointer outline-none rounded-md" onClick={e => {
                            if(slide === 2){
                                setBgColor2('#bf84fc');
                            }
                            else if (slide === 3){
                                setBgColor3('#bf84fc');
                            }
                            else{
                                setBgColor('#bf84fc');
                            }
                            }} id="colorSelector" /></li>
                        <li><input type="btn" className="w-8 h-8 bg-[#818cf8] hover:cursor-pointer outline-none rounded-md" onClick={e => {
                            if(slide === 2){
                                setBgColor2('#818cf8');
                            }
                            else if (slide === 3){
                                setBgColor3('#818cf8');
                            }
                            else{
                                setBgColor('#818cf8');
                            }
                            }} id="colorSelector" /></li>
                        
                    </div>
                    <div className="border flex justify-between items-center rounded-lg p-1 px-2 my-2">
                        
                        <label htmlFor="colorselector">{slide === 2 && bgColor2 || slide === 3 && bgColor3  || slide === 1 && bgColor }</label>
                        <input type="color" value={slide === 2 && bgColor2 || slide === 3 && bgColor3  || slide === 1 && bgColor || '' } className="w-8 h-8" onChange={e => {
                            if(slide === 2){
                                setBgColor2(e.target.value);
                            }
                            else if (slide === 3){
                                setBgColor3(e.target.value);
                            }
                            else{
                                setBgColor(e.target.value);
                            }
                            }} id="colorSelector" />
                    </div>
                    <p className="mt-5">Text</p>
                    <div className="border flex justify-between items-center rounded-lg py-1 px-2 my-2">
                        <label htmlFor="colorselector">{slide === 2 && textColor2 || slide === 3 && textColor3  || slide === 1 && textColor }</label>
                        <input type="color" value={slide === 2 && textColor2 || slide === 3 && textColor3  || slide === 1 && textColor || '' } className="w-8 h-8" onChange={e => {
                            if(slide === 2){
                                setTextColor2(e.target.value);
                            }
                            else if (slide === 3){
                                setTextColor3(e.target.value);
                            }
                            else{
                                setTextColor(e.target.value);
                            }
                            }}  id="colorSelector" />
                    </div>
                    <p className="mt-5">Primary Fonts</p>
                    <div className="border flex justify-between items-center rounded-lg py-1 px-2 my-2">
                        <select name="" onChange={e => {
                            if(slide === 2){
                                setFont2(e.target.value);
                            }
                            else if (slide === 3){
                                setFont3(e.target.value);
                            }
                            else{
                                setFont(e.target.value);
                            }
                            }}className="w-full" id="">
                            <option value="Roboto">Roboto</option>
                            <option value="Poppins">Poppins</option>
                            <option value="Bona Nova">Bona Nova</option>
                        </select>
                    </div>
                    <button onClick={createPDF} className="px-4 py-2 mt-4 rounded-full w-full text-white bg-main hover:bg-blue-500">Save</button>
                </div>
                <div ref={slideOneRef}  className={`carousel w-2/3 max-md:w-full h-[25rem]`}>
                    <div id="item1" className="carousel-item max-md:block w-full">
                        <div className="flex-1 w-1/2 max-md:w-full min-w-0 pt-3  pb-6 pl-3 pr-6 shrink-0">
                            <div className="flex items-center group justify-between gap-4">
                                <p title="slide 1" className="flex-1 text-sm font-semibold tracking-widest  text-gray-500">SLIDE 1</p>
                                {/* <p className="bg-black text-white scale-0 group-hover:scale-100">Slide 1</p> */}
                                <div className="flex items-center justify-start gap-1 -ml-2"></div></div>
                                <div className="mt-5 space-y-6"><div className="mt-5 space-y-6"><div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                                    <div className="mt-1.5">
                                        <input type="text"  onBlur={e => setHeading(e.target.value)} id="" placeholder="" className="block w-full px-3 py-2 text-gray-900 border-0 shadow-sm rounded-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 caret-blue-500" defaultValue={`Brain's Learning Process`} />
                                    </div>
                                </div>
                            </div>
                                <div className="mt-5 space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                        <div className="mt-1.5">
                                            <textarea onBlur={e => setHook(e.target.value)}  cols={20} rows={8} className="block w-full px-3 py-2 text-gray-900 border-0 shadow-sm rounded-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 caret-blue-500" defaultValue="The brain learns three steps: information, meaning, and emotion. Combine all three for effective learning." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 max-md:w-full h-auto m-2 min-h-80 relative bg-red-500 p-5 caroselBody " ref={pushRef}>
                            <h1 className= "title text-4xl font-bold">{`${heading}`}</h1>
                            <h3 className="hook text-lg font-semibold py-5">{`${hook}`}</h3>
                            <div className="absolute inset-x-0  bottom-5 border bg-white rounded-full mx-5 flex justify-center items-center">
                                <div className=" flex px-[10px] py-[8px] justify-between rounded-full" >
                                    <div className="flex gap-[8px] items-center">
                                        <Image src={img} className="object-cover w-[40px] h-[40px] border rounded-full img" alt="image" />
                                        <div className=" bg-white flex flex-col" >
                                            <p className=" text-[16px] leading-[24px] font-semibold whitespace-nowrap" >Khaled Mahmud</p>
                                            <p className=" text-[12px] leading-[18px]">@im_KhaledM</p>
                                        </div>
                                    </div>
                                        <div className="py-[8px] px-[24px] rounded-full flex items-center" >
                                            <p className=" swipe text-[14px] leading-[20px] font-semibold bg-red-500 text-white py-2 rounded-full px-5">Swipe</p>
                                        </div>
                                </div>
    
                            </div>
                            {/* style */}
                            <style jsx>{`
                                @import url('https://fonts.googleapis.com/css2?family=Inter&family=Josefin+Sans&family=Lobster&family=Montserrat&family=Poppins:wght@400;700&family=Roboto&display=swap');
                                @import url('https://fonts.googleapis.com/css2?family=Inter&family=Josefin+Sans&family=Lobster&family=Montserrat&family=Poppins&family=Roboto&display=swap');
                                @import url('https://fonts.googleapis.com/css2?family=Bona+Nova:ital@1&family=Inter&family=Josefin+Sans&family=Lobster&family=Montserrat&family=Poppins:ital@0;1&family=Roboto&display=swap');

                                .caroselBody , .swipe{
                                    background-color: ${bgColor};
                                }
                                .title, .hook{
                                    font-family: ${font};
                                    color: ${textColor};
                                    
                                    }
                                
                            `}</style>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item max-md:block w-full">
                        <div className="md:flex-1 md:w-1/2 w-full block min-w-0 pt-3 pb-6 pl-3 pr-6 shrink-0">
                            <div className="flex items-center  justify-between gap-4">
                                <p className="flex-1 text-sm font-semibold tracking-widest text-gray-500">SLIDE 2</p>
                                </div>
                                <div className="mt-5 space-y-6"><div className="mt-5 space-y-6"><div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                                    <div className="mt-1.5">
                                        <input type="text"  onBlur={e => setHeading2(e.target.value)} id="" placeholder="" className="block w-full px-3 py-2 text-gray-900 border-0 shadow-sm rounded-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 caret-blue-500" defaultValue={`Three Steps`} />
                                    </div>
                                </div>
                            </div>
                                <div className="mt-5 space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                        <div className="mt-1.5">
                                            <textarea onBlur={e => setHook2(e.target.value)} cols={20} rows={8}  id="" placeholder="" className="block w-full px-3 py-2 text-gray-900 border-0 shadow-sm rounded-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 caret-blue-500" defaultValue="The brain learns three steps: information, meaning, and emotion. Combine all three for effective learning." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 h-auto w-full block m-2 min-h-80 relative bg-red-500 p-5 caroselBody" ref={pushRef}>
                            <h1 className= "title text-3xl font-bold">{`${heading2}`}</h1>
                            <h3 className="hook text-lg font-semibold py-5">{`${hook2}`}</h3>
                            <div className="absolute inset-x-0  bottom-5 border bg-white rounded-full mx-5 flex justify-center items-center">
                                <div className=" flex px-[10px] py-[8px] justify-between rounded-full" >
                                    <div className="flex gap-[8px] items-center">
                                        <Image src={img} className="object-cover w-[40px] h-[40px] border rounded-full img" alt="image" />
                                        <div className=" bg-white flex flex-col" >
                                            <p className=" text-[16px] leading-[24px] font-semibold whitespace-nowrap" >Khaled Mahmud</p>
                                            <p className=" text-[12px] leading-[18px]">@im_KhaledM</p>
                                        </div>
                                    </div>
                                        <div className="py-[8px] px-[24px] rounded-full flex items-center" >
                                            <p className=" swipe text-[14px] leading-[20px] font-semibold bg-red-500 text-white py-2 rounded-full px-5">Swipe</p>
                                        </div>
                                </div>
                               
                            </div>
                            <style jsx>{`
                                @import url('https://fonts.googleapis.com/css2?family=Inter&family=Josefin+Sans&family=Lobster&family=Montserrat&family=Poppins:wght@400;700&family=Roboto&display=swap');
                                @import url('https://fonts.googleapis.com/css2?family=Inter&family=Josefin+Sans&family=Lobster&family=Montserrat&family=Poppins&family=Roboto&display=swap');
                                @import url('https://fonts.googleapis.com/css2?family=Bona+Nova:ital@1&family=Inter&family=Josefin+Sans&family=Lobster&family=Montserrat&family=Poppins:ital@0;1&family=Roboto&display=swap');

                                .caroselBody, .swipe{
                                    background-color: ${bgColor2};
                                }
                                .title, .hook{
                                    font-family: ${font2};
                                    color: ${textColor2};
                                    
                                    }
                                
                            `}</style>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item max-md:block w-full">
                        <div className="flex-1 w-1/2 max-md:w-full min-w-0 pt-3 pb-6 pl-3 pr-6 shrink-0">
                            <div className="flex items-center justify-between gap-4">
                                <p className="flex-1 text-sm font-semibold tracking-widest text-gray-500" >SLIDE 3</p>
                                <div className="flex items-center justify-start gap-1 -ml-2"></div></div>
                                <div className="mt-5 space-y-6"><div className="mt-5 space-y-6"><div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                                    <div className="mt-1.5">
                                        <input type="text"  onBlur={e => setHeading3(e.target.value)} id="" placeholder="" className="block w-full px-3 py-2 text-gray-900 border-0 shadow-sm rounded-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 caret-blue-500" defaultValue={`Power of Visualization`} />
                                    </div>
                                </div>
                            </div>
                                <div className="mt-5 space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                        <div className="mt-1.5">
                                            <textarea onBlur={e => setHook3(e.target.value)} cols={20} rows={8} id="" placeholder="" className="block w-full px-3 py-2 text-gray-900 border-0 shadow-sm rounded-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 caret-blue-500" defaultValue="Visualizing information makes it more memorable. Make your visualization vivid and engaging." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 max-md:w-full h-auto m-2 min-h-80 relative bg-red-500 p-5 caroselBody" ref={pushRef}>
                            <h1 className= "title text-3xl font-bold">{`${heading3}`}</h1>
                            <h3 className="hook text-lg font-semibold py-5">{`${hook3}`}</h3>
                            <div className="absolute inset-x-0  bottom-5 border bg-white rounded-full mx-5 flex justify-center items-center">
                                <div className=" flex px-[10px] py-[8px] justify-between rounded-full" >
                                    <div className="flex gap-[8px] items-center">
                                        <Image src={img} className="object-cover w-[40px] h-[40px] border rounded-full img" alt="image" />
                                        <div className=" bg-white flex flex-col" >
                                            <p className=" text-[16px] leading-[24px] font-semibold whitespace-nowrap" >Khaled Mahmud</p>
                                            <p className=" text-[12px] leading-[18px]">@im_KhaledM</p>
                                        </div>
                                    </div>
                                        <div className="py-[8px] px-[24px] rounded-full flex items-center" >
                                            <p className=" swipe text-[14px] leading-[20px] font-semibold bg-red-500 text-white py-2 rounded-full px-5">Swipe</p>
                                        </div>
                                </div>
    
                            </div>
                            {/* style */}
                            <style jsx>{`
                                @import url('https://fonts.googleapis.com/css2?family=Inter&family=Josefin+Sans&family=Lobster&family=Montserrat&family=Poppins:wght@400;700&family=Roboto&display=swap');
                                @import url('https://fonts.googleapis.com/css2?family=Inter&family=Josefin+Sans&family=Lobster&family=Montserrat&family=Poppins&family=Roboto&display=swap');
                                @import url('https://fonts.googleapis.com/css2?family=Bona+Nova:ital@1&family=Inter&family=Josefin+Sans&family=Lobster&family=Montserrat&family=Poppins:ital@0;1&family=Roboto&display=swap');

                                .caroselBody , .swipe{
                                    background-color: ${bgColor3};
                                }
                                .title, .hook{
                                    font-family: ${font3};
                                    color: ${textColor3};
                                    
                                    }
                                
                            `}</style> 
                        </div>
                    </div> 
                                  
                </div>

            </div>
            <div className="flex justify-center w-full py-5 gap-2">
                <a onClick={()=> handleSlide(1)} href="#item1" className="btn btn-xs">1</a>
                <a onClick={()=> handleSlide(2)} href="#item2" className="btn btn-xs">2</a>
                <a onClick={()=> handleSlide(3)} href="#item3" className="btn btn-xs">3</a>

            </div>
            
        </div>

    );
};

export default Page;
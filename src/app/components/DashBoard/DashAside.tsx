"use client"
import { MdOutlinePostAdd } from "react-icons/md";
import { AiOutlineCarryOut, AiOutlineFall, AiOutlineEdit,AiOutlineSolution, AiOutlineRise, AiOutlineBorder, AiOutlinePicLeft, AiOutlineAlert, AiOutlineSetting, AiOutlineLineChart } from "react-icons/ai";
import Link from "next/link";

const DashAside = () => {
    return (
        <aside className="mt-24 border-r-2 ms-5 w-1/5 h-auto whitespace-nowrap" >
                <div className="sticky pb-5">
                    <button className="px-10 py-2 bg-main text-white font-semibold rounded-full"><span className="inline-block me-2 font-semibold"><AiOutlineEdit /></span>Write Post</button>
                </div >
                <div className="  max-h-auto">
                <ul className="space-y-8 overflow-y-scroll h-[25em]  py-5 font-medium ps-2  text-gray-600">
                    <li><Link href='/app/ai'><span className="inline-block me-2 font-semibold"><AiOutlinePicLeft /></span>Post Generator</Link></li>
                    <li><Link href='/app/ideas'><span className="inline-block me-2 font-semibold"><AiOutlineAlert /></span>Ideas Generator</Link></li>
                    <li><Link href='/app/carousel'><span className="inline-block me-2 font-semibold"><AiOutlineBorder /></span>Carousel Maker</Link></li>
                    <li><Link href=''><span className="inline-block me-2 font-semibold"><MdOutlinePostAdd /></span>Post</Link></li>
                    <li><Link href='/app/content-inspiration'><span className="inline-block me-2 font-semibold"><AiOutlineLineChart /></span>Content Inspiration</Link></li>
                    <li><Link href=''><span className="inline-block me-2 font-semibold"><AiOutlineSolution /></span>Post for You</Link></li>
                    <li><Link href=''><span className="inline-block me-2 font-semibold"><AiOutlineCarryOut /></span>Schedule</Link></li>
                    <li><Link href=''><span className="inline-block me-2 font-semibold"><AiOutlineSetting /></span>Workspace Setting</Link></li>
                    
                </ul>
                </div>
                <div className="p-5 bg-gray-100 mr-10 rounded-xl border border-gray-300 mt-5">
                        <p className="text-sm">Words generated 0.00K / 10K</p>
                        <p className="h-2 bg-gray-400 w-full rounded-xl my-2"></p>
                        <p className="text-sm text-gray-500">You are on a trial plan</p>
                </div>
            </aside>
    );
};

export default DashAside;
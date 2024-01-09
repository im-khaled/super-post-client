
import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { RiBardFill } from "react-icons/ri";

const IdeaCard = ({content}:any) => {
    
      
    return (
        <div>
            
                <div className="px-2 py-2 rounded-lg border shadow-sm space-y-6 sm:p-6">
                
                        <p className="text-base font-normal text-gray-900 cursor-pointer">{content && content}</p>
                        <div className="flex items-center gap-2">
                            <div className="relative w-full group">
                                <button type="button" className="flex items-center justify-center w-full gap-2 p-2 text-sm font-medium leading-6 text-gray-500 transition-all duration-150 rounded-full group bg-gray-50 hover:text-gray-700 hover: ring-gray-200 ring-1 ring-transparent"><span className="sr-only">Generate</span><span><RiBardFill/></span></button>
                                <span className="absolute px-3 py-2 text-xs font-semibold text-white transition-all duration-200 scale-0 -translate-x-1/2 bg-gray-900 rounded-md -top-10 group-hover:scale-100 left-1/2 whitespace-nowrap">Generate Post with this Idea</span>
                            </div>
                            <div className="relative w-full group">
                                <button type="button" className="flex items-center justify-center w-full gap-2 p-2 text-sm font-medium leading-6 text-gray-500 transition-all duration-150 rounded-full group bg-gray-50 hover:text-gray-700 hover:ring-gray-200 ring-1 ring-transparent"><span className="sr-only">Save</span><span><FaPlus/></span></button>
                                <span className="absolute px-3 py-2 text-xs font-semibold text-white transition-all duration-200 scale-0 -translate-x-1/2 bg-gray-900 rounded-md -top-10 group-hover:scale-100 left-1/2">Save</span>
                            </div>
                        </div>
                </div>
            
        </div>
    );
};

export default IdeaCard;
import ContentHeader from "@/app/components/DashBoard/ContentHeader";
import IdeaCard from "@/app/components/GenerateIdeas/IdeaCard";
import { AiOutlineEdit } from "react-icons/ai";
import { RiBardFill } from "react-icons/ri";



const page = () => {
    type obje = {
        title: string,
        details: string
    }
    const header: obje = {
        title: 'Post Ideas Generator',
        details: 'Generate post ideas for your LinkedIn posts.'
    }
    return (
        <div className="mt-24 w-full">
            <ContentHeader text={header}></ContentHeader>
            <div className="flex justify-start">
                <div className=" w-full space-y-5">
                    <p>Add one topic or industry that you want to generate ideas for.</p>
                    <input type="text" placeholder="SEO, Brand Promotion, New Technology..." className="px-5 py-2 border border-gray-300 rounded-xl input-primary w-4/5 max-w-lg" />
                    <button className=" flex justify-center items-center px-5 py-2 bg-main hover:bg-blue-500 text-white font-semibold  rounded-full"><span className="block me-2 font-semibold text-lg"><RiBardFill /></span><p className="block ">Generates Ideas</p></button>
                </div>
                <div className="grid grid-cols-2 gap-5 px-5">
                    <IdeaCard></IdeaCard>
                    <IdeaCard></IdeaCard>
                </div>
            </div>
        </div>
    );
};

export default page;
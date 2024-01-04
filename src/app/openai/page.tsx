import OpenAI from "openai";
import QuestionAns from "../components/openai/QuestionAns";


const page = () => {
    const openai:any = new OpenAI({
        apiKey: process.env.OPENAI_API_KEy,
      });
    
    return (
        <div>
            <QuestionAns openai={openai}></QuestionAns>
        </div>
    );
};

export default page;
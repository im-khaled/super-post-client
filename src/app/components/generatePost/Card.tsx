import ContentHeader from "../DashBoard/ContentHeader";
import SingleCard from "./SingleCard";

const getData = async () => {
    const data = await fetch(`${process.env.NEXTAUTH_URL}api/getCard`, { cache: "no-store" })
    const result = await data.json();
    return result;

}
const Card = async () => {
    const result = await getData();
    type obje ={
        title:string,
        details:string
    }
    const header:obje = {
        title: 'Generate posts with AI',
        details:'Select a template to generate high-quality posts with AI'
    }
    return (<div className="pb-5">
        <ContentHeader text={header}></ContentHeader>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5 w-full">
            
            {
                result.map((data: any) => <SingleCard title={data.title} img={data.img} cardDetails={data.cardDetails} key={data._id}></SingleCard>)
            }
        </div>
    </div>

    );
};

export default Card;
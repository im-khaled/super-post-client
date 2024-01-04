import ContentHeader from "../DashBoard/ContentHeader";
import SingleCard from "./SingleCard";

const getData = async () => {
    const data = await fetch('http://localhost:3000/api/getCard', { cache: "no-store" })
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
    return (<div>
        <ContentHeader text={header}></ContentHeader>
        <div className="grid grid-cols-3 gap-5 w-full">
            {
                result.map((data: any) => <SingleCard title={data.title} img={data.img} cardDetails={data.cardDetails} key={data._id}></SingleCard>)
            }
        </div>
    </div>

    );
};

export default Card;
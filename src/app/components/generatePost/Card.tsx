import Image from "next/image";
import SingleCard from "./singleCard";

const getData = async()=>{
    const data = await fetch('http://localhost:3000/api/getCard', {cache:"no-store"})
    const result = await data.json();
    return result;

}
const Card = async() => {
    const result = await getData();
    return (
        <div className="grid grid-cols-3 gap-5 w-full px-5">
            {
                result.map((data:any) => <SingleCard title={data.title} img={data.img} cardDetails={data.cardDetails} key={data._id}></SingleCard>)
            }
        </div>
    );
};

export default Card;
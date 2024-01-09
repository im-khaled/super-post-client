import Card from "../components/generatePost/Card";


const page = () => {
    const date = new Date().toDateString();
    const time = new Date();
    const timeStamp = time.getTime().toString();

    return (<div className="relative mt-24">
                <Card></Card>    
        </div>
    );
};

export default page;
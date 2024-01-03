
const ContentHeader = ({text}:any) => {

    const {title, details} = text;
    return (
        <div className="px-5 w-full">
            <h2 className="text-2xl font-semibold leading-10">{title}</h2>
            <p className="text-sm text-gray-500">{details}</p>
            <hr className="my-5 w-full" />
        </div>
    );
};

export default ContentHeader;
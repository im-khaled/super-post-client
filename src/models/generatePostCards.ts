import mongoose, { Schema, models } from "mongoose";

interface Post {
    id: string,
    cardDetails: string,
    img: string,
    title: string
}

const postSchema = new Schema <Post>({
    id:{
        type: String,
        required: true,
        unique: true
    },
    cardDetails:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    }
},
{
    timestamps: true
}
);

const GeneratePostCards = models.GeneratePostCards || mongoose.model("GeneratePostCards", postSchema); ;

export default GeneratePostCards;
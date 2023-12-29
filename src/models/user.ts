import mongoose, { Schema, models } from "mongoose";

interface Iuser {
    id: string,
    email: string,
}

const userSchema = new Schema <Iuser>({
    id:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
}
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
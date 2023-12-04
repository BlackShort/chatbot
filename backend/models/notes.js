import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    messages: [
        {
            usermsg: {
                type: String,
                required: true,
            },
            apimsg: {
                type: String,
                required: true,
            },
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Chats = mongoose.model("Chats", schema);
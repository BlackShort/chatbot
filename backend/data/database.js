import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'ThinkCraft',
    }).then(() => {
        console.log("Database Connected!");
    }).catch((error) => {
        console.log(error);
    });
};
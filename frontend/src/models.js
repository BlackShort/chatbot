import * as mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017', {
    dbName: 'ThinkCraft',
}).then(() => {
    console.log("Database Connected!");
}).catch((error) => {
    console.log(error);
});

const chatSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    messages: [
        {
            usermsg: {
                type: String,
                required: true,
            },
            apimesg: {
                type: String,
                required: true,
            },
        },
    ],
});

const Chat = mongoose.model("Chat", chatSchema);

const addChatData = async (title, userMessage, aiResponse) => {
    try {
        // Create a new Chat document
        const newChatData = new Chat({
            Title: title,
            messages: [{
                usermsg: userMessage,
                apimesg: aiResponse,
            }],
        });

        // Save the document to the database
        const savedData = await newChatData.save();

        console.log('Chat data saved:', savedData);
        return savedData;
    } catch (error) {
        console.error('Error saving chat data:', error);
        throw error;
    }
};

export default addChatData;
// Example usage
// const title = 'Conversation 1';
// const userMessage = 'Hello, ChatGPT!';
// const aiResponse = 'Hi there! How can I assist you?';

// addChatData(title, userMessage, aiResponse);

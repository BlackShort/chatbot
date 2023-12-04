import React, { createContext, useState } from 'react';
import sendMsgToApi from './fetchfromApi.js';

const Context = createContext();

const ChatContextProvider = ({ children }) => {

    const [typing, setTyping] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [sidebar, setSidebar] = useState(true);
    const [loading, setLoading] = useState(false);
    const [profileDetails, setProfileDetails] = useState(false);

    const [input, setInput] = useState('');
    const [chats, setChats] = useState([]);
    const [activeChatIndex, setActiveChatIndex] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    const sendChatData = async (chatData) => {
        try {
            const response = await fetch('http://localhost:4000/api/v1/chats/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(chatData),
            });

            if (response.ok) {
                console.log('Chat data sent successfully');
            } else {
                console.error('Error sending chat data:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending chat data:', error);
        }
    };

    // Function to Get response from API
    const getResponse = async (messageText) => {
        setTyping(true);
        const response = await sendMsgToApi(messageText);
        console.log(response, chats);
        if (response.answer) {
            setTyping(false);
        }

        let title = (messageText.length > 9 ? messageText.slice(0, 10) : messageText);
        addMessageToActiveChat(response.answer, true);
        // addChatData(title, messageText, response.answer);
    }

    // Function to generate a unique ID
    const generateID = () => {
        return '_' + Math.random().toString(36).substring(2, 9);
    };

    // Function to add a message to the active chat
    const addMessageToActiveChat = (text, codebot) => {
        if (activeChatIndex !== null && text !== undefined) {
            const newMessage = {
                id: generateID(),
                text,
                codebot,
                timestamp: Date.now(),
            };

            const updatedChat = [...chats];
            updatedChat[activeChatIndex].messages.push(newMessage);
            setChats(updatedChat);

            // Send chat data to backend
            const chatData = {
                chatId: chats[activeChatIndex].id,
                messages: updatedChat[activeChatIndex].messages,
            };
            sendChatData(chatData);
        } else {
            console.log('Message Not Added');
        }
    };


    // Function to create a new chat and make it active
    const createNewChat = () => {
        // Create a new chat
        const timestamp = Date.now();
        const newChat = {
            id: generateID(),
            topic: 'New Chat',
            messages: [
                {
                    id: generateID(),
                    text: "Hi there! I'm CodeBot, your AI chat assistant",
                    assistant: true,
                    timestamp,
                }
            ],
            timestamp,
        };
        setChats((prevChats) => [newChat, ...prevChats]);
        setActiveChatIndex(0);
    };


    // Function to select an existing chat
    const selectChat = (chatIndex) => {
        setActiveChatIndex(chatIndex);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    // Function to delete an existing chat
    const deleteChat = (chatIndex) => {
        const updatedChats = [...chats];
        updatedChats.splice(chatIndex, 1);
        setChats(updatedChats);
        setLoading(false);

        // Clear the active chat if it's the one being deleted
        if (chatIndex === activeChatIndex) {
            setActiveChatIndex(null);
        }
    };

    return (
        <Context.Provider value={{
            typing, setTyping,
            chats, setChats,
            sidebar, setSidebar,
            showProfile, setShowProfile,
            loading, setLoading,
            profileDetails, setProfileDetails,
            input, setInput,
            activeChatIndex, setActiveChatIndex, addMessageToActiveChat,
            getResponse, createNewChat, deleteChat, selectChat,
            isAuthenticated, setIsAuthenticated,
            user, setUser
        }}>
            {children}
        </Context.Provider>
    )
}

export { ChatContextProvider, Context };

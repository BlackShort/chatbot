import axios from 'axios';

const sendMsgToApi = async (question) => {
    const options = {
        method: 'POST',
        url: 'https://simple-chatgpt-api.p.rapidapi.com/ask',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '183b0037c1mshc2b8514eabdcb63p189f94jsnf585d7539420',
            'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com'
        },
        data: {
            question: question
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response);
        return (response.data);
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export default sendMsgToApi
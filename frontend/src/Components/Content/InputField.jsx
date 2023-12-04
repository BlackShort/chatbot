import React, { useContext } from 'react';
import { SendRounded } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';
import { Context } from '../../Context/Context';

const InputField = () => {

    const { activeChatIndex, addMessageToActiveChat, input, setInput, getResponse, profileDetails } = useContext(Context);

    const sendMessage = (e) => {
        e.preventDefault();
        const inputText = input;
        setInput('');
        addMessageToActiveChat(inputText, false);
        getResponse(inputText);
    };

    return (
        <form style={{ width: '100%', height: '16%', paddingTop: '0.5em' }} onSubmit={sendMessage} method='post'>
            {
                (activeChatIndex !== null && !profileDetails) &&
                <Stack m={'0 0 1.5em 0'} alignItems={'center'} justifyContent={'center'}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'space-between',
                        borderRadius: '0.5em',
                        height: '8vh',
                        border: "1px solid gray",
                        width: { xs: '90%', sm: '70%' },
                        padding: '0.5em 0.6em 0.5em 1em',
                        boxShadow: "1px 2px 10px #222",
                    }}>
                        <input
                            type='text'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Send a message'
                            style={{
                                width: '90%',
                                height: '100%',
                                background: 'transparent',
                                fontSize: '1rem',
                                border: 'none',
                                outline: 'none',
                            }}
                        />
                        <Button type='submit' size='small' disabled={input.trim().length <= 0}
                            sx={{
                                minWidth: 'auto',
                                background: (input.trim().length > 0) && 'rgb(25, 195, 125)',
                                '&:hover': {
                                    background: (input.trim().length > 0) && 'rgb(19 163 104)',
                                },
                            }}><SendRounded sx={{ fill: (input.trim().length <= 0) && 'gray' }} /></Button>
                    </Box>
                </Stack >
            }
        </form>
    )
}

export default InputField
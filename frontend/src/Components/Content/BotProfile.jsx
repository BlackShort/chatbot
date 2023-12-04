import React, { useContext } from 'react';
import { Avatar, Button, Stack, Typography } from '@mui/material';
// import Messages from './Messages';
import { Context } from '../../Context/Context';
import chatbot from '../../assets/chatbot.png';
import { KeyboardBackspaceRounded } from '@mui/icons-material';

const BotProfile = () => {
    const { profileDetails, setProfileDetails } = useContext(Context);

    return (
        <Stack position={'absolute'} zIndex={'10'} height={'-webkit-fill-available'} overflow={'hidden'}
            sx={{
                width: '-webkit-fill-available',
                backdropFilter: 'blur(15px)',
                alignItems: 'center',
                justifyContent: 'start',
                paddingInline: '5%'
            }}
        >
            <Stack alignItems={'center'} mt={3} gap={'1em'}>
                <Avatar className='ProfileAnimation' src={chatbot} sx={{ width: '7em', height: '7em' }}></Avatar>
                <Typography variant='h4'>CodeBot</Typography>
                <Typography sx={{ width: '80%', textAlign: 'center' }} variant='subtitle1'>Hi there! I'm CodeBot, your trusty AI chat companion. My mission is to make your life easier. Need answers? I've got the knowledge. Struggling with problems? I'm here to help. Let's explore, learn, and tackle challenges together. Welcome to a world of endless possibilities with me by your side!</Typography>
                <Button className='ProfileAnimation' variant='contained' onClick={() => setProfileDetails(!profileDetails)} sx={{ width: 'fit-content', gap: '1em' }}><KeyboardBackspaceRounded /> Chat Again</Button>
            </Stack>
        </Stack>
    )
}

export default BotProfile
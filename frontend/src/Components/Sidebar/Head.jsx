import React, { useContext } from 'react';
import { Stack, Avatar, IconButton, Button } from '@mui/material';
import { AddRounded, VerticalSplitRounded } from '@mui/icons-material';
import profile from '../../assets/profile.jpeg';
import { Context } from '../../Context/Context';

const Head = () => {
    const { createNewChat, sidebar, setSidebar, setShowProfile } = useContext(Context);

    return (
        <Stack direction={'row'} bgcolor={{ xs: '#0c0e16', md: '#0c0e16a1' }} alignItems={'center'} justifyContent={'space-between'} height={'10%'} gap={'1em'} paddingX={'1em'}>
            <Button onClick={() => setShowProfile(true)} sx={{ minWidth: 'auto', padding: 0, borderRadius: '50%' }}><Avatar src={profile}></Avatar></Button>
            <Stack direction={'row'} gap={'1em'}>
                <IconButton onClick={() => createNewChat()} aria-label="New Chat" color="primary">
                    <AddRounded />
                </IconButton>
                <IconButton onClick={() => setSidebar(!sidebar)} aria-label="Sidebar" color="primary">
                    <VerticalSplitRounded />
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default Head
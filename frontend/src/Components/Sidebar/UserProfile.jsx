import React, { useContext } from 'react';
import { Stack, List, ListItem, ListItemText, Typography, Avatar, Button, ListItemAvatar } from '@mui/material';
import { ChatRounded, KeyboardBackspaceRounded, LogoutRounded, PersonRounded } from '@mui/icons-material';
import profile from '../../assets/profile.jpeg';
import { Context } from '../../Context/Context';
import { Logout } from '../../Context/ChatsFunctions';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const { chats, setShowProfile, setIsAuthenticated, user } = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await Logout(setIsAuthenticated);
        navigate('/login');
    };

    return (
        <Stack className='ChatBar' bgcolor={'rgb(32 33 35 / 42%)'} height={'90%'}>
            <Button onClick={() => { setShowProfile(false); }} sx={{ width: 'fit-content' }}><KeyboardBackspaceRounded fontSize='large' /></Button>
            <Stack alignItems={'center'} mt={3} gap={'1em'}>
                <Avatar className='ProfileAnimation' src={profile} sx={{ width: '7em', height: '7em' }}></Avatar>
                <Typography variant='h5'>{user.name || 'Hostmon'}</Typography>
            </Stack>
            <Stack className='StretchAnimation'>
                <Stack alignItems={'center'} bgcolor={'#1d1d1d'} mt={'1em'}>
                    <List sx={{ width: '100%', paddingRight: '0.5em', gap: '1em' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ background: '#2d2d2d' }}>
                                    <ChatRounded />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Chats"
                            />
                            <Typography>{chats.length}</Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ background: '#2d2d2d' }}>
                                    <PersonRounded />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText variant='subtitle1' sx={{ overflow: 'hidden' }}>{user.email || "Hostmon@gmail.com"}</ListItemText>
                        </ListItem>
                    </List>
                </Stack>
                <Stack alignItems={'center'} mt={8}>
                    <Button sx={{ width: 'fit-content' }} onClick={handleLogout} variant='contained' color='warning' startIcon={<LogoutRounded />}>Log out</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default UserProfile
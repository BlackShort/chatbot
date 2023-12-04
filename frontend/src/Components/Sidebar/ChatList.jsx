import React, { useContext } from 'react';
import { Stack, List, ListItem, ListItemText, Typography, Button, ListItemIcon } from '@mui/material';
import { ChatBubbleRounded, DeleteRounded } from '@mui/icons-material';
import Emptybox from '../../assets/Emptybox.png';
import { Context } from '../../Context/Context';

const ChatList = () => {
    
    const { activeChatIndex, selectChat, loading, chats, deleteChat } = useContext(Context);

    const getChatHeader = (chatTimestamp) => {
        const oneDayMilliseconds = 24 * 60 * 60 * 1000;
        const todayTimestamp = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
        const chatDate = new Date(chatTimestamp);
        const chatDateTimestamp = new Date(chatDate.setHours(0, 0, 0, 0)).getTime();
        const diffInDays = Math.floor((todayTimestamp - chatDateTimestamp) / oneDayMilliseconds);

        if (diffInDays === 0) {
            return 'Today';
        } else if (diffInDays === 1) {
            return 'Yesterday';
        }
        else if (diffInDays > 1 && diffInDays < 7) {
            return `${diffInDays} Days ago`;
        } else {
            return 'Older';
        }
    };

    const sortedChats = [...chats].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return (
        <Stack className='ChatBar' bgcolor={{ xs: 'rgb(32 33 35)', md: 'rgb(32 33 35 / 42%)' }} height={'90%'} sx={{ overflowY: 'scroll' }}>
            {
                (sortedChats.length > 0) ?
                    <List sx={{ width: '-webkit-fill-available', margin: '0 0.7em', flexDirection: 'column-reverse' }}>
                        {
                            sortedChats?.map((chat, index) => (
                                <React.Fragment key={chat.id}>
                                    {
                                        index === 0 || getChatHeader(chat.timestamp) !== getChatHeader(sortedChats[index - 1].timestamp) ? (
                                            <Typography
                                                sx={{ fontFamily: 'cursive', marginBlock: '1em', borderRadius: '25px', padding: '0 1em', background: '#e26914', width: 'max-content', fontSize: '0.8rem' }}
                                                variant='subtitle1'>{getChatHeader(chat.timestamp)}</Typography>
                                        ) : null
                                    }
                                    <ListItem onClick={() => selectChat(chats.indexOf(chat))} className={(index === activeChatIndex) ? 'active-link' : ''}
                                        sx={{
                                            paddingInline: '1em',
                                            gap: '1em',
                                            mt: '1px',
                                            cursor: 'pointer',
                                            borderRadius: '0.35em',
                                            '&:hover': {
                                                background: '#ffffff12',
                                                transition: '0.25s ease-in-out'
                                            }
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 'auto' }}>
                                            <ChatBubbleRounded />
                                        </ListItemIcon>
                                        <ListItemText primary={chat.topic} />
                                        {
                                            (index === activeChatIndex && !loading) &&
                                            <ListItemIcon sx={{ cursor: 'pointer', minWidth: 'auto', position: 'absolute', right: '0.5em' }}>
                                                <Button onClick={() => deleteChat(chats.indexOf(chat))} sx={{ minWidth: 'auto' }}><DeleteRounded /></Button>
                                            </ListItemIcon>
                                        }
                                    </ListItem>
                                </React.Fragment>
                            ))
                        }
                    </List>
                    :
                    <Stack height={'100%'} alignItems={'center'} justifyContent={'center'}>
                        <Typography variant='h5' color={'gray'} mb={1} sx={{ userSelect: 'none' }}>No Chats Found</Typography>
                        <img src={Emptybox} alt="" width={80} height={80} style={{ userSelect: 'none' }} draggable='false' />
                    </Stack>
            }
        </Stack>
    )
}

export default ChatList;

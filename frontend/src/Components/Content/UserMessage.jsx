import React, { useContext, useEffect, useRef } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import Messages from './Messages';
import { Context } from '../../Context/Context';
import Loader from './Loader';
import BotProfile from './BotProfile';
import Texting from '../../assets/Texting.svg';
import { AddRounded } from '@mui/icons-material';

const UserMessage = () => {
  const { createNewChat, activeChatIndex, loading, profileDetails } = useContext(Context);

  const msgEndRef = useRef(null);
  useEffect(() => {
    if (msgEndRef.current) {
      msgEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  });

  return (
    <Stack
      width={'-webkit-fill-available'}
      height={'calc(100% - (30% + 1em))'}
      alignItems={'center'}
      overflow={profileDetails ? 'hidden' : 'scroll'}
      p={'1em 0'}
      position={'relative'}
    >
      {
        (activeChatIndex !== null) ?
          (
            loading ?
              (
                <Stack alignItems={'center'} justifyContent={'center'} height={'-webkit-fill-available'} ><Loader /></Stack>
              ) :
              (
                <>
                  <Messages activeChatIndex={activeChatIndex} />
                  <div ref={msgEndRef}></div>
                </>
              )
          ) :
          (
            <Stack alignItems={'center'} justifyContent={'flex-start'} height={'-webkit-fill-available'} gap={'1em'}>
              <img src={Texting} alt="" width={300} height={300} style={{ userSelect: 'none' }} draggable='false' />
              <Typography variant={'h3'} sx={{ userSelect: 'none', color: 'gray', fontSize: { xs: '2.2rem', sm: '3rem' } }}>Start New Chat!</Typography>
              <Button onClick={createNewChat} variant='contained' color='warning' size='small' startIcon={<AddRounded />}>Create</Button>
            </Stack>
          )
      }
      {profileDetails && <BotProfile />}
    </Stack>
  )
}

export default UserMessage
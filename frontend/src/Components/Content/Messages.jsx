import { Avatar, Stack, Typography } from '@mui/material';
import AiProfile from '../../assets/chatbot.png';
import profile from '../../assets/profile.jpeg';
import { Context } from '../../Context/Context';
import { useContext } from 'react';

const Messages = ({ activeChatIndex }) => {
  const { chats } = useContext(Context);

  return (
    <Stack width={{ xs: '90%', sm: '80%' }} direction={'column'}>
      {
        chats[activeChatIndex]?.messages.map((msg) => (
          <Stack
            key={msg.id}
            direction={'row'}
            gap={'1em'}
            bgcolor={(msg.assistant || msg.codebot) ? 'rgb(33 34 37)' : 'rgb(68 70 84)'}
            p={'1em'}
            mb={(msg.assistant || msg.codebot) && '2em'}
            borderRadius={msg.assistant ? '0.35em 0.35em' : (msg.codebot ? '0 0 0.35em 0.35em' : '0.35em 0.35em 0 0')}
          >
            <Avatar src={(msg.assistant || msg.codebot) ? AiProfile : profile}></Avatar>
            <Typography variant='subtitle1'>{msg.text}</Typography>
          </Stack>
        ))
      }
    </Stack >
  )
}

export default Messages;

import React, { useContext } from 'react';
import { Stack } from '@mui/material';
import UserMessage from './UserMessage';
import InputField from './InputField';
import Navbar from './Navbar';
import { Context } from '../../Context/Context';

const Content = () => {
  const { sidebar } = useContext(Context);

  return (
    <Stack
      width={{ xs: '100%', md: sidebar ? '80%' : '100%' }}
      height={'100%'}
      bgcolor={'rgb(52 53 65/0.6)'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Navbar />
      <UserMessage />
      <InputField />
    </Stack>
  )
}

export default Content
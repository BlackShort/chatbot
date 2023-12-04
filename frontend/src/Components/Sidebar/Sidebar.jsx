import React, { useContext } from 'react';
import { Stack } from '@mui/material';
import { Context } from '../../Context/Context';

import Head from './Head';
import UserProfile from './UserProfile';
import ChatList from './ChatList';

const Sidebar = () => {
  const { sidebar, showProfile } = useContext(Context);

  return (
    <Stack className='Sidebar'
      width={{ xs: '50%', sm: '265px', md: '265px' }}
      display={sidebar ? 'flex' : 'none'}
      height={'-webkit-fill-available'}
      direction={'column'}
      borderRight={1}
      borderColor={'gray'}
      zIndex={1}
      sx={{ position: { xs: 'absolute', md: 'inherit' } }}
    >

      <Head />
      {showProfile ? <UserProfile /> : <ChatList />}
    </Stack>
  )
}

export default Sidebar
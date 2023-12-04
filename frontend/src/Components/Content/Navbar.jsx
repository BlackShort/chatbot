import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import { MenuRounded } from '@mui/icons-material'
import { useContext } from 'react';
import chatbot from '../../assets/chatbot.png';
import MenuBar from './MenuBar';
import { Context } from '../../Context/Context';


const Navbar = () => {

    const { activeChatIndex, loading, typing, sidebar, setSidebar, setProfileDetails, profileDetails } = useContext(Context);

    return (
        <Stack direction={'row'} height={'10%'} position={'relative'} width={'100%'} alignItems={'center'} justifyContent={'start'} p={{ xs: '1em', sm: '1em 1.5em' }}
            gap={'1em'} bgcolor={'#16171c'}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1em', cursor: 'pointer' }} onClick={() => setProfileDetails(!profileDetails)} >
                <Avatar src={chatbot}></Avatar>
                <Box>
                    <Typography variant='h5'>CodeBot</Typography>
                    <Typography sx={{ lineHeight: '1' }} variant='subtitle2'>{typing ? 'typing...' : 'online'}</Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: '1.5em' }}>
                {!sidebar &&
                    <Button className='side-btn' sx={{ minWidth: 'auto' }} variant='text' onClick={() => setSidebar(!sidebar)}>
                        <MenuRounded />
                    </Button>
                }
                {(!loading && activeChatIndex != null) && <MenuBar />}
            </Box>
        </Stack>
    )
}

export default Navbar
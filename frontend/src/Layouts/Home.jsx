import { Stack } from '@mui/material';
import Sidebar from '../Components/Sidebar/Sidebar';
import Content from '../Components/Content/Content';

const Home = () => {
    return (
        <Stack direction={'row'} position={'relative'} height={'100vh'} width={'100%'} overflow={'hidden'}>
            <Sidebar />
            <Content />
        </Stack>
    )
}

export default Home
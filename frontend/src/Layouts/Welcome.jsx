import { Stack } from '@mui/material'
import AppBar from './AppBar'

const Welcome = () => {
    return (
        <Stack alignItems={'flex-start'} height={'100%'} gap={'1em'} >
            <AppBar />
            <div>Welcome</div>
        </Stack>
    )
}

export default Welcome
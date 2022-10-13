import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useAppUrlBuilderContext } from '../../tools';
import { DefaultButton } from '../DefaultButton';


export const PublicHeader = () => {
    const router = useRouter();
    const appUrlBuilder = useAppUrlBuilderContext();

    const handleClick = () => {
        router.push(appUrlBuilder.login())
    }
    return (
        <Box sx={{ flexGrow: 1, marginBottom: '15px' }}>
            <AppBar position="static" sx={{backgroundColor:'rgb(147, 167, 199)'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Users
                    </Typography>
                    <DefaultButton label='Login' handleClick={handleClick} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
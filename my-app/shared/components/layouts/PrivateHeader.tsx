import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '../buttons';
import { useAuthController } from '../../../modules';


export const PrivateHeader = () => {
    const { exit } = useAuthController();
    return (
        <Box sx={{  marginBottom: '15px' }}>
            <AppBar position="static" sx={{backgroundColor:(theme)=>theme.palette.grey[700]}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Users Private
                    </Typography>
                    <Button label='Logout' handleClick={exit} type='button'/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
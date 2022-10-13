import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { DefaultButton } from '../DefaultButton';
import { useAuthController } from '../../../modules';


export const PrivateHeader = () => {
    const { exit } = useAuthController();
    return (
        <Box sx={{ flexGrow: 1, marginBottom: '15px' }}>
            <AppBar position="static" sx={{backgroundColor:'rgb(147, 167, 199)'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Users Private
                    </Typography>
                    <DefaultButton label='Logout' handleClick={exit} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAppSelector, useAppUrlBuilderContext } from '../../tools';
import { Button, LinkButton } from '../buttons';
import { useAuthController } from '../../../modules';


export const PublicHeader = () => {
    const appUrlBuilder = useAppUrlBuilderContext();
    const { isAuth } = useAppSelector(state => state.auth);
    const { exit } = useAuthController();
    
    return (
        <Box sx={{ marginBottom: '15px' }}>
            <AppBar position="static" sx={{ backgroundColor: 'rgb(147, 167, 199)' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Users
                    </Typography>
                    {isAuth ? (
                        <Button label='Logout' handleClick={exit} type='button' />
                    ) : (
                        <LinkButton href={appUrlBuilder.login()}>Login</LinkButton>
                    )}

                </Toolbar>
            </AppBar>
        </Box>
    );
}
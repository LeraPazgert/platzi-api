import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppSelector, useAppUrlBuilderContext } from '../../tools';
import { Button, LinkButton } from '../buttons';
import { Cart, useAuthController } from '../../../modules';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Drawer } from '@mui/material';



export const PublicHeader = () => {
    const appUrlBuilder = useAppUrlBuilderContext();
    const { isAuth } = useAppSelector(state => state.auth);
    const { exit } = useAuthController();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setOpen(open);
            };
    return (
        <Box sx={{ marginBottom: '15px' }}>
            <AppBar position="static" sx={{ backgroundColor: 'rgb(147, 167, 199)' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Users
                    </Typography>
                    {isAuth ? (
                        <>
                            <ShoppingCartIcon onClick={() => setOpen(true)} />
                            <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
                                <Cart />
                            </Drawer>
                            <Button label='Logout' handleClick={exit} type='button' />
                        </>
                    ) : (
                        <LinkButton href={appUrlBuilder.login()}>Login</LinkButton>
                    )}

                </Toolbar>
            </AppBar>
        </Box>
    );
}
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export const PrivateFooter = () => {
    return (
        <Box sx={{ position: 'absolute', bottom: 0 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="overline" component="div">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum at aut aliquid tempore beatae eveniet quod nulla optio maxime alias, repellat incidunt dicta nesciunt totam dolorum qui? Rem nulla quo sequi sapiente esse qui enim similique!
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
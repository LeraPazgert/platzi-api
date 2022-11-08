import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import pandaLogo from '../../assets/images/panda-logo.svg';

export const PublicFooter = () => {
  return (
    <AppBar
      position="static"
      sx={{
        marginTop: '20px',
        padding: '20px 20px 20px 20px',
        backgroundColor: theme => theme.palette.info.contrastText,
        marginLeft: 0,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Grid
        container
        width="35%"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRight: '1.5px solid',
          borderColor: theme => theme.palette.secondary.main,
          gap: '10px',
          paddingRight: '10px',
        }}
      >
        <Grid item sx={{ paddingTop: '10px' }}>
          <img src={pandaLogo} width="90px" height="90px" />
        </Grid>
        <Grid
          item
          sx={{
            color: 'white',
            marginTop: '-10px',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: '30px',
            }}
          >
            PANDA MARKET
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" sx={{ lineHeight: '12px', fontSize: '15px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi modi eaque
            dignissimos quod dolores!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" sx={{ lineHeight: '12px', fontSize: '15px' }}>
            2022 Val Kit, All Rights reserved
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        width="35%"
        sx={{
          lineHeight: '12px',
          borderRight: '1.5px solid',
          borderColor: theme => theme.palette.secondary.main,
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '15px',
        }}
      >
        <Grid item>
          <Typography variant="caption" sx={{ fontSize: '30px', color: 'white' }}>
            MENU
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" sx={{ fontSize: '15px' }}>
            About Us
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" sx={{ fontSize: '15px' }}>
            Contacts
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" sx={{ fontSize: '15px' }}>
            Terms & Condition
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" sx={{ fontSize: '15px' }}>
            Privacy Policy
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        width="35%"
        sx={{
          lineHeight: '12px',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '15px',
        }}
      >
        <Grid item>
          <Typography variant="caption" sx={{ fontSize: '30px', color: 'white' }}>
            FOLLOW US
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" sx={{ fontSize: '15px' }}>
            Twitter
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" sx={{ fontSize: '15px' }}>
            Instagram
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" sx={{ fontSize: '15px' }}>
            Facebook
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="overline" sx={{ fontSize: '15px' }}>
            Privacy Policy
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

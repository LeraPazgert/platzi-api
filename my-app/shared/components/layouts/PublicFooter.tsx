import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import logo from '../../assets/images/kiss-technology.svg';

export const PublicFooter = () => {
  const footerMenuLinks = ['About Us', 'Contacts', 'Terms & Condition', 'Privacy Policy'];
  const footerFollowLinks = ['TWITTER', 'INSTAGRAM', 'FACEBOOK'];
  return (
    <Box
      position="static"
      sx={{
        padding: '20px 20px 20px 20px',
        backgroundColor: theme => theme.palette.primary.main,
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
          <img src={logo} width="90px" height="90px" alt="" />
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
            YOUR MARKET
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

        {footerMenuLinks.map(item => (
          <Grid item key={item}>
            <Typography variant="overline" sx={{ fontSize: '15px' }}>
              {item}
            </Typography>
          </Grid>
        ))}
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

        {footerFollowLinks.map(item => (
          <Grid item key={item}>
            <Typography variant="overline" sx={{ fontSize: '15px' }}>
              {item}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { useAuthController } from '../../../modules/auth';
import { useAppUrlBuilderContext } from '../../tools';
import { Button } from '../buttons';

export const PrivateHeader = () => {
  const { exit } = useAuthController();
  const appUrlBuilder = useAppUrlBuilderContext();

  return (
    <Box sx={{ marginBottom: '15px' }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme => theme.palette.grey[700],
          padding: '5px 20px 5px 20px',
          marginBottom: '20px',
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '10px',
            justifyContent: 'space-between',
          }}
        >
          <Grid item>
            <Typography variant="h6" component="div" sx={{ color: 'white' }}>
              Private
            </Typography>
          </Grid>

          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              flex: '1 1',
            }}
          >
            <Links
              data={[
                { title: 'HOME', link: appUrlBuilder.home() },
                { title: 'ABOUT', link: appUrlBuilder.home() },
                { title: 'CONTACTS', link: appUrlBuilder.home() },
                { title: 'PRODUCTS', link: appUrlBuilder.products() },
              ]}
            />
          </Grid>

          <Grid item>
            <Button handleClick={exit} type="button">
              Logout
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

type Props = {
  data: { title: React.ReactNode; link: string }[];
};
const Links: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Box key={index}>
            <Typography
              variant="overline"
              sx={{
                cursor: 'pointer',
                fontSize: '25px',
                color: 'white',
                '&:hover': {
                  borderBottom: '2px solid ',
                  borderColor: theme => theme.palette.secondary.main,
                  transition: '0.2s',
                },
              }}
            >
              <Link href={item.link}>{item.title}</Link>
            </Typography>
          </Box>
        );
      })}
    </>
  );
};

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Badge, Box, Grid, Tooltip, Typography } from '@mui/material';
import Link from 'next/link';
import { FC, ReactNode, useMemo } from 'react';
import { useAuthController } from '../../../modules/auth';
import { useCartController } from '../../../modules/cart';
import logo from '../../assets/images/kiss-technology.svg';
import { useAppSelector, useAppUrlBuilderContext } from '../../tools';
import { Button, LinkButton } from '../buttons';

export const PublicHeader = () => {
  const appUrlBuilder = useAppUrlBuilderContext();
  const { isAuth, profile } = useAppSelector(state => state.auth);
  const { changeCartOpen, addedProducts } = useCartController();
  const { exit } = useAuthController();

  const amountOfProducts = useMemo(() => {
    return addedProducts.reduce((acc, cur) => acc + cur.amount, 0);
  }, [addedProducts]);

  return (
    <AppBar
      position="static"
      sx={{
        padding: '5px 20px 5px 20px',
        marginBottom: '20px',
        backgroundColor: theme => theme.palette.primary.light,
        marginLeft: 0,
        display: 'flex',
        flexDirection: 'column',
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
        <Grid
          item
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 0,
          }}
        >
          <Grid>
            <Grid item sx={{ paddingTop: '10px' }}>
              <img src={logo} width="70px" height="70px" alt="" />
            </Grid>
            <Grid
              item
              sx={{
                color: 'white',
                marginTop: '-5px',
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontSize: '13px',
                }}
              >
                YOUR MARKET
              </Typography>
            </Grid>
          </Grid>
          <Grid item sx={{ marginLeft: '20px' }}>
            <Typography variant="body1" component="div" sx={{ color: 'white' }}>
              {isAuth ? `Hello, ${profile?.name}!` : ''}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {isAuth ? (
            <>
              <Tooltip title="Cart">
                <Badge badgeContent={amountOfProducts} color="secondary" sx={{ color: 'white' }}>
                  <ShoppingCartIcon
                    onClick={() => changeCartOpen(true)}
                    sx={{ fontSize: '35px', ':hover': { cursor: 'pointer' } }}
                  />
                </Badge>
              </Tooltip>
              <Box sx={{ marginLeft: '15px', fontSize: '15px' }}>
                <Button handleClick={exit} type="button">
                  Logout
                </Button>
              </Box>
            </>
          ) : (
            <LinkButton href={appUrlBuilder.login()}>Login</LinkButton>
          )}
        </Grid>
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
    </AppBar>
  );
};
type Props = {
  data: { title: ReactNode; link: string }[];
};
const Links: FC<Props> = ({ data }) => {
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

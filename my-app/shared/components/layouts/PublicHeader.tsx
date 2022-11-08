import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { useAuthController } from '../../../modules';
import { useCartController } from '../../../modules/cart/controllers/CartListController';
import pandaLogo from '../../assets/images/panda-logo.svg';
import { useAppSelector, useAppUrlBuilderContext } from '../../tools';
import { Button, LinkButton } from '../buttons';

export const PublicHeader = () => {
  const appUrlBuilder = useAppUrlBuilderContext();
  const { isAuth, profile } = useAppSelector(state => state.auth);
  const { changeCartOpen, addedProducts } = useCartController();
  const { exit } = useAuthController();

  return (
    <AppBar
      position="static"
      sx={{
        padding: '5px 20px 5px 20px',
        marginBottom: '20px',
        backgroundColor: theme => theme.palette.info.main,
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
        }}
      >
        <Grid
          item
          spacing={1}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 0,
          }}
        >
          <Grid item sx={{ paddingTop: '10px' }}>
            <img src={pandaLogo} width="70px" height="70px" />
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
            ]}
          />
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
                <Badge
                  badgeContent={addedProducts.length}
                  color="secondary"
                  sx={{ color: 'white' }}
                >
                  <ShoppingCartIcon
                    onClick={() => changeCartOpen(true)}
                    sx={{ fontSize: '35px' }}
                  />
                </Badge>
              </Tooltip>
              <Box sx={{ marginLeft: '15px', fontSize: '15px' }}>
                <Button label="Logout" handleClick={exit} type="button" />
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
          PANDA MARKET
        </Typography>
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
                fontSize: '20px',
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

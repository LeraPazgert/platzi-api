import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAppUrlBuilderContext } from '../../tools';
import { LinkButton } from '../buttons';

export const AuthHeader = () => {
  const appUrlBuilder = useAppUrlBuilderContext();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: theme => theme.palette.grey[500],
        color: theme => theme.palette.grey[100],
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '20px',
        '&:hover': {
          backgroundColor: 'rgb(84, 96, 115)',
          opacity: [0.9, 0.8, 0.7],
          color: 'white',
        },
      }}
    >
      <Typography
        variant="body1"
        component="div"
        align="center"
        sx={{ fontSize: '40px', color: 'white' }}
      >
        Hello!
      </Typography>
      <Typography variant="overline" component="div" align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
      <LinkButton href={appUrlBuilder.register()}>Registration</LinkButton>
      <LinkButton href={appUrlBuilder.home()}>Home</LinkButton>
    </Box>
  );
};

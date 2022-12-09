import Box from '@mui/material/Box';
import { FC, PropsWithChildren } from 'react';
import { AuthHeader } from './AuthHeader';

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: theme => theme.palette.primary.light,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AuthHeader />
      {children}
    </Box>
  );
};

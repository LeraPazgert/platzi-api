import Box from '@mui/material/Box';
import { FC, PropsWithChildren } from 'react';
import { PrivateFooter } from './PrivateFooter';
import { PrivateHeader } from './PrivateHeader';

export const PrivateLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <PrivateHeader />
      {children}
    </Box>
  );
};

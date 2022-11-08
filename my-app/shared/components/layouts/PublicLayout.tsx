import Box from '@mui/material/Box';
import { FC, PropsWithChildren } from 'react';
import { PublicFooter, PublicHeader } from '../..';

export const PublicLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <PublicHeader />
      <Box> {children}</Box>
      <PublicFooter />
    </Box>
  );
};

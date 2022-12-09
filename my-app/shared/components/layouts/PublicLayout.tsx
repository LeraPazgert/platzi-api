import { Box, Grid } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { PublicFooter, PublicHeader } from '../..';

export const PublicLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <PublicHeader />
      <Box sx={{ flex: '1 1' }}>{children}</Box>
      <PublicFooter />
    </Box>
  );
};

// export const PublicLayout: FC<PropsWithChildren> = ({ children }) => {
//   return (
//     <Grid
//       container
//       sx={{
//         flexDirection: 'column',
//         // height: '100vh',
//       }}
//     >
//       <Grid item>
//         <PublicHeader />
//       </Grid>

//       <Grid item sx={{ flex: '1 1' }}>
//         {children}
//       </Grid>

//       <Grid item>
//         <PublicFooter />
//       </Grid>
//     </Grid>
//   );
// };

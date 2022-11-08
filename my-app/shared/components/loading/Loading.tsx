import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const Loading = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}
    >
      <CircularProgress size={100} />
    </Box>
  );
};

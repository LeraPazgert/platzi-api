import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const Loading = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: ' -50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <CircularProgress size={150} />
    </Box>
  );
};

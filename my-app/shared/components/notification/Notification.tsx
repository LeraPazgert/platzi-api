import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { useNotificationContext } from './context';

export const Notification = () => {
  const context = useNotificationContext();

  return (
    <Snackbar
      open={context.state.isOpen}
      autoHideDuration={6000}
      onClose={context.onClose}
      message={context.state.message}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={context.onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    />
  );
};

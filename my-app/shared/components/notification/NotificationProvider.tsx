import { FC, PropsWithChildren, useState } from 'react';
import { NotificationContext } from './context';
import { NotificationState } from './types';

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<NotificationState>({
    isOpen: false,
  });

  const onError = (message: string) => {
    setState({ isOpen: true, message, type: 'error' });
  };

  const onSuccess = (message: string) => {
    setState({ isOpen: true, message, type: 'success' });
  };

  const onClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setState({ ...state, isOpen: false });
  };

  return (
    <NotificationContext.Provider
      value={{
        state,
        onError,
        onSuccess,
        onClose,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

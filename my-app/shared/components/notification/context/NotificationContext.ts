import { createContext, useContext } from 'react';
import { NotificationState } from '../..';

type NotificationContextType = {
  state: NotificationState;
  onError: (message: string) => void;
  onSuccess: (message: string) => void;
  onClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
};

export const NotificationContext = createContext<NotificationContextType>(undefined!);

export const useNotificationContext = () => {
  return useContext(NotificationContext);
};

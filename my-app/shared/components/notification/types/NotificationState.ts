import { NotificationsStateTypes } from './NotificationsStateTypes';

export type NotificationState = {
  isOpen: boolean;
  message?: string;
  type?: NotificationsStateTypes;
};

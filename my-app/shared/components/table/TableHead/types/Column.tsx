import { ReactNode } from 'react';

export interface Column<T> {
  title: string;
  key: keyof T | ((r: T) => ReactNode);
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
}

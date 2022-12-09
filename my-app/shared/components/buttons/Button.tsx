import { Typography } from '@mui/material';
import DefaultButton from '@mui/material/Button';
import React, { FC, PropsWithChildren } from 'react';

type ButtonProps = {
  handleClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
  sx?: any;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, handleClick, type, sx }) => {
  return (
    <DefaultButton variant="contained" type={type} onClick={handleClick} sx={sx}>
      <Typography variant="overline" sx={{ fontSize: '15px', color: 'white' }}>
        {children}
      </Typography>
    </DefaultButton>
  );
};

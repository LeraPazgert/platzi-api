import { Typography } from '@mui/material';
import DefaultButton from '@mui/material/Button';
import React, { FC } from 'react';

type ButtonProps = {
  label: string;
  handleClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
};
export const Button: FC<ButtonProps> = ({ label, handleClick, type }) => {
  return (
    <DefaultButton variant="contained" type={type} onClick={handleClick}>
      <Typography variant="overline" sx={{ fontSize: '15px', color: 'white' }}>
        {label}
      </Typography>
    </DefaultButton>
  );
};

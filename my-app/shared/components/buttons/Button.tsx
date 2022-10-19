import React, { FC } from 'react';
import DefaultButton from '@mui/material/Button';

type ButtonProps = {
    label: string;
    handleClick?: () => void;
    type?: 'submit' | 'button' | 'reset'
}
export const Button: FC<ButtonProps> = ({ label, handleClick, type }) => {
    return (
        <DefaultButton variant="contained" type={type} onClick={handleClick}>{label} </DefaultButton>
    );
};
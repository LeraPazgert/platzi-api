import React, { FC } from 'react';
import Button from '@mui/material/Button';

type DefaultButtonProps = {
    label: string;
    handleClick?:()=>void;
}
export const DefaultButton: FC<DefaultButtonProps> = ({ label, handleClick }) => {
    return (
        <div>
            <Button variant="contained" type='submit' onClick={handleClick}>{label} </Button>
        </div>
    );
};
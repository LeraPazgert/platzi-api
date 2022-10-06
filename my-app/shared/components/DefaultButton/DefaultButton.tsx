import React, { FC } from 'react';
import Button from '@mui/material/Button';

type DefaultButtonProps = {
    label: string;
}
export const DefaultButton: FC<DefaultButtonProps> = ({ label }) => {
    return (
        <div>
            <Button variant="contained" type='submit'>{label}</Button>
        </div>
    );
};
import React, { FC, PropsWithChildren } from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

type ButtonProps = {
    href: string;
}
export const LinkButton: FC<PropsWithChildren<ButtonProps>> = ({ children, href }) => {
    return (
        <Link href={href}>
            <Button variant='contained'>{children}</Button>
        </Link>
    );
};
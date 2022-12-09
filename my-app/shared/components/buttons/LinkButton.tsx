import { Typography } from '@mui/material';
import DefaultButton from '@mui/material/Button';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';
import { Button } from './Button';

type ButtonProps = {
  href: string;
};

export const LinkButton: FC<PropsWithChildren<ButtonProps>> = ({ children, href }) => {
  return (
    <Link href={href}>
      <DefaultButton variant="contained">
        <Typography variant="overline" sx={{ fontSize: '15px', color: 'white' }}>
          {children}
        </Typography>
      </DefaultButton>
    </Link>
  );
};

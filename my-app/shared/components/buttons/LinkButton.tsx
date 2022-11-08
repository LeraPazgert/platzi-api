import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

type ButtonProps = {
  href: string;
};
export const LinkButton: FC<PropsWithChildren<ButtonProps>> = ({ children, href }) => {
  return (
    <Link href={href}>
      <Button variant="contained">
        <Typography variant="overline" sx={{ fontSize: '15px', color: 'white' }}>
          {children}
        </Typography>
      </Button>
    </Link>
  );
};

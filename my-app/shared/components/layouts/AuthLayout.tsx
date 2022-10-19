import { FC, PropsWithChildren } from "react";
import { AuthHeader } from "./AuthHeader";
import Box from '@mui/material/Box';

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
            <AuthHeader />
            {children}
        </Box>
    )
}
import { FC, PropsWithChildren } from "react";
import { PublicFooter, PublicHeader } from "../..";
import Box from '@mui/material/Box';

export const PublicLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <PublicHeader />
            {children}
            <PublicFooter />
        </Box>
    )
}
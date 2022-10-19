import { FC, PropsWithChildren } from "react";
import { PrivateFooter } from "./PrivateFooter";
import { PrivateHeader } from "./PrivateHeader";
import Box from '@mui/material/Box';


export const PrivateLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <PrivateHeader />
            {children}
            <PrivateFooter />
        </Box>
    )
}
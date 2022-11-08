import { Box } from "@mui/material";
import { FC } from "react";

type Props = {
    image: string
}
export const Slide: FC<Props> = ({ image }) => {
    return (
        <Box component="img" style={{
            width: '100%',
            height: '100%',
            opacity: 0.8,
            objectFit: 'cover',
        }} src={image} alt={image}></Box>
    )
}
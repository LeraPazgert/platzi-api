import { FC, PropsWithChildren } from "react";
import { PublicFooter, PublicHeader } from "../..";


export const PublicLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <PublicHeader />
            {children}
            <PublicFooter />
        </>
    )
}
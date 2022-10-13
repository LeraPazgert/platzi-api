import { FC, PropsWithChildren } from "react";
import { PrivateFooter } from "./PrivateFooter";
import { PrivateHeader } from "./PrivateHeader";



export const PrivateLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <PrivateHeader />
            {children}
            <PrivateFooter />
        </>
    )
}
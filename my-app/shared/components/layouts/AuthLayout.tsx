import { FC, PropsWithChildren } from "react";
import { AuthHeader } from "./AuthHeader";


export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div style={{ display: 'flex', width:'100%', height:'100%' }}>
            <AuthHeader />
            {children}
        </div>
    )
}
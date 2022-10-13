import { FC, PropsWithChildren } from "react"
import { useLayoutContext } from "../../features"
import { AuthLayout } from "./AuthLayout"
import { PrivateLayout } from "./PrivateLayout"
import { PublicLayout } from "./PublicLayout"

type Props = {
    layoutType: string;
}
export const LayoutComponent: FC<PropsWithChildren<Props>> = ({ layoutType, children }) => {
    const isAuth = useLayoutContext();


    if (layoutType === 'public' && !isAuth) {
        return <PublicLayout>{children}</PublicLayout>
    } else if (layoutType === 'private' || isAuth) {
        return <PrivateLayout>{children}</PrivateLayout>
    } else if (layoutType === 'auth') {
        return <AuthLayout>{children}</AuthLayout>
    }
    return null
}
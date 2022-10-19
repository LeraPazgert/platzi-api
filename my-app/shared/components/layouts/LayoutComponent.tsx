import { FC, PropsWithChildren, useMemo } from "react"
import { AuthLayout } from "./AuthLayout"
import { PrivateLayout } from "./PrivateLayout"
import { PublicLayout } from "./PublicLayout"
import { LayoutType } from "./types"

type Props = {
    layoutType: LayoutType;
}

const layouts: Record<LayoutType, FC<PropsWithChildren>> = {
    'public': PublicLayout,
    'private': PrivateLayout,
    'auth': AuthLayout
}

export const LayoutComponent: FC<PropsWithChildren<Props>> = ({ layoutType, children }) => {

    const Layout = useMemo(() => {
        return layouts[layoutType]
    }, [layoutType]);

    return <Layout>{children}</Layout>;

}
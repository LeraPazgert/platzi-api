import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";
import { useAppUrlBuilderContext } from "../../tools";
import { RouteData } from "../../types";


type Props = RouteData & { isAuth?: boolean };

export const PrivateRoute: FC<PropsWithChildren<Props>> = ({ children, ...rest }) => {
    const { isAuth } = rest;
    const router = useRouter();
    const appUrlBuilder = useAppUrlBuilderContext();
    const isRedirect = !isAuth;

    useEffect(() => {
        if (isRedirect) {
            router.push(appUrlBuilder.login())
        }
    }, [isRedirect, router, appUrlBuilder]);

    if (isRedirect) {
        return null;
    }

    return <>{children}</>
}
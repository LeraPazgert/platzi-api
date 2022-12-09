import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useAppSelector, useAppUrlBuilderContext } from '../../tools';
import { RouteData } from '../../types';

type Props = RouteData & { isAuth?: boolean };

export const PrivateRoute: FC<PropsWithChildren<Props>> = ({ children, ...rest }) => {
  const { isAuth, onlyForAdmin } = rest;
  const router = useRouter();
  const appUrlBuilder = useAppUrlBuilderContext();
  const { profile } = useAppSelector(state => state.auth);
  const isRedirect = !isAuth;
  const isRedirectForAdminPage = onlyForAdmin && profile?.role !== 'admin';

  useEffect(() => {
    if (isRedirect) {
      router.push(appUrlBuilder.login());
    }
    if (isRedirectForAdminPage) {
      router.push(appUrlBuilder.home());
    }
  }, [isRedirect, router, appUrlBuilder, isRedirectForAdminPage]);

  if (isRedirect) {
    return null;
  }

  return <>{children}</>;
};

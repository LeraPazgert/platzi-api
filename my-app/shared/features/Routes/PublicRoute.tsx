import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useAppUrlBuilderContext } from '../../tools';
import { RouteData } from '../../types';

type Props = RouteData & { isAuth?: boolean };

export const PublicRoute: FC<PropsWithChildren<Props>> = ({ children, ...rest }) => {
  const { isAuth, onlyNonAuth } = rest;
  const router = useRouter();
  const appUrlBuilder = useAppUrlBuilderContext();
  const isRedirect = isAuth && onlyNonAuth;

  useEffect(() => {
    if (isRedirect && router.pathname !== '/') {
      router.push(appUrlBuilder.home());
    }
  }, [isRedirect, router, appUrlBuilder]);

  if (isRedirect) {
    return null;
  }

  return <>{children}</>;
};

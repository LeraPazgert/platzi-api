import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import { LayoutComponent, Loading } from '../../components';
import { useAppSelector } from '../../tools';
import { RouteData } from '../../types';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

type Props = {
  routeData: RouteData;
};
export const Route: FC<PropsWithChildren<Props>> = ({ routeData, children }) => {
  const { name, title, isPublic, onlyNonAuth, onlyForAdmin, layoutType } = routeData;
  const { isAuth } = useAppSelector(state => state.auth);

  const RouterWrapper = isPublic ? PublicRoute : PrivateRoute;

  if (typeof isAuth !== 'boolean') {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <RouterWrapper
        isAuth={isAuth}
        name={name}
        title={title}
        isPublic={isPublic}
        layoutType={layoutType}
        onlyNonAuth={onlyNonAuth}
        onlyForAdmin={onlyForAdmin}
      >
        <LayoutComponent layoutType={layoutType}>{children}</LayoutComponent>
      </RouterWrapper>
    </>
  );
};

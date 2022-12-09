import { AuthFormView } from '../modules/auth';
import { Route } from '../shared';

import type { NextPage } from 'next';
const LoginPage: NextPage = () => {
  return (
    <Route
      routeData={{
        name: 'login',
        title: 'Login',
        isPublic: true,
        layoutType: 'auth',
        onlyNonAuth: true,
        onlyForAdmin: false,
      }}
    >
      <AuthFormView />
    </Route>
  );
};

export default LoginPage;

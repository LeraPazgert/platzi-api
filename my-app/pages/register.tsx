import { RegisterFormView } from '../modules/auth';
import { Route } from '../shared';

import type { NextPage } from 'next';
const RegisterPage: NextPage = () => {
  return (
    <Route
      routeData={{
        name: 'register',
        title: 'Register',
        isPublic: true,
        layoutType: 'auth',
        onlyNonAuth: true,
        onlyForAdmin: false,
      }}
    >
      <RegisterFormView />
    </Route>
  );
};

export default RegisterPage;

import type { NextPage } from "next";
import { RegisterFormView } from "../modules";
import { Route } from "../shared";

const RegisterPage: NextPage = () => {
  return (
    <div style={{ backgroundColor: 'rgb(245, 245, 245)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Route routeData={{
        name: 'register',
        title: 'Register',
        isPublic: true,
        layoutType: 'auth',
        onlyNonAuth: true
      }}>  <RegisterFormView /></Route>
      

    </div>

  )
};

export default RegisterPage;

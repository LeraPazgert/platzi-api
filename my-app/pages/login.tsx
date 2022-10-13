import type { NextPage } from 'next'
import { AuthFormView } from '../modules/auth'
import { Route } from '../shared'

const LoginPage: NextPage = () => {
    return (
        <div style={{ backgroundColor: 'rgb(245, 245, 245)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Route routeData={{
                name: 'login',
                title: 'Login',
                isPublic: true,
                layoutType: 'auth',
                onlyNonAuth: true
            }}> <AuthFormView /></Route>
        </div>

    )
}

export default LoginPage
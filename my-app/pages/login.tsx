import type { NextPage } from 'next'
import { AuthFormView } from '../modules/auth'

const LoginPage: NextPage = () => {

    return (
        <div style={{ backgroundColor: 'rgb(245, 245, 245)' , height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <AuthFormView />
        </div>

    )
}

export default LoginPage
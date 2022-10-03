import type { NextPage } from 'next'
import { useApiUrlBuilderContext, useAppUrlBuilderContext } from '../shared/tools'


const LoginPage: NextPage = () => {
    const apiUrl = useApiUrlBuilderContext();
    const appUrl = useAppUrlBuilderContext();
    return (
        <div>
            <div>{apiUrl.products({ limit: 2, offset: 3 })}</div>
            <div>{appUrl.login()}</div>
        </div>

    )
}

export default LoginPage
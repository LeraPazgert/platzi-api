import type { NextPage } from 'next'
import { Route } from '../shared';

const Dashboard: NextPage = () => {
    return (
        <Route routeData={{
            name: 'dashboard',
            title: 'Dashboard',
            isPublic: false,
            onlyNonAuth: false
        }}> </Route>

    )
}

export default Dashboard
import type { NextPage } from 'next'
import { Route } from '../shared';

const Products: NextPage = () => {
    return (
        <Route routeData={{
            name: 'products',
            title: 'Products',
            isPublic: false,
            layoutType: 'private',
            onlyNonAuth: false
        }}></Route>

    )
}

export default Products
import type { NextPage } from 'next'
import { ProductListView } from '../modules/products';
import { Route } from '../shared';

const Home: NextPage = () => {
  return (
    <Route routeData={{
      name: 'home',
      title: 'Home',
      isPublic: true,
      layoutType: 'public',
      onlyNonAuth: false
    }}> <ProductListView /></Route>

  )
}

export default Home

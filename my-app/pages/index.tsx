import type { NextPage } from 'next'
import { UsersListView } from '../modules/users';
import { Route } from '../shared';

const Home: NextPage = () => {
  return (
    <Route routeData={{
      name: 'home',
      title: 'Home',
      isPublic: true,
      onlyNonAuth: false
    }}> <UsersListView /></Route>

  )
}

export default Home

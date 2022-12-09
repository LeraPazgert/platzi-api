import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ProductListView } from '../modules/products';
import { Loading, Route } from '../shared';

const Home: NextPage = () => {
  const router = useRouter();

  if (!router.isReady) {
    return <Loading />;
  }
  return (
    <Route
      routeData={{
        name: 'home',
        title: 'Home',
        isPublic: true,
        layoutType: 'public',
        onlyNonAuth: false,
        onlyForAdmin: false,
      }}
    >
      <ProductListView />
    </Route>
  );
};

export default Home;

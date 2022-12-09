import type { NextPage } from 'next';
import { ProductsAdminTableView } from '../modules/products';
import { Route } from '../shared';

const Products: NextPage = () => {
  return (
    <Route
      routeData={{
        name: 'products',
        title: 'Products',
        isPublic: false,
        layoutType: 'private',
        onlyNonAuth: false,
        onlyForAdmin: true,
      }}
    >
      <ProductsAdminTableView />
    </Route>
  );
};

export default Products;

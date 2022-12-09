import type { NextPage } from 'next';
import { ProductWrapperForm } from '../modules/products';
import { Route } from '../shared';

const ProductAddFormPage: NextPage = () => {
  return (
    <Route
      routeData={{
        name: 'addForm',
        title: 'Add Form',
        isPublic: false,
        layoutType: 'private',
        onlyNonAuth: false,
        onlyForAdmin: true,
      }}
    >
      <ProductWrapperForm />
    </Route>
  );
};

export default ProductAddFormPage;

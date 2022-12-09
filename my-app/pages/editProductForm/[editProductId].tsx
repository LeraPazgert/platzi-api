import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ProductWrapperForm } from '../../modules/products';
import { Loading, Route } from '../../shared';

const ProductEditFormPage: NextPage = () => {
  const router = useRouter();
  const { editProductId } = router.query;

  if (!router.isReady) {
    return <Loading />;
  }

  return (
    <Route
      routeData={{
        name: 'editForm',
        title: 'Edit Form',
        isPublic: false,
        layoutType: 'private',
        onlyNonAuth: false,
        onlyForAdmin: true,
      }}
    >
      <ProductWrapperForm editProductId={Number(editProductId)} />
    </Route>
  );
};

export default ProductEditFormPage;

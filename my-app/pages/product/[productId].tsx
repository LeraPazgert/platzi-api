import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ProductDetails } from '../../modules/products';
import { Loading, Route } from '../../shared';

const ProductDetailsPage: NextPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  if (!router.isReady) {
    return <Loading />;
  }

  return (
    <Route
      routeData={{
        name: 'details',
        title: 'Details',
        isPublic: true,
        layoutType: 'public',
        onlyNonAuth: false,
        onlyForAdmin: false,
      }}
    >
      <ProductDetails productId={Number(productId)} />
    </Route>
  );
};

export default ProductDetailsPage;

import { FC } from 'react';
import { Loading } from '../../../../shared';
import { useProductDetailsController } from '../../controllers';
import { ProductEditForm } from './ProductEditForm';

type Props = {
  editProductId?: number;
};
export const ProductWrapperForm: FC<Props> = ({ editProductId }) => {
  const { product, loading, error, edit, create } = useProductDetailsController(editProductId);

  if (loading) {
    return <Loading />;
  }

  return <ProductEditForm product={product} save={editProductId ? edit : create} />;
};

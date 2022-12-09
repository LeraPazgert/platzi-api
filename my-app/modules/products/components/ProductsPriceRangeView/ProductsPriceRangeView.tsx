import { FC } from 'react';
import { ProductsFilter } from '../..';
import { RangeInput } from '../../../../shared/components/rangeInput';

type Props = {
  changePriceProducts: any;
  filter: ProductsFilter;
  maxPrice: number;
  minPrice: number;
};
export const ProductsPriceRange: FC<Props> = ({
  changePriceProducts,
  filter,
  maxPrice,
  minPrice,
}) => {
  return (
    <RangeInput
      width={300}
      initValue={filter.prices}
      changePriceProducts={changePriceProducts}
      maxPrice={maxPrice}
      minPrice={minPrice}
    />
  );
};

import { Box } from '@mui/system';
import { FC } from 'react';
import { SortGroup } from '../../../../shared';
import { ProductsFilter } from '../../slices';

type Props = {
  filter: ProductsFilter;
  sort: any;
};
export const ProductsFilters: FC<Props> = ({ filter, sort }) => {
  const titleSort = [
    { value: 'name,asc', label: 'A-Z' },
    { value: 'name,desc', label: 'Z-A' },
  ];
  const priceSort = [
    { value: 'price,asc', label: 'MIN-MAX' },
    { value: 'price,desc', label: 'MAX-MIN' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <SortGroup label="Sort by Alphabet" sort={sort} filter={filter} values={titleSort} />
      <SortGroup label="Sort by Price" sort={sort} filter={filter} values={priceSort} />
    </Box>
  );
};

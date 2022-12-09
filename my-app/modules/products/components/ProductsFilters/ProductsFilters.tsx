import { Box } from '@mui/system';
import { FC } from 'react';
import { SortGroup } from '../../../../shared';

type Props = {
  initValue: string;
  onChange: (event: any) => void;
};
export const ProductsFilters: FC<Props> = ({ initValue, onChange }) => {
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
      <SortGroup
        label="Sort by Alphabet"
        onChange={onChange}
        initValue={initValue}
        values={titleSort}
      />
      <SortGroup
        label="Sort by Price"
        onChange={onChange}
        initValue={initValue}
        values={priceSort}
      />
    </Box>
  );
};

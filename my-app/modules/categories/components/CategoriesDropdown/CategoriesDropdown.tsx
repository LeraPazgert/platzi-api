import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { FC } from 'react';
import { useAppSelector } from '../../../../shared';
import { ProductsFilter } from '../../../products';

type Props = {
  filter: ProductsFilter;
  changeCategoryProducts: any;
};

export const CategoriesDropdown: FC<Props> = ({ changeCategoryProducts, filter }) => {
  const { categories } = useAppSelector(state => state.categories);

  return (
    <FormControl sx={{ width: 130, height: '30px' }}>
      <InputLabel id="demo-multiple-checkbox-label" sx={{ marginTop: '-15px' }}>
        Category
      </InputLabel>

      <Select
        sx={{ width: 170, height: '30px', fontFamily: theme => theme.typography.overline }}
        color="secondary"
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        size="small"
        multiple
        value={filter.categories}
        onChange={changeCategoryProducts}
        input={<OutlinedInput label="category" />}
        renderValue={selected => `${selected.length} categories`}
      >
        {categories.map(category => (
          <MenuItem key={category.id} value={category.id}>
            <Checkbox checked={filter.categories.indexOf(category.id) > -1} />
            <ListItemText secondary={category.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

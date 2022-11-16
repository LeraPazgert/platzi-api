import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { FC } from 'react';
import { useAppSelector } from '../../../../shared';
import { ProductsFilter } from '../../../products';

type Props = {
  changeCategoryProducts: any;
  filter: ProductsFilter;
};
export const CategoriesView: FC<Props> = ({ changeCategoryProducts, filter }) => {
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

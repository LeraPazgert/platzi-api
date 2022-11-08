import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FC } from 'react';
import { ICategory } from '../../../../shared';
import { useProductListController } from '../../controllers';

type Props = {
  category: ICategory;
};
export const CategoriesItem: FC<Props> = ({ category }) => {
  const { changeCategoryProducts, filter } = useProductListController();
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={filter.category.checked}
          onChange={changeCategoryProducts}
          name={category.name}
        />
      }
      label="Label"
    />
  );
};

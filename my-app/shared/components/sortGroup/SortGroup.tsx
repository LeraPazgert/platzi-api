import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { ProductsFilter } from '../../../modules/products';

type Props = {
  label: string;
  values: {
    value: string;
    label: string;
  }[];
  filter: ProductsFilter;
  sort: any;
};
export const SortGroup: FC<Props> = ({ label, filter, sort, values }) => {
  return (
    <FormControl
      sx={{
        borderBottom: '1px solid',
        borderColor: theme => theme.palette.secondary.main,
      }}
    >
      <Typography variant="overline">{label}</Typography>
      <RadioGroup value={filter.sort} name="radio-buttons-group">
        {values.map(item => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
            onChange={sort}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

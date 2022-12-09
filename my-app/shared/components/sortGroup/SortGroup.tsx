import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { FC } from 'react';

type Props = {
  label: string;
  values: {
    value: string;
    label: string;
  }[];
  initValue: string;
  onChange: (event: any) => void;
};

export const SortGroup: FC<Props> = ({ label, initValue, onChange, values }) => {
  return (
    <FormControl
      sx={{
        borderBottom: '1px solid',
        borderColor: theme => theme.palette.secondary.main,
      }}
    >
      <Typography variant="overline">{label}</Typography>
      <RadioGroup value={initValue} name="radio-buttons-group">
        {values.map(item => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
            onChange={onChange}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

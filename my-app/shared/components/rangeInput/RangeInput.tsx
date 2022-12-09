import { Slider } from '@mui/material';
import { Box } from '@mui/system';
import { debounce } from 'lodash';
import { FC, useCallback, useMemo, useState } from 'react';

type Props = {
  width: number;
  initValue: number[];
  changePriceProducts: (value: number[]) => void;
  maxPrice: number;
  minPrice: number;
};

export const RangeInput: FC<Props> = ({
  width,
  initValue,
  changePriceProducts,
  maxPrice,
  minPrice,
}) => {
  const [value, setValue] = useState(initValue);

  const debounceChangePriceProducts = useMemo(() => debounce(changePriceProducts, 250), []);

  const changeValue = useCallback((event: Event, value: number[] | number) => {
    setValue(value as number[]);
    debounceChangePriceProducts(value as number[]);
  }, []);

  return (
    <Box sx={{ maxWidth: width, marginTop: '20px' }}>
      <Slider
        value={value}
        min={minPrice}
        max={maxPrice}
        onChange={changeValue}
        valueLabelDisplay="auto"
        color="primary"
      />
    </Box>
  );
};

import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { IProduct } from '../../types';

type Props = {
  product: IProduct;
};
export const ProductImages: FC<Props> = ({ product }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingTop: '50px',
      }}
    >
      {product.images.map((image: string, index) => {
        return (
          <Grid item key={index}>
            <Box
              component="img"
              sx={{
                width: '95%',
                height: '100%',
                objectFit: 'cover',
                '&:hover': {
                  outline: '1px solid red',
                },
              }}
              src={image}
              alt="product"
            ></Box>
          </Grid>
        );
      })}
    </Box>
  );
};
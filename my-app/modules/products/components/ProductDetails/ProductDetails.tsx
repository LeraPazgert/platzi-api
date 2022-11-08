import { Box, Button, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Loading } from '../../../../shared';
import { useCartController } from '../../../cart';
import { useProductDetailsController } from '../../controllers';
import { ProductImages } from '../ProductImages';

type Props = {
  productId: number;
};
export const ProductDetails: FC<Props> = ({ productId }) => {
  const { product, loading, error } = useProductDetailsController(productId);
  const { addToCart } = useCartController();

  if (loading || !product) {
    return <Loading />;
  }
  return (
    <Grid container width="100%" spacing={3} sx={{ padding: '50px' }}>
      <Grid item width="60%">
        <Box
          component="img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src={product?.images[0]}
          alt="product"
        ></Box>
      </Grid>
      <Grid container item width="40%" sx={{ flexDirection: 'column' }} spacing={3}>
        <Grid item>
          <Typography variant="overline">{product?.category.name}</Typography>
        </Grid>

        <Grid item>
          <Typography variant="caption">{product?.title}</Typography>
        </Grid>

        <Grid item sx={{ flex: '1 1' }}>
          <Typography variant="body1" sx={{ fontSixe: '10px' }}>
            {product?.description}
          </Typography>
        </Grid>

        <Grid item>
          <ProductImages product={product} />
        </Grid>

        <Grid item sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>
          <Typography variant="overline" sx={{ fontSize: '20px', lineHeight: '20px' }}>
            ${product?.price}
          </Typography>

          <Button
            variant="contained"
            sx={{ backgroundColor: theme => theme.palette.secondary.dark, color: 'white' }}
            onClick={() => addToCart({ ...product, amount: 1 })}
          >
            <Typography variant="overline" sx={{ fontSize: '15px' }}>
              Add to cart
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

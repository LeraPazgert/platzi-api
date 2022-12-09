import { Box, Grid, Typography } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { Button, Loading, useAppSelector } from '../../../../shared';
import { Picture } from '../../../../shared/components/image';
import { useCartController } from '../../../cart';
import { useProductDetailsController } from '../../controllers';

type Props = {
  productId: number;
};

export const ProductDetails: FC<Props> = ({ productId }) => {
  const { isAuth } = useAppSelector(state => state.auth);
  const { product, loading, error } = useProductDetailsController(productId);
  const { addToCart } = useCartController();
  const [indexImage, setIndexImage] = useState(0);

  const handleChangePicture = useCallback((index: number) => {
    setIndexImage(index);
  }, []);

  if (loading || !product) {
    return <Loading />;
  }

  return (
    <Grid container width="100%" spacing={3} sx={{ padding: '50px' }}>
      <Grid item width="60%">
        <Box
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <Picture image={product?.images[indexImage]} />
        </Box>
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

        <Grid
          item
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
              <Grid item key={index} onClick={() => handleChangePicture(index)}>
                <Box
                  sx={{
                    width: '95%',
                    height: '100%',
                    objectFit: 'cover',
                    '&:hover': {
                      outline: '1px solid',
                      outlineColor: theme => theme.palette.primary.dark,
                      cursor: 'pointer',
                    },
                  }}
                >
                  <Picture image={image} />
                </Box>
              </Grid>
            );
          })}
        </Grid>

        <Grid item sx={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>
          <Typography variant="overline" sx={{ fontSize: '20px', lineHeight: '20px' }}>
            ${product?.price}
          </Typography>

          {isAuth && (
            <Button handleClick={() => addToCart({ ...product, amount: 1 })}>Add to cart</Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

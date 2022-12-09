import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import { useAppSelector, useAppUrlBuilderContext } from '../../../../shared';
import { Picture } from '../../../../shared/components/image';
import Slider from '../../../../shared/components/slider/Slider';
import { useCartController } from '../../../cart';
import { IProduct } from '../../types';

type Props = {
  product: IProduct;
};

export const ProductItem: FC<Props> = ({ product }) => {
  const appUrlBuilder = useAppUrlBuilderContext();
  const { isAuth } = useAppSelector(state => state.auth);
  const { addToCart } = useCartController();

  return (
    <Card sx={{ maxWidth: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Slider
          items={product.images.map((img, i) => (
            <Picture image={img} key={i} height="200px" />
          ))}
        />
        <Box
          sx={{
            position: 'absolute',
            padding: '0 5px 5px 5px',
            top: '8px',
            left: '16px',
            minWidth: '25px',
            backgroundColor: theme => theme.palette.secondary.light,
            borderRadius: '5px',
          }}
        >
          <Typography variant="caption" sx={{ fontSize: '13px' }}>
            {product.category.name}
          </Typography>
        </Box>
      </Box>

      <CardContent sx={{ flex: '1 1' }}>
        <Link href={appUrlBuilder.productDetails(product.id)}>
          <Typography
            variant="overline"
            sx={{
              borderBottom: '1px solid',
              borderColor: theme => theme.palette.secondary.main,
              ':hover': { cursor: 'pointer' },
            }}
          >
            {product.title}
          </Typography>
        </Link>
        <Typography
          variant="body1"
          sx={{ fontSize: '15px', textAlign: 'right', marginTop: '10px' }}
        >
          {product.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Grid container justifyContent="space-between">
          <Grid item paddingLeft="10px">
            <Typography variant="caption" sx={{ color: theme => theme.palette.info.dark }}>
              ${product.price}
            </Typography>
          </Grid>
          {isAuth && (
            <Grid item paddingRight="10px">
              <Tooltip title="Add to cart">
                <IconButton
                  aria-label="Add to Cart"
                  onClick={() => addToCart({ ...product, amount: 1 })}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          )}
        </Grid>
      </CardActions>
    </Card>
  );
};

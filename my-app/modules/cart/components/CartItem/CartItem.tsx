import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Button } from '../../../../shared';
import { ICartProduct } from '../../types';

type Props = {
  item: ICartProduct;
  addToCart: (clickedItem: ICartProduct) => void;
  decrementProduct: (clickedItem: ICartProduct) => void;
  incrementProduct: (clickedItem: ICartProduct) => void;
};

export const CartItem: FC<Props> = ({ item, addToCart, decrementProduct, incrementProduct }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: ' 1px solid lightblue',
        paddingBottom: '20px',
      }}
    >
      <Box sx={{ width: '60%', margin: '13px 40px 10px 30px' }}>
        <Typography variant="body1">{item.title}</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="overline">Price: ${item.price}</Typography>
          <Typography variant="overline">
            Total: ${(item.amount * item.price).toFixed(2)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '70px',
          }}
        >
          <Button handleClick={() => decrementProduct(item)}>-</Button>
          <Typography variant="subtitle1">{item.amount}</Typography>
          <Button handleClick={() => incrementProduct(item)}>+</Button>
        </Box>
      </Box>
      <Box sx={{ width: '40%' }}>
        <Box
          component="img"
          src={item.images[0]}
          alt={item.title}
          sx={{
            maxWidth: '130px',
            height: '150px',
            objectFit: 'cover',
            margin: '20px 25px 10px 20px',
          }}
        />
      </Box>
    </Box>
  );
};

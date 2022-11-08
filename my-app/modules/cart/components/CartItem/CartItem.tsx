import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { ICartProduct } from '../../types';

type Props = {
  item: ICartProduct;
  addToCart: (clickedItem: ICartProduct) => void;
  decrementProduct: (clickedItem: ICartProduct) => void;
};

export const CartItem: FC<Props> = ({ item, addToCart, decrementProduct }) => {
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
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => decrementProduct(item)}
          >
            -
          </Button>
          <Typography variant="subtitle1">{item.amount}</Typography>
          <Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>
            +
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: '40%' }}>
        <img
          src={item.images[0]}
          alt={item.title}
          style={{
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

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useCartController } from '../../controllers/CartListController';
import { ICartProduct } from '../../types';
import { CartItem } from '../CartItem';

export const CartListView = () => {
  const { addedProducts, addToCart, decrementProduct } = useCartController();

  const calculateTotal = (items: ICartProduct[]) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <Box sx={{ width: '500px', overflowX: 'hidden' }}>
      {addedProducts.length === 0 ? (
        <Typography variant="h5">No items in cart.</Typography>
      ) : (
        <Typography variant="h4" sx={{ margin: '20px 30px' }} color="GrayText">
          Your Cart
        </Typography>
      )}
      <Box>
        {addedProducts.map(item => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            decrementProduct={decrementProduct}
          />
        ))}
      </Box>
      <Typography variant="h5" color="GrayText" sx={{ margin: '20px 30px' }}>
        Total: ${calculateTotal(addedProducts).toFixed(2)}
      </Typography>
    </Box>
  );
};

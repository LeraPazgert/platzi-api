import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useCartController } from '../../controllers/CartListController';
import { ICartProduct } from '../../types';
import { CartItem } from '../CartItem';

export const CartListView = () => {
  const { addedProducts, addToCart, decrementProduct, incrementProduct } = useCartController();

  const calculateTotal = (items: ICartProduct[]) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <Box sx={{ width: '500px', overflowX: 'hidden', margin: '20px 30px' }}>
      {addedProducts.length === 0 ? (
        <Typography variant="h5" sx={{ margin: '20px 30px' }}>
          No items in your cart.
        </Typography>
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
            incrementProduct={incrementProduct}
          />
        ))}
      </Box>
      <Typography variant="h5" color="GrayText" sx={{ margin: '20px 30px' }}>
        Total: ${calculateTotal(addedProducts).toFixed(2)}
      </Typography>
    </Box>
  );
};

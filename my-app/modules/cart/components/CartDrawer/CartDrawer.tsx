import { useCartController } from "../../controllers/CartListController";
import { Drawer } from '@mui/material';
import { CartListView } from "../CartView";

export const CartDrawer = () => {
    const { isOpen, changeCartOpen } = useCartController();

    return (
        <Drawer open={isOpen} anchor={"left"} onClose={() => changeCartOpen(false)}>
            <CartListView />
        </Drawer>
    )
}
import { useProductListController } from "../../controllers"
import { Box, Grid } from "@mui/material";
import { ProductItem } from "../ProductItem";

export const ProductListView = () => {
    const { products, loading } = useProductListController();

    if (loading) {
        return <>Loading</>
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <Box sx={{ width: '30%' }}></Box>
            <Grid container justifyContent='center' spacing={2} sx={{ paddingRight: '20px' }} >
                {products.map(product =>
                    <Grid item key={product.id} xs={12} sm={6} >
                        <ProductItem product={product} />
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}
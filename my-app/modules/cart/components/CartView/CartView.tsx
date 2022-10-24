import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import { useCartController } from '../../controllers';
import { useAppSelector } from '../../../../shared';
import { Grid } from '@mui/material';


export const Cart = () => {

    const { addedProducts } = useCartController();
    return (

        <Box sx={{ width: '450px' }}>
            <Grid container justifyContent='center' spacing={2} sx={{ paddingRight: '20px' }} >
                {addedProducts.map(product =>
                    <Grid item key={product.id} xs={12} sm={6} >
                        <div>{product.title}</div>
                    </Grid>
                )}
            </Grid>
        </Box>

    );
}
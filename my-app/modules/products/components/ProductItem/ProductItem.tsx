import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { FC } from "react";
import { IProduct } from "../../types";
import Link from "next/link";
import { useAppSelector, useAppUrlBuilderContext } from "../../../../shared";
import Slider from "../../../../shared/components/slider/Slider";
import { useCartService } from "../../../cart";

type Props = {
    product: IProduct
}

export const ProductItem: FC<Props> = ({ product }) => {
    const { isAuth } = useAppSelector(state => state.auth);
    const appUrlBuilder = useAppUrlBuilderContext();
    const { getProduct } = useCartService();
    return (
        <Box>
            <Card sx={{
                maxWidth: '100%',

            }}>
                <CardMedia sx={{ height: 70 }}>
                    <Link href={appUrlBuilder.home()}>
                        <Box sx={{
                            position: 'relative',
                            textAlign: 'center',
                            color: 'white',
                            height: '300px'
                        }}>
                            <Slider items={product.images} style={{
                                width: '100%',
                                height: '100%',
                                opacity: 0.8,
                                objectFit: 'cover',
                            }} />
                            <Box sx={{
                                position: 'absolute',
                                padding: '0 5px 5px 5px',
                                top: '8px',
                                left: '16px',
                                minWidth: '25px',
                                height: '25px',
                                backgroundColor: 'rgb(5,5,5,0.2)',
                                borderRadius: '5px'
                            }}>{product.category.name}</Box>
                        </Box>
                    </Link>
                </CardMedia>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <Box sx={{
                        height: 10,
                        marginTop: '70%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: 'grey'
                    }}>
                        <Typography variant='subtitle1' sx={{ marginTop: '10px' }}>
                            {product.title}
                        </Typography>
                        <Typography variant='h6' sx={{ marginTop: '10px' }}>
                            ${product.price}
                        </Typography>
                    </Box>
                    <Typography variant='body2' sx={{ marginTop: '50px' }}>
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }} >
                    <Tooltip title='Add to cart' disableHoverListener={!isAuth}>
                        <IconButton aria-label="Add to Cart"
                            disabled={!isAuth}
                            onClick={() => getProduct(product)}>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </Box >
    )
}
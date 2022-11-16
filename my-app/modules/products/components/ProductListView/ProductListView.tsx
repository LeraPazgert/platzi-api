import {
  Box,
  Grid,
  Pagination,
  TablePagination,
  Typography,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useMemo } from 'react';
import { Button, Loading } from '../../../../shared';
import { CategoriesView } from '../../../categories/components/CategoriesView';
import { useProductListController } from '../../controllers';
import { ProductItem } from '../ProductItem';
import { ProductsFilters } from '../ProductsFilters';
import { ProductsPriceRange } from '../ProductsPriceRangeView';
import { SearchProducts } from '../SearchProducts';

export const ProductListView = () => {
  const {
    filteredProducts,
    loading,
    page,
    products,
    changePageSize,
    changeSortProducts,
    changeCategoryProducts,
    changePriceProducts,
    filter,
    search,
  } = useProductListController();

  const maxPrice = useMemo(() => {
    return products.reduce((acc, cur) => (acc > cur.price ? acc : cur.price), 0);
  }, [products]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          marginTop: '15px',
        }}
      >
        <Box
          sx={{
            width: '30%',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <SearchProducts search={search} />
          <ProductsFilters filter={filter} sort={changeSortProducts} />
          <Typography variant="overline">Price Range</Typography>
          <ProductsPriceRange
            changePriceProducts={changePriceProducts}
            filter={filter}
            maxPrice={maxPrice}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <CategoriesView changeCategoryProducts={changeCategoryProducts} filter={filter} />
            {!!filteredProducts.length && (
              <Box>
                <TablePagination
                  variant="head"
                  component="div"
                  count={-1}
                  page={page}
                  rowsPerPage={25}
                  onPageChange={changePageSize}
                />
              </Box>
            )}
          </Box>

          {!!filteredProducts.length ? (
            <Grid container justifyContent="center" spacing={2} sx={{ paddingRight: '20px' }}>
              {filteredProducts.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <ProductItem product={product} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid sx={{ margin: 'auto' }}>
              <Typography variant="body2" sx={{ fontSize: '30px' }}>
                No result :(
              </Typography>
            </Grid>
          )}
          {!!filteredProducts.length && (
            <Box>
              <TablePagination
                variant="head"
                component="div"
                count={-1}
                page={page}
                rowsPerPage={25}
                onPageChange={changePageSize}
              />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

import { Box, Grid, Pagination, TablePagination } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Button, Loading } from '../../../../shared';
import { useProductListController } from '../../controllers';
import { CategoriesView } from '../CategoriesView';
import { ProductItem } from '../ProductItem';

export const ProductListView = () => {
  const {
    products,
    loading,
    page,
    changePageSize,
    changeSortProducts,
    changeCategoryProducts,
    filter,
  } = useProductListController();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <Box sx={{ width: '30%' }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Sort by Alphabet</FormLabel>
            <RadioGroup value={filter.sort} name="radio-buttons-group">
              <FormControlLabel
                value="name,asc"
                control={<Radio />}
                label="A-Z"
                onChange={changeSortProducts}
              />
              <FormControlLabel
                value="name,desc"
                control={<Radio />}
                label="Z-A"
                onChange={changeSortProducts}
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <CategoriesView />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
                margin: '10px 3px 0px 0',
              }}
            >
              <TablePagination
                variant="head"
                component="div"
                count={-1}
                page={page}
                rowsPerPage={24}
                onPageChange={changePageSize}
              />
            </Box>
          </Box>
          <Grid container justifyContent="center" spacing={2} sx={{ paddingRight: '20px' }}>
            {products.map(product => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductItem product={product} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              margin: '10px 3px 0px 0',
            }}
          >
            <TablePagination
              variant="head"
              component="div"
              count={-1}
              page={page}
              rowsPerPage={24}
              onPageChange={changePageSize}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControl from '@mui/material/FormControl';
import { FC } from 'react';
import { ICategory, useAppSelector } from '../../../../shared';
import { useProductListController } from '../../controllers';
import { CategoriesItem } from '../CategoriesItem';

export const CategoriesView = () => {
  const { categories } = useAppSelector(state => state.products);
  return (
    <Box>
      {categories.map((category: ICategory) => {
        return (
          <Grid item key={category.id}>
            <Box
              sx={{
                '&:hover': {
                  borderBottom: '2px solid ',
                  borderColor: theme => theme.palette.secondary.main,
                  transition: '0.2s',
                },
              }}
            >
              <CategoriesItem category={category} />
            </Box>
          </Grid>
        );
      })}
    </Box>
  );
};

{
  /* <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%',
        paddingTop: '20px',
      }}
    >
      {categories.map((category: ICategory) => {
        return (
          <Grid item key={category.id}>
            <Box
              sx={{
                '&:hover': {
                  borderBottom: '2px solid ',
                  borderColor: theme => theme.palette.secondary.main,
                  transition: '0.2s',
                  cursor: 'pointer',
                },
              }}
            >
              <CategoriesItem category={category} />
            </Box>
          </Grid>
        );
      })}
    </Box> */
}

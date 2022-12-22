import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { Table } from '../../../../shared';
import { CategorySummuryProducts } from './types';

type Props = {
  productsByCategory: CategorySummuryProducts[];
};
export const ProductsCategoriesTable: FC<Props> = ({ productsByCategory }) => {
  return (
    <Paper
      sx={{
        backgroundColor: theme => theme.palette.info.contrastText,
        color: 'white',
        padding: '30px',
        margin: '30px auto 30px auto',
        width: '80%',
      }}
    >
      {productsByCategory.map((category, index) => (
        <Grid container sx={{ display: 'flex', flexDirection: 'row' }} key={index}>
          <Grid item sx={{ width: '50%' }}>
            <Typography variant="body2" sx={{ fontSize: '25px' }}>
              {category.categoryName}
            </Typography>
            <Divider sx={{ marginTop: '20px' }} />
            <Typography variant="overline" sx={{ marginRight: '10px' }}>
              Total Price:
            </Typography>
            <Typography variant="body1" sx={{ display: 'inline', fontSize: '20px' }}>
              $ {category.categoryPrice}
            </Typography>
          </Grid>
          <Grid item sx={{ width: '50%' }}>
            <Table
              columns={[
                {
                  title: 'Product name',
                  key: r => (
                    <Typography
                      variant="overline"
                      sx={{
                        borderBottom: '1px solid',
                        borderColor: theme => theme.palette.secondary.main,
                        ':hover': { cursor: 'pointer' },
                      }}
                    >
                      {r.name}
                    </Typography>
                  ),
                  minWidth: 100,
                  align: 'center',
                },

                {
                  title: 'Product price',
                  key: r => <>$ {r.price}</>,
                  minWidth: 200,
                  align: 'center',
                },
              ]}
              records={category.categoryProducts}
            />
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
};

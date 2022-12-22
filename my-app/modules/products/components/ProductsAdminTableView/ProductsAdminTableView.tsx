import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import {
  Button,
  LongMenu,
  Table,
  useAppUrlBuilderContext,
} from '../../../../shared';
import { useProductListController } from '../../controllers';
import {
  ProductsCategoriesTable,
  useProductsCategoriesTableController,
} from '../ProductsCategoriesTable';

export const ProductsAdminTableView = () => {
  const { products, page, changePageSize, remove } = useProductListController();
  const { dataModel } = useProductsCategoriesTableController(products);
  const appUrlBuilder = useAppUrlBuilderContext();
  return (
    <>
      <Link href={appUrlBuilder.productAddForm()}>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button
            sx={{
              margin: '0 21px 20px 0',
              backgroundColor: (theme: any) => theme.palette.secondary.dark,
            }}
          >
            ADD NEW
          </Button>
        </Box>
      </Link>
      <Table
        columns={[
          { title: 'ID', key: 'id', minWidth: 200, align: 'center' },
          {
            title: 'Title',
            key: r => (
              <Typography
                variant="overline"
                sx={{
                  borderBottom: '1px solid',
                  borderColor: theme => theme.palette.secondary.main,
                  ':hover': { cursor: 'pointer' },
                }}
              >
                {r.title}
              </Typography>
            ),
            minWidth: 100,
            align: 'center',
          },

          { title: 'Price', key: r => <>$ {r.price}</>, minWidth: 200, align: 'center' },
          {
            title: 'Actions',
            key: r => (
              <LongMenu
                id={r.id}
                action={remove}
                actionLabelFirst="Delete"
                actionLabelSecond="Edit"
              />
            ),
            minWidth: 200,
            align: 'center',
          },
        ]}
        mainCells={['Product', 'Details']}
        records={products}
        page={page}
        changePageSize={changePageSize}
      />
      <ProductsCategoriesTable productsByCategory={dataModel} />
    </>
  );
};

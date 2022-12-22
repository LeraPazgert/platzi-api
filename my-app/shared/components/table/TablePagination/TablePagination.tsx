import { Box, TablePagination } from '@mui/material';
import { FC } from 'react';

type Props = {
  page: number;
  changePageSize: any;
};

export const AdminTablePagination: FC<Props> = ({ page, changePageSize }) => {
  return (
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
  );
};

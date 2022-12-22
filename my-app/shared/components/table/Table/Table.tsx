import { Paper, TableContainer } from '@mui/material';
import MuiTable from '@mui/material/Table';
import { ReactElement } from 'react';
import { TableBody } from '../TableBody';
import { Column, TableHead } from '../TableHead';
import { AdminTablePagination } from '../TablePagination';

interface ITableProps<T extends object> {
  page?: number;
  changePageSize?: any;
  records: T[];
  columns: Column<T>[];
  mainCells?: string[];
}

export const Table = <T extends object>(props: ITableProps<T>): ReactElement | null => {
  const { page, changePageSize, records, columns, mainCells } = props;
  const validPage = typeof page === 'number';
  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <MuiTable stickyHeader aria-label="sticky table">
          <TableHead columns={columns} mainCells={mainCells} />
          <TableBody columns={columns} records={records} />
        </MuiTable>
      </TableContainer>
      {validPage && changePageSize ? (
        <AdminTablePagination page={page} changePageSize={changePageSize} />
      ) : null}
    </Paper>
  );
};

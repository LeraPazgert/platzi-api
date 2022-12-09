import { TableCell, TableRow } from '@mui/material';
import MuiTableHead from '@mui/material/TableHead';
import { ReactElement } from 'react';
import { Column } from './types';

interface ITableHeadProps<T extends object> {
  columns: Column<T>[];
}

export const TableHead = <T extends object>(props: ITableHeadProps<T>): ReactElement | null => {
  const { columns } = props;
  return (
    <MuiTableHead>
      <TableRow>
        <TableCell align="center" colSpan={2}>
          Product
        </TableCell>
        <TableCell align="center" colSpan={3}>
          Details
        </TableCell>
      </TableRow>
      <TableRow>
        {columns.map(column => (
          <TableCell
            key={column.title}
            align={column.align}
            style={{ top: 57, minWidth: column.minWidth }}
          >
            {column.title}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

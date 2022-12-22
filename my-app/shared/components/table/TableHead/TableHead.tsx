import { TableCell, TableRow } from '@mui/material';
import MuiTableHead from '@mui/material/TableHead';
import { ReactElement } from 'react';
import { Column } from './types';

interface ITableHeadProps<T extends object> {
  columns: Column<T>[];
  mainCells?: string[];
}

export const TableHead = <T extends object>(props: ITableHeadProps<T>): ReactElement | null => {
  const { columns, mainCells } = props;
  return (
    <MuiTableHead>
      <TableRow>
        {mainCells?.map((cell, i) => (
          <TableCell
            align="center"
            colSpan={2}
            key={i}
            sx={{
              fontSize: '22px',
              backgroundColor: theme => theme.palette.info.light,
              color: 'white',
            }}
          >
            {cell}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        {columns.map(column => (
          <TableCell
            sx={{
              fontSize: '18px',
              backgroundColor: theme => theme.palette.info.main,
              color: 'white',
            }}
            key={column.title}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.title}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

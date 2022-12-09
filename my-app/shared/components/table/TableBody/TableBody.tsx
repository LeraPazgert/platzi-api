import { TableCell, TableRow } from '@mui/material';
import MuiTableBody from '@mui/material/TableBody';
import { Column } from '../TableHead';

type Props<T extends object> = {
  columns: Column<T>[];
  records: T[];
};
export const TableBody = <T extends object>(props: Props<T>): JSX.Element => {
  const { records, columns } = props;

  return (
    <MuiTableBody>
      {records.map((r, i) => (
        <TableRow key={i}>
          {columns.map((c, i) => {
            const value = c.key;
            return (
              <TableCell key={i} align={c.align}>
                <>
                  {typeof value === 'string' && r[value]}

                  {typeof value === 'function' && value(r)}
                </>
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </MuiTableBody>
  );
};

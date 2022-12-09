import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import Link from 'next/link';
import { FC, useState } from 'react';
import { useAppUrlBuilderContext } from '../../../tools';

type Props = {
  id: number;
  action: (id: number) => void;
  actionLabelFirst: string;
  actionLabelSecond: string;
};
const ITEM_HEIGHT = 48;

export const LongMenu: FC<Props> = ({ id, action, actionLabelFirst, actionLabelSecond }) => {
  const appUrlBuilder = useAppUrlBuilderContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '11ch',
          },
        }}
      >
        <Box onClick={() => action(id)}>
          <MenuItem onClick={handleClose}>
            <DeleteIcon />
            <Typography variant="body2">{actionLabelFirst}</Typography>
          </MenuItem>
        </Box>

        <Link href={appUrlBuilder.productEditForm(id)}>
          <MenuItem onClick={handleClose}>
            <EditIcon />
            <Typography variant="body2">{actionLabelSecond}</Typography>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

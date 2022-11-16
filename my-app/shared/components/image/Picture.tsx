import { Box } from '@mui/material';
import { FC, useState } from 'react';
import noImage from '../../assets/images/noimage.jpg';

type Props = {
  image: string;
};
export const Picture: FC<Props> = ({ image }) => {
  const [state, setState] = useState(image);

  const handleError = () => {
    setState(noImage);
  };
  return (
    <Box
      component="img"
      sx={{
        width: '100%',
        height: '100%',
        opacity: 0.8,
        objectFit: 'cover',
      }}
      src={state}
      alt={state}
      onError={handleError}
    />
  );
};

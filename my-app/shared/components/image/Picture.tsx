import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { usePrevious } from 'react-use';
import noImage from '../../assets/images/noimage.jpg';

type Props = {
  image: string;
  height?: string;
};

export const Picture: FC<Props> = ({ image, height = '100%' }) => {
  const [state, setState] = useState(image);
  const prevState = usePrevious(state);

  const handleError = () => {
    setState(noImage);
  };

  useEffect(() => {
    if (image !== prevState) {
      setState(image);
    }
  }, [image, prevState]);

  return (
    <Box
      component="img"
      sx={{
        width: '100%',
        height,
        opacity: 0.8,
        objectFit: 'cover',
      }}
      src={state}
      alt={state}
      onError={handleError}
    />
  );
};

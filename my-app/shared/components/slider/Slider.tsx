import styled from '@emotion/styled';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/system';
import React, { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

type Props = {
  items: ReactNode[];
};

const Slider: FC<Props> = ({ items }) => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const maxSteps = useMemo(() => items.length, [items.length]);

  const handleNext = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }, []);

  const handleStepChange = useCallback((step: number) => {
    setActiveStep(step);
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      <SwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
        {items.map((slide, i) => (
          <div key={i}>{slide}</div>
        ))}
      </SwipeableViews>
      <CustomMobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <IconButton size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
        }
        backButton={
          <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
        }
      />
    </Box>
  );
};

const CustomMobileStepper = styled(MobileStepper)(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  background: 'none',
  '& > div': {
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
}));

export default Slider;

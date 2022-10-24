import { useTheme } from '@mui/system';
import React, { FC, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { Box } from "@mui/material";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


type Props = {
    items: string[]
    style: {}
}

const Slider: FC<Props> = ({ items, style }) => {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = items.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    const theme = useTheme();

    return (
        <>
            <SwipeableViews
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {items.map((step, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box component="img" sx={style} src={step} alt={step}></Box>
                        ) : null}
                    </div>

                ))}
            </SwipeableViews>
            <MobileStepper
                steps={0}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                    </Button>
                }
            />
        </>
    )

};

export default Slider;
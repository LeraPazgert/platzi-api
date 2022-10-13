import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useAppUrlBuilderContext } from '../../tools';
import { DefaultButton } from '../DefaultButton';

export const AuthHeader = () => {
    const router = useRouter();
    const appUrlBuilder = useAppUrlBuilderContext();

    const handleRegister = () => {
        router.push(appUrlBuilder.register())
    }
    const handleHome = () => {
        router.push(appUrlBuilder.home())
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundColor: 'rgb(84, 96, 115)',
                color: 'rgb(209, 214, 222)',
                display: 'flex', alignItems: 'center', flexDirection: 'column',
                justifyContent: 'center', gap: '20px',
                '&:hover': {
                    backgroundColor: 'rgb(84, 96, 115)',
                    opacity: [0.9, 0.8, 0.7],
                    color: 'white',

                },

            }}
        >
            <Typography variant="h3" component="div" align='center'>
                Hello!
            </Typography>
            <Typography variant="overline" component="div" align='center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <DefaultButton label='Registration' handleClick={handleRegister} />
            <DefaultButton label='Home' handleClick={handleHome} />
        </Box>
    )

}
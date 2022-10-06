import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { DefaultButton, FormTextInput } from '../../../../shared';
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormData } from '../../types';
import { useAuthController } from '../../controllers';

export const AuthFormView: FC = () => {
    const { enter } = useAuthController();
    const form = useForm<LoginFormData>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<LoginFormData> = (form) => enter(form);
    return (
        <Card sx={{ minWidth: 375, minHeight: 175 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center', flexDirection: 'column' }}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormTextInput
                        form={form}
                        label='Email'
                        variant='outlined'
                        type='email'
                        helperText='sksk'
                        fieldName='email' />
                    <FormTextInput
                        form={form}
                        label='Password'
                        variant='outlined'
                        type='password'
                        helperText='sksk'
                        fieldName='password' />
                    <CardActions>
                        <DefaultButton label='Login' />
                    </CardActions>
                </form>

            </CardContent>
        </Card>
    );
};
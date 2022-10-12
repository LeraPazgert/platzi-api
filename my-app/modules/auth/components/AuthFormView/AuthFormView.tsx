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
        <Card sx={{ minWidth: 375, minHeight: 175, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center', }}>
                        <FormTextInput
                            form={form}
                            label='Email'
                            variant='outlined'
                            type='email'
                            helperText=''
                            fieldName='email' />
                        <FormTextInput
                            form={form}
                            label='Password'
                            variant='outlined'
                            type='password'
                            helperText=''
                            fieldName='password' />
                    </div>
                    <CardActions style={{ margin: 'auto' }}>
                        <DefaultButton label='Sign in' />
                    </CardActions>
                </form>

            </CardContent>
        </Card>
    );
};
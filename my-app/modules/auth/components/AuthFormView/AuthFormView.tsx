import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  EmailPattern,
  FormTextInput,
  PasswordPattern,
} from '../../../../shared';
import { useAuthController } from '../../controllers';
import { LoginFormData } from '../../types';

export const AuthFormView: FC = () => {
  const { enter } = useAuthController();
  const form = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<LoginFormData> = form => enter(form);
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <FormTextInput
              form={form}
              label="Email"
              variant="outlined"
              type="email"
              helperText=""
              fieldName="email"
              registerOptions={{
                required: 'Email is required',
                pattern: {
                  value: EmailPattern,
                  message: 'Invalid email',
                },
              }}
            />
            <FormTextInput
              form={form}
              label="Password"
              variant="outlined"
              type="password"
              helperText=""
              fieldName="password"
              registerOptions={{
                required: 'Password is required',
                pattern: {
                  value: PasswordPattern,
                  message: 'Invalid password',
                },
              }}
            />
          </div>
          <CardActions style={{ margin: 'auto' }}>
            <Button type="submit">Sign in</Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

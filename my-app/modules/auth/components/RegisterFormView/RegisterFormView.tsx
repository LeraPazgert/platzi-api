import { FC } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { DefaultButton, FormTextInput } from '../../../../shared';
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormData } from "../../types";
import { useAuthController } from "../../controllers";

export const RegisterFormView: FC = () => {
  const { registration } = useAuthController();
  const form = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      role: "",
      avatar: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (form) => registration(form);

  return (
    <Card sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
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
            <FormTextInput
              form={form}
              label='Name'
              variant='outlined'
              type='text'
              helperText=''
              fieldName='name' />
            <FormTextInput
              form={form}
              label='Role'
              variant='outlined'
              type='text'
              helperText=''
              fieldName='role' />
            <FormTextInput
              form={form}
              label='Avatar'
              variant='outlined'
              type='text'
              helperText=''
              fieldName='avatar' />
          </div>
          <CardActions style={{ margin: 'auto' }}>
            <DefaultButton label='Register' />
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

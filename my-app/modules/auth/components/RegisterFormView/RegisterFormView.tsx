import { FC } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, DropdownInput, EmailPattern, FormTextInput, PasswordPattern, UploadButton } from '../../../../shared';
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
      avatar:undefined
    },
    mode: "onChange",
    reValidateMode: "onChange"
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
              fieldName='email'
              registerOptions={{
                required: 'Email is required',
                pattern: {
                  value: EmailPattern,
                  message: 'Invalid email'
                }
              }} />
            <FormTextInput
              form={form}
              label='Password'
              variant='outlined'
              type='password'
              helperText=''
              fieldName='password'
              registerOptions={{
                required: 'Password is required',
                pattern: {
                  value: PasswordPattern,
                  message: 'Invalid password'
                }
              }} />
            <FormTextInput
              form={form}
              label='Name'
              variant='outlined'
              type='text'
              helperText=''
              fieldName='name'
              registerOptions={{
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Min 2 letters'
                },
                maxLength: {
                  value: 10,
                  message: 'Max 10 letters'
                }
              }} />
            <DropdownInput
              form={form}
              label='Role'
              fieldName='role'
              helperText=''
              options={[{ label: 'Admin', value: 'admin' }, { label: 'Customer', value: 'customer' }]}
              registerOptions={{
                required: 'Role is required',
              }}
            />
            <UploadButton
              form={form}
              label='Avatar'
              fieldName='avatar'
              registerOptions={{
                required: 'Avatar is required',
              }}
            />
          </div>
          <CardActions style={{ margin: 'auto' }}>
            <Button label='Register' type='submit' />
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

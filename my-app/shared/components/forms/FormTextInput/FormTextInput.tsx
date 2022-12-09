import { TextField } from '@mui/material';
import { ReactElement } from 'react';
import {
  Controller,
  Path,
  RegisterOptions,
  UseFormReturn,
} from 'react-hook-form';

interface IFormTextInputProps<T extends object> {
  label: string;
  variant?: 'standard' | 'filled' | 'outlined';
  type: string;
  helperText: string;
  form: UseFormReturn<T>;
  fieldName: Path<T>;
  registerOptions?: RegisterOptions;
  minWidth?: string;
}

export const FormTextInput = <T extends object>(
  props: IFormTextInputProps<T>,
): ReactElement | null => {
  const { label, variant, type, helperText, form, fieldName, registerOptions, minWidth } = props;

  const errorMessage = form.formState.errors[fieldName]?.message as string;
  const errorHelper = errorMessage || helperText;

  return (
    <Controller
      name={fieldName}
      control={form.control}
      rules={registerOptions}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ minWidth }}
          error={!!errorMessage}
          label={label}
          variant={variant}
          type={type}
          helperText={errorHelper}
        />
      )}
    />
  );
};

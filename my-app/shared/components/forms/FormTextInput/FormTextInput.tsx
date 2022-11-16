import { TextField } from '@mui/material';
import { FC, ReactElement } from 'react';
import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from 'react-hook-form';

interface IFormTextInputProps<T extends FieldValues> {
  label: string;
  variant?: 'standard' | 'filled' | 'outlined';
  type: string;
  helperText: string;
  form: UseFormReturn<T>;
  fieldName: Path<T>;
  registerOptions?: RegisterOptions;
}

export const FormTextInput = <T extends FieldValues>(
  props: IFormTextInputProps<T>,
): ReactElement | null => {
  const { label, variant, type, helperText, form, fieldName, registerOptions } = props;

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

import { TextareaAutosize, TextField } from '@mui/material';
import { ReactElement } from 'react';
import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from 'react-hook-form';

interface ITextareaInputProps<T extends FieldValues> {
  label: string;
  form: UseFormReturn<T>;
  helperText: string;
  fieldName: Path<T>;
  registerOptions?: RegisterOptions;
}

export const TextareaInput = <T extends FieldValues>(
  props: ITextareaInputProps<T>,
): ReactElement | null => {
  const { label, form, fieldName, registerOptions, helperText } = props;

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
          multiline
          error={!!errorMessage}
          label={label}
          helperText={errorHelper}
        />
      )}
    />
  );
};

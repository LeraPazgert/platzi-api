import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { ReactElement } from 'react';
import {
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormReturn,
} from 'react-hook-form';

type Option = {
  label: string;
  value: string | number;
};

interface IDropdownInputProps<T extends FieldValues> {
  label: string;
  form: UseFormReturn<T>;
  helperText: string;
  fieldName: Path<T>;
  registerOptions?: RegisterOptions;
  options: Option[];
  disabled: boolean;
}

export const DropdownInput = <T extends FieldValues>(
  props: IDropdownInputProps<T>,
): ReactElement | null => {
  const { label, form, fieldName, registerOptions, helperText, options, disabled } = props;

  const errorMessage = form.formState.errors[fieldName]?.message as string;
  const errorHelper = errorMessage || helperText;

  return (
    <Controller
      name={fieldName}
      control={form.control}
      rules={registerOptions}
      render={({ field }) => (
        <TextField {...field} select label={label} error={!!errorMessage} helperText={errorHelper}>
          {options.map(option => (
            <MenuItem key={option.value} value={option.value} disabled={disabled}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

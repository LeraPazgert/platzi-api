import { Button, FormHelperText } from '@mui/material';
import { ChangeEvent, ReactElement, useEffect } from 'react';
import {
  Path,
  PathValue,
  RegisterOptions,
  UseFormReturn,
} from 'react-hook-form';

interface Props<T extends object> {
  label: string;
  form: UseFormReturn<T>;
  fieldName: Path<T>;
  registerOptions?: RegisterOptions;
  errorText: string;
}

export const UploadButton = <T extends object>(props: Props<T>): ReactElement | null => {
  const { form, fieldName, label, registerOptions, errorText } = props;

  const handleSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!!event.target.files?.length) {
      form.setValue(fieldName, event.target.files[0] as PathValue<T, Path<T>>);
      form.trigger(fieldName);
    }
  };

  useEffect(() => {
    form.register(fieldName, registerOptions);
  }, [fieldName, form, registerOptions]);

  return (
    <>
      <Button
        component="label"
        sx={{
          backgroundColor: theme => theme.palette.primary.dark,
          color: 'white',
          '&:hover': {
            backgroundColor: theme => theme.palette.primary.light,
            cursor: 'pointer',
          },
        }}
      >
        {label}
        <input hidden accept="image/*" multiple type="file" onChange={handleSelectFile} />
      </Button>

      {form.formState.errors[fieldName]?.message && (
        <FormHelperText sx={{ marginLeft: '2px' }} error>
          {errorText}
        </FormHelperText>
      )}
    </>
  );
};

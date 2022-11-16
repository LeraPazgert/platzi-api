import { FormControl } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormTextInput, SearchPattern } from '../../../../shared';
import { SearchData } from './types';

type Props = {
  search: any;
};
export const SearchProducts: FC<Props> = ({ search }) => {
  const form = useForm<SearchData>({
    defaultValues: {
      text: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<SearchData> = form => search(form.text);
  return (
    <FormControl onChange={form.handleSubmit(onSubmit)}>
      <Box sx={{ marginBottom: '20px' }}>
        <FormTextInput
          form={form}
          label="Search..."
          variant="outlined"
          type="text"
          helperText=""
          fieldName="text"
          registerOptions={{
            pattern: {
              value: SearchPattern,
              message: 'Invalid search',
            },
          }}
        />
      </Box>
    </FormControl>
  );
};

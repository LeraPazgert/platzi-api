import { Card, CardActions, CardContent } from '@mui/material';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  DropdownInput,
  FormTextInput,
  ProductTitlePattern,
  TextareaInput,
  UploadButton,
} from '../../../../shared';
import { useCategoriesListController } from '../../../categories';
import { IProduct, IProductFormData } from '../../types';

type Props = {
  product?: IProduct | null;
  save: (data: IProductFormData) => Promise<void>;
};
export const ProductEditForm: FC<Props> = ({ product, save }) => {
  const { categories } = useCategoriesListController();

  const form = useForm<IProductFormData>({
    defaultValues: {
      categoryId: product?.category.id,
      description: product?.description,
      price: product?.price,
      images: product?.images,
      title: product?.title,
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const existedImages = form.watch('images');

  const categoriesOptions = categories.map(category => ({
    label: category.name,
    value: category.id,
  }));

  const onSubmit: SubmitHandler<IProductFormData> = form => save(form);

  return (
    <Card
      sx={{
        width: '80%',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
        >
          <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <FormTextInput
              form={form}
              label="Title"
              variant="outlined"
              type="text"
              helperText=""
              fieldName="title"
              registerOptions={{
                required: 'Title is required',
                pattern: {
                  value: ProductTitlePattern,
                  message: 'Invalid title',
                },
                minLength: {
                  value: 2,
                  message: 'Min 2 letters',
                },
                maxLength: {
                  value: 25,
                  message: 'Max 15 letters',
                },
              }}
            />
            <TextareaInput
              form={form}
              label="Description"
              helperText=""
              fieldName="description"
              registerOptions={{
                required: 'Title is required',
                pattern: {
                  value: ProductTitlePattern,
                  message: 'Invalid title',
                },
                minLength: {
                  value: 2,
                  message: 'Min 2 letters',
                },
              }}
            />
            <FormTextInput
              form={form}
              label="Price"
              variant="outlined"
              type="number"
              helperText=""
              fieldName="price"
              minWidth="250px"
              registerOptions={{
                required: 'Price is required',
                min: {
                  value: 0.1,
                  message: 'Min $0.1',
                },
              }}
            />
            <DropdownInput
              form={form}
              label="Category"
              fieldName="categoryId"
              helperText=""
              options={categoriesOptions}
              registerOptions={{
                required: 'Category is required',
              }}
            />
            <UploadButton
              errorText="Select images"
              form={form}
              label="Images"
              fieldName="newImage"
              registerOptions={{
                required: `${existedImages?.length ? false : 'Category is required'}`,
              }}
            />
          </div>
          <CardActions style={{ margin: 'auto' }}>
            <Button type="submit">Save</Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

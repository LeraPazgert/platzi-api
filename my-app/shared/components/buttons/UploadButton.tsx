import { ChangeEvent, ReactElement, useEffect } from "react";
import Button from '@mui/material/Button';
import { UseFormReturn, Path, FieldValues, RegisterOptions, PathValue } from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';



interface Props<T extends FieldValues> {
    label: string
    form: UseFormReturn<T>,
    fieldName: Path<T>,
    registerOptions: RegisterOptions
}

export const UploadButton = <T extends FieldValues>(props: Props<T>): ReactElement | null => {
    const { form, fieldName, label, registerOptions } = props;

    const handleSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            form.setValue(fieldName, event.target.files[0] as PathValue<T, Path<T>>)
            form.trigger(fieldName)
        }
    }

    useEffect(() => {
        form.register(fieldName, registerOptions)
    }, [fieldName, form, registerOptions])

    return (

        <>
            <Button variant="contained" component="label">
                {label}
                <input hidden accept="image/*" multiple type="file" onChange={handleSelectFile} />

            </Button>

            {form.formState.errors[fieldName]?.message &&
                <FormHelperText sx={{ marginLeft: '14px' }} error id="component-error-text">Select your avatar</FormHelperText>
            }
        </>
    )
}
import { FC, ReactElement } from "react";
import { TextField } from '@mui/material';
import { Controller, UseFormReturn, Path, FieldValues } from "react-hook-form";


interface IFormTextInputProps<T extends FieldValues> {
    label: string
    variant?: "standard" | "filled" | "outlined"
    type: string
    helperText: string,
    form: UseFormReturn<T>,
    fieldName: Path<T>
}

export const FormTextInput = <T extends FieldValues>(props: IFormTextInputProps<T>): ReactElement | null => {
    const { label, variant, type, helperText, form, fieldName } = props;

    return (
        <Controller
            name={fieldName}
            control={form.control}
            render={({ field }) =>
                <TextField {...field}
                    label={label}
                    variant={variant}
                    type={type}
                    helperText={helperText}
                />}
        />


    )
}
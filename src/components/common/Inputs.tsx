import React from 'react';
import { MenuItem, Select, Stack, SxProps, TextField, Typography } from '@mui/material';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface FormInputProps {
    register: UseFormRegister<FieldValues>
    fieldName: string
    required?: boolean
    sx?: SxProps
}

export const FormInput: React.FC<FormInputProps> = ({ register, fieldName, required, sx }) => {
    return (
        <Stack direction="column">
            <Typography variant="h6">{fieldName}</Typography>
            <TextField {...register(fieldName)} variant="outlined" required={required} sx={sx}/>
        </Stack>
    );
};

export const SelectInput: React.FC<FormInputProps> = ({ register, fieldName, required, sx }) => {
    return (
        <Stack direction="column">
            <Typography variant="h6">{fieldName}</Typography>
            <Select {...register(fieldName)} variant="outlined" required={required} sx={sx}>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
            </Select>
        </Stack>
    );
}

export const DateInput: React.FC<FormInputProps> = ({ register, fieldName, required, sx }) => {
    return (
        <Stack direction="column">
            <Typography variant="h6">{fieldName}</Typography>
            <TextField {...register(fieldName)} variant="outlined" required={required} type="date" sx={sx}/>
        </Stack>
    );
}

import React, { useMemo } from 'react';
import { MenuItem, Select, Stack, SxProps, TextField, Typography } from '@mui/material';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface FormInputProps {
    register: UseFormRegister<FieldValues>
    title: string
    fieldName: string
    value?: string
    required?: boolean
    sx?: SxProps
}

export const FormInput: React.FC<FormInputProps> = ({ register, title, fieldName, value, required, sx }) => {
    // NOTE: sxに変更があれば、FormInputの見た目が変わる可能性がある。つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <TextField {...register(fieldName)} variant="outlined" value={value} required={required} sx={sx}/>
        </Stack>
    ), [sx]);
};

export const SelectInput: React.FC<FormInputProps> = ({ register, title, fieldName, required, sx }) => {
    // NOTE: sxに変更があれば、SelectInputの見た目が変わる可能性がある。つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Select {...register(fieldName)} variant="outlined" value="High" required={required} sx={sx}>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
            </Select>
        </Stack>
    ), [sx]);
}

export const DateInput: React.FC<FormInputProps> = ({ register, title, fieldName, required, sx }) => {
    // NOTE: sxに変更があれば、DateInputの見た目が変わる可能性がある。つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <TextField {...register(fieldName)} variant="outlined" required={required} type="date" sx={sx}/>
        </Stack>
    ), [sx]);
}

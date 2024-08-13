import React, { useMemo } from 'react';
import { Stack, SxProps, TextField, Typography } from '@mui/material';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { Dayjs } from 'dayjs';

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
    ), [sx, value]);
};

interface FormDateProps {
    register: UseFormRegister<FieldValues>
    title: string
    fieldName: string
    value?: Dayjs
    required?: boolean
    sx?: SxProps
}

export const DateInput: React.FC<FormDateProps> = ({ register, title, fieldName, required, sx }) => {
    // NOTE: sxに変更があれば、DateInputの見た目が変わる可能性がある。つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <TextField {...register(fieldName)} variant="outlined" required={required} type="date" sx={sx}/>
        </Stack>
    ), [sx]);
}

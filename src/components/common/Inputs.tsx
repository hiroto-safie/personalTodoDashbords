import React, { useMemo } from 'react';
import { SxProps, TextField } from '@mui/material';
import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface BaseInputProps {
    register: UseFormRegister<FieldValues>
    title: string
    fieldName: string
    value?: string
    required?: boolean
    type?: React.HTMLInputTypeAttribute
    sx?: SxProps
}

export const Input: React.FC<BaseInputProps> = ({ register, fieldName, value, required, type, sx }) => {
    return(
        useMemo(() => (
            <TextField {...register(fieldName)} variant="outlined" value={value} required={required} type={type} sx={sx}/>
        ), [sx, value])
    )
}
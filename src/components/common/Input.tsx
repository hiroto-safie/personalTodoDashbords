import React, { useMemo } from 'react';
import { SxProps, TextField } from '@mui/material';
import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface BaseInputProps {
    register: UseFormRegister<FieldValues>
    fieldName: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    type?: React.HTMLInputTypeAttribute
    sx?: SxProps
}

export const Input: React.FC<BaseInputProps> = ({ register, fieldName, value, onChange, required, type, sx }) => {
    return(
        useMemo(() => (
            <TextField {...register(fieldName)} variant="outlined" value={value} onChange={onChange} required={required} type={type} sx={sx}/>
        ), [sx, value])
    )
}
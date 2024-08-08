import { Stack, Typography, Select, MenuItem, SxProps, SelectChangeEvent } from "@mui/material";
import { useMemo } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface FormMenuProps {
    register: UseFormRegister<FieldValues>
    title: string
    fieldName: string
    value?: string
    required?: boolean
    sx?: SxProps
}

export const PriorityMenu: React.FC<FormMenuProps> = ({ register, title, fieldName, value, required, sx }) => {
    let priority = value
    const handleChange = (event: SelectChangeEvent<string>) => {
        console.log(event.target.value)
        priority = event.target.value
    }
    // NOTE: sxに変更があれば、SelectInputの見た目が変わる可能性がある。つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Select {...register(fieldName)} variant="outlined" value={priority} onChange={handleChange} required={required} sx={sx}>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
            </Select>
        </Stack>
    ), [sx, value]);
}

export const StatusMenu: React.FC<FormMenuProps> = ({ register, title, fieldName, value, required, sx }) => {
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Select {...register(fieldName)} variant="outlined" value={value} required={required} sx={sx}>
                <MenuItem value="Untouched">Untouched</MenuItem>
                <MenuItem value="Ongoing">Ongoing</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
            </Select>
        </Stack>
    ), [sx]);
}
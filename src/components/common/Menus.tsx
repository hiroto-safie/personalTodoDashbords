import { Stack, Typography, Select, MenuItem, SxProps } from "@mui/material";
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

export const PriorityMenu: React.FC<FormMenuProps> = ({ register, title, fieldName, required, sx }) => {
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

export const StatusMenu: React.FC<FormMenuProps> = ({ register, title, fieldName, required, sx }) => {
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Select {...register(fieldName)} variant="outlined" value="Open" required={required} sx={sx}>
                <MenuItem value="untouched">untouched</MenuItem>
                <MenuItem value="ongoing">ongoing</MenuItem>
                <MenuItem value="completed">completed</MenuItem>
            </Select>
        </Stack>
    ), [sx]);
}
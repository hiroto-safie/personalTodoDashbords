import { Select, SxProps, MenuItem, SelectChangeEvent } from "@mui/material";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { Priority } from "../../types/priority";
import { Status } from "../../types/status";

export interface BaseMenuProps<T> {
    register: UseFormRegister<FieldValues>
    fieldName: string
    required?: boolean
    value?: T
    onChange?: (event: SelectChangeEvent<T>) => void
    choices?: string[]
    sx?: SxProps
}

export const Menu = <T extends string | Priority | Status | undefined>({ register, fieldName, required, value, onChange, choices, sx }: BaseMenuProps<T>) => {
    return (
        <Select {...register(fieldName)} variant="outlined" required={required} value={value} onChange={onChange} sx={sx}>
            {choices?.map((choice: string, i) => <MenuItem key={i} value={choice}>{choice}</MenuItem>)}
        </Select>
    )
}
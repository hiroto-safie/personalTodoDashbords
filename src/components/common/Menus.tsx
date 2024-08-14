import { Select, SxProps, MenuItem, SelectChangeEvent } from "@mui/material";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { Priority } from "../../types/priority";
import { Status } from "../../types/status";

export interface BaseMenuProps<T> {
    register: UseFormRegister<FieldValues>
    fieldName: string
    required?: boolean
    onChange?: (event: SelectChangeEvent<T>) => void
    choices?: string[]
    sx?: SxProps
}

export const Menu = <T extends string | Priority | Status | undefined>({ register, fieldName, required, choices, sx }: BaseMenuProps<T>) => {
    return (
        <Select {...register(fieldName)} variant="outlined" required={required} sx={sx}>
            {choices?.map((choice: string) => <MenuItem value={choice}>{choice}</MenuItem>)}
        </Select>
    )
}
import { Stack, Typography, Select, MenuItem, SxProps, SelectChangeEvent } from "@mui/material";
import { useMemo, useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { Priority } from "../../types/priority";
import { Status } from "../../types/status";

interface BaseMenuProps {
    register: UseFormRegister<FieldValues>
    title: string
    fieldName: string
    required?: boolean
    sx?: SxProps
}

interface PriorityMenuProps extends BaseMenuProps {
    value: Priority
}

export const PriorityMenu: React.FC<PriorityMenuProps> = ({ register, title, fieldName, value, required, sx }) => {
    const [priority, setPriority] = useState<Priority>(value)
    const handleChange = (event: SelectChangeEvent<Priority>) => {
        setPriority(event.target.value as Priority)
    }
    // NOTE: sxに変更があれば、SelectInputの見た目が変わる可能性がある。つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Select {...register(fieldName)} variant="outlined" value={priority} onChange={handleChange} required={required} sx={sx}>
                <MenuItem value={"High"}>High</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Low"}>Low</MenuItem>
            </Select>
        </Stack>
    ), [sx, priority]); // NOTE: priorityも設定してあげないと、いくら値を設定しても登録されない
}

interface StatusMenuProps extends BaseMenuProps {
    value: Status
}
export const StatusMenu: React.FC<StatusMenuProps> = ({ register, title, fieldName, value, required, sx }) => {
    const [status, setStatus] = useState<Status>(value)
    const handleChange = (event: SelectChangeEvent<string>) => {
        setStatus(event.target.value as Status)
    }
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Select {...register(fieldName)} variant="outlined" value={status} onChange={handleChange} required={required} sx={sx}>
                <MenuItem value="Untouched">Untouched</MenuItem>
                <MenuItem value="Ongoing">Ongoing</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
            </Select>
        </Stack>
    ), [sx, status]);
}
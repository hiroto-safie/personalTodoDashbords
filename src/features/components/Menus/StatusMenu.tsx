import { SelectChangeEvent, Stack, Typography } from "@mui/material"
import { useState, useMemo } from "react"
import { BaseMenuProps, Menu } from "../../../components/common/Menus"
import { Status } from "../../../types/status"

interface StatusMenuProps extends Omit<BaseMenuProps<Status>, "choices"> {
    title: string
    value: Status
}
export const StatusMenu: React.FC<StatusMenuProps> = ({ register, title, fieldName, value, required, sx }) => {
    const [status, setStatus] = useState<Status>(value)
    const handleChange = (event: SelectChangeEvent<string>) => {
        setStatus(event.target.value as Status)
    }

    const choices = ["Untouched", "Ongoing", "Completed"]
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Menu register={register} fieldName={fieldName} onChange={handleChange} choices={choices} required={required} sx={sx} />
        </Stack>
    ), [sx, status]);
}
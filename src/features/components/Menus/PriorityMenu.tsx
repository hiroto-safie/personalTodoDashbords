import { SelectChangeEvent, Stack, Typography } from "@mui/material"
import { useState, useMemo } from "react"
import { BaseMenuProps, Menu } from "../../../components/common/Menus"
import { Priority } from "../../../types/priority"

interface PriorityMenuProps extends Omit<BaseMenuProps<Priority>, "choices"> {
    title: string
}

export const PriorityMenu: React.FC<PriorityMenuProps> = ({ register, title, fieldName, value, required, sx }) => {
    const [priority, setPriority] = useState<Priority>(value || "High")
    const handleChange = (event: SelectChangeEvent<Priority>) => {
        setPriority(event.target.value as Priority)
    }

    const choices = ["High", "Medium", "Low"]
    // NOTE: sxに変更があれば、SelectInputの見た目が変わる可能性がある。つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Menu register={register} fieldName={fieldName} value={priority} onChange={handleChange} choices={choices} required={required} sx={sx} />
        </Stack>
    ), [sx, priority]); // NOTE: priorityも設定してあげないと、いくら値を設定しても登録されない
}
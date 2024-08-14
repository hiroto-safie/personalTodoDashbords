import { Stack, Typography } from "@mui/material"
import { useMemo } from "react"
import { BaseInputProps, Input } from "../../../components/common/Inputs"

export const DateInput: React.FC<BaseInputProps> = ({ register, title, fieldName, value, required, sx }) => {
    // NOTE: sxに変更があれば、DateInputの見た目が変わる可能性がある。つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Input register={register} title={title} fieldName={fieldName} value={value} required={required} type="date" sx={sx}/>
        </Stack>
    ), [sx, title, value]);
}
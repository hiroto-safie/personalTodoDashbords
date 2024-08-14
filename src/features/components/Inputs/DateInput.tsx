import { Stack, Typography } from "@mui/material"
import { useMemo, useState } from "react"
import { BaseInputProps, Input } from "../../../components/common/Input"

interface DateInputProps extends BaseInputProps {
    title: string
}

export const DateInput: React.FC<DateInputProps> = ({ register, title, fieldName, value, required, sx }) => {
    const [date, setDate] = useState<string>(value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    }

    // NOTE: sxに変更があれば、DateInputの見た目が変わる可能性がある。つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Input register={register} fieldName={fieldName} value={date} onChange={handleChange} required={required} type="date" sx={sx}/>
        </Stack>
    ), [sx, title, value]);
}
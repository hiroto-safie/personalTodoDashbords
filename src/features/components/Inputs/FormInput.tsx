import { Stack, Typography } from "@mui/material"
import { useMemo } from "react"
import { BaseInputProps, Input } from "../../../components/common/Inputs";

export const FormInput: React.FC<BaseInputProps> = ({ register, title, fieldName, value, required, sx }) => {
    // NOTE: sxに変更があれば、FormInputの見た目が変わる可能性がある。つまり、再計算(再レンダリング)が必要になる可能性がある
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Input register={register} title={title} fieldName={fieldName} value={value} required={required} sx={sx}/>
        </Stack>
    ), [sx, title, value]);
};
import { Stack, Typography } from "@mui/material"
import { useMemo, useState } from "react"
import { BaseInputProps, Input } from "../../../components/common/Input";

interface FormInputProps extends BaseInputProps {
    title: string
}

export const FormInput: React.FC<FormInputProps> = ({ register, title, fieldName, value, required, sx }) => {
    const [inputText, setInputText] = useState<string>(value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    // NOTE: sxに変更があれば、FormInputの見た目が変わる可能性がある。つまり、再計算(再レンダリング)が必要になる可能性がある
    // titleやvalueに変更があったときも、画面に表示される内容が変わるため再計算が必要になる
    return useMemo(() => (
        <Stack direction="column">
            <Typography variant="h6">{title}</Typography>
            <Input register={register} fieldName={fieldName} value={inputText} onChange={handleChange} required={required} sx={sx}/>
        </Stack>
    ), [sx, title, value]);
};
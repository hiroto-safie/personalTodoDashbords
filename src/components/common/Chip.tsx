import { Chip as MuiChip } from "@mui/material"
import { useMemo } from "react"

const chipWidth = "5vw"

// NOTE: chipWidthの値が変わったときだけ、再レンダリングをかける
type ColorTheme = "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";

interface ChipProps {
    colorTheme: ColorTheme
    label: string
}

export const Chip: React.FC<ChipProps> = ({ colorTheme, label }) => {
    return useMemo(() => <MuiChip color={colorTheme} label={label} sx={{width: chipWidth}} />, [colorTheme, label])
}
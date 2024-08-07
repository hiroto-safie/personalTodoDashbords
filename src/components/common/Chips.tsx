import { Chip } from "@mui/material"
import { useMemo } from "react"

const chipWidth = "5vw"

// NOTE: chipWidthの値が変わったときだけ、再レンダリングをかける
export const HighPriorityChip: React.FC = () => {
    return useMemo(() => <Chip color="error" label="High" sx={{width: chipWidth}} />, [chipWidth])
}

export const MiddlePriorityChip: React.FC = () => {
    return useMemo(() => <Chip color="warning" label="Middle" sx={{width: chipWidth}} />, [chipWidth])
}

export const LowPriorityChip: React.FC = () => {
    return useMemo(() => <Chip color="primary" label="Low" sx={{width: chipWidth}} />, [chipWidth])
}
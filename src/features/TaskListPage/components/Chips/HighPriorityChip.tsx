import { useMemo } from "react"
import { Chip } from "../../../../components/common/Chip"

export const HighPriorityChip: React.FC = () => {
    return useMemo(() => <Chip colorTheme="error" label="High" />, [])
}
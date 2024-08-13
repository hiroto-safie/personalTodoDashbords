import { Chip } from "../../../../components/common/Chip"
import { useMemo } from "react"

export const LowPriorityChip: React.FC = () => {
    return useMemo(() => <Chip colorTheme="primary" label="Low" />, [])
}
import { Chip } from "../../../../components/common/Chip"
import { useMemo } from "react"

export const MediumPriorityChip: React.FC = () => {
    return useMemo(() => <Chip colorTheme="secondary" label="Medium" />, [])
}
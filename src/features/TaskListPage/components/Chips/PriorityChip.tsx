import React from "react"
import { Priority } from "../../../../types/priority"
import { HighPriorityChip } from "./HighPriorityChip"
import { LowPriorityChip } from "./LowPriorityChip"
import { MediumPriorityChip } from "./MediumPriorityChip"

export const PriorityChip: React.FC<{priority: Priority}> = React.memo(({priority}) => {
    switch(priority){
        case "High":
            return <HighPriorityChip />
        case "Medium":
            return <MediumPriorityChip />
        case "Low":
            return <LowPriorityChip />
    }
})
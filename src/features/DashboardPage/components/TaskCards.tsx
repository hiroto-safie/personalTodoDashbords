import { Typography } from "@mui/material"
import { useMemo } from "react"
import { Task } from "../../../types/task"
import { Card } from "../../../components/common/Card"

export const TaskCard = ({ task }: { task: Task }) => {
    return useMemo(() => (
        <Card>
            <Typography variant="h5">{task.name}</Typography>
            <Typography variant="body1">{task.description}</Typography>
            <Typography variant="body2">{task.dueDate}</Typography>
        </Card>
    ), [task])
}
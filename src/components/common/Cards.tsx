import { Card, CardContent, Typography } from "@mui/material"
import { Task } from "../../types/task"
import { useMemo } from "react"

export const TaskCard = ({ task }: { task: Task }) => {
    return useMemo(() => (
        <Card>
            <CardContent>
                <Typography variant="h5">{task.name}</Typography>
                <Typography variant="body1">{task.description}</Typography>
                <Typography variant="body2">{task.dueDate.format("YYYY/MM/DD (ddd)")}</Typography>
            </CardContent>
        </Card>
    ), [task])
}
import { Button, Chip, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext, useMemo, useState } from 'react';
import { TaskContext } from '../providers/TaskContextProvider';
import { TaskEditModal } from '../components/common/Modals';
import { HighPriorityChip, LowPriorityChip, MiddlePriorityChip } from '../components/common/Chips';

const TasklistPage: React.FC = () => {
    const [taskEditModalOpen, setTaskEditModalOpen] = useState(false)
    const {state, dispatch} = useContext(TaskContext)

    const handleDeleteTask = (id: number) => {
        dispatch({type: "DELETE_TASK", payload: id})
    }

    const PriorityChip: React.FC<{priority: string}> = ({priority}) => {
        switch(priority){
            case "High":
                return <HighPriorityChip />
            case "Middle":
                return <MiddlePriorityChip />
            case "Low":
                return <LowPriorityChip />
        }
    }
    
    return (
        <>
            <Typography variant="h2">Task List</Typography>
            <TableContainer sx={{ maxHeight: "60vh" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Task Name</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Due date</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state?.tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.name}</TableCell>
                                <TableCell><PriorityChip priority={task.priority} /></TableCell>
                                <TableCell>{task.dueDate.format("YYYY/MM/DD (ddd)")}</TableCell>
                                <TableCell>{task.description}</TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={2}>
                                        <Button variant="contained" onClick={() => setTaskEditModalOpen(true)}>Edit</Button>
                                        <Button variant="contained" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                                    </Stack>
                                </TableCell>
                                <TaskEditModal open={taskEditModalOpen} setOpen={setTaskEditModalOpen} task={task} />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
};

export default TasklistPage;

import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { TaskContext } from '../providers/TaskContextProvider';
import { TaskEditModal } from '../components/common/Modals';

const TasklistPage: React.FC = () => {
    const [taskEditModalOpen, setTaskEditModalOpen] = useState(false)
    const {state, dispatch} = useContext(TaskContext)

    const handleDeleteTask = (id: number) => {
        dispatch({type: "DELETE_TASK", payload: id})
    }
    
    return (
        <>
            <Typography variant="h2">Task List</Typography>
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
                    {state.tasks.map((task) => (
                        <TableRow key={task.id}>
                            <TableCell>{task.name}</TableCell>
                            <TableCell>{task.priority}</TableCell>
                            <TableCell>{task.dueDate.format("YYYY-MM-DD")}</TableCell>
                            <TableCell>{task.description}</TableCell>
                            <TableCell>
                                <Button variant="contained" onClick={() => setTaskEditModalOpen(true)}>Edit</Button>
                                <Button variant="contained" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                            </TableCell>
                            <TaskEditModal open={taskEditModalOpen} setOpen={setTaskEditModalOpen} task={task} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
};

export default TasklistPage;

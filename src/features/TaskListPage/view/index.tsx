import { Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { TaskEditModal } from '../../../components/common/Modals';
import { Task } from '../../../types/task';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../../types/state';
import { PriorityChip } from '../components/Chips/PriorityChip';
import { deleteTask } from '../../../actions';

const TasklistPage: React.FC = () => {
    const [taskEditModalOpen, setTaskEditModalOpen] = useState(false)
    const allTasks: Task[] = useSelector((state: State) => state.tasks);
    const [filterText, setFilterText] = useState("All")
    const dispatch = useDispatch();

    // NOTE: レンダリングによるメモリアロケーションが発生しないようにuseCallbackを使用
    const handleDeleteTask = useCallback((id: number) => {
        dispatch(deleteTask(id))
    }, [])

    const filterTasks = useCallback((tasks: Task[]) => {
        if(filterText === "All") return tasks
        return tasks.filter((task) => task.priority === filterText)
    }, [])

    const tasks = filterTasks(allTasks)
    
    return (
        <>
            <Typography variant="h2">Task List</Typography>
            <Typography>Priority Filtering</Typography>
            <Stack direction="row">
                <Button onClick={() => setFilterText("All")}>All priority</Button>
                <Button onClick={() => setFilterText("High")}>High priority</Button>
                <Button onClick={() => setFilterText("Medium")}>Medium priority</Button>
                <Button onClick={() => setFilterText("Low")}>Low priority</Button>
            </Stack>
            <TableContainer sx={{ maxHeight: "60vh" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Task Name</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Due date</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks?.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.name}</TableCell>
                                <TableCell>{task.status}</TableCell>
                                <TableCell><PriorityChip priority={task.priority} /></TableCell>
                                <TableCell>{task.dueDate}</TableCell>
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

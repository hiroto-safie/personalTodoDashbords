import { Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useCallback, useContext, useState } from 'react';
import { TaskContext } from '../providers/TaskContextProvider';
import { TaskEditModal } from '../components/common/Modals';
import { HighPriorityChip, LowPriorityChip, MiddlePriorityChip } from '../components/common/Chips';
import { Task } from '../types/task';

const TasklistPage: React.FC = () => {
    const [taskEditModalOpen, setTaskEditModalOpen] = useState(false)
    const {state, dispatch} = useContext(TaskContext)
    const [filterText, setFilterText] = useState("High")

    // NOTE: useCallbackを使うことで、「dispatchの内容が変わらなければ、再レンダリングをしても
    // この関数のメモリアロケーションは変わらない」と考えた
    const handleDeleteTask = useCallback((id: number) => {
        dispatch({type: "DELETE_TASK", payload: id})
    }, [dispatch])

    const PriorityChip: React.FC<{priority: string}> = React.memo(({priority}) => {
        switch(priority){
            case "High":
                return <HighPriorityChip />
            case "Middle":
                return <MiddlePriorityChip />
            case "Low":
                return <LowPriorityChip />
        }
    })

    // NOTE: このくらいの処理であれば、useMemoを使ったほうがいいのでは？
    const filterTasks = useCallback((tasks: Task[]) => {
        if(filterText === "All") return tasks
        return tasks.filter((task) => task.priority === filterText)
    }, [filterText])

    const tasks = filterTasks(state.tasks)
    
    return (
        <>
            <Typography variant="h2">Task List</Typography>
            <Typography>Filtering</Typography>
            <Stack direction="row">
                <Button onClick={() => setFilterText("All")}>All priority</Button>
                <Button onClick={() => setFilterText("High")}>High priority</Button>
                <Button onClick={() => setFilterText("Middle")}>Middle priority</Button>
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

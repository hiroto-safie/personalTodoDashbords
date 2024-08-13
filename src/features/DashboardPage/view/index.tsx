import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { TaskContext } from '../../../providers/TaskContextProvider';
import dayjs from 'dayjs';
import { Task } from '../../../types/task';
import { TaskCard } from '../../../components/common/Cards';
import { Dashboard } from '../components/Dashboard';

const DashboardPage: React.FC = () => {
    const {state} = useContext(TaskContext)
    const filterUpcomingTasks = (tasks: Task[], days: number) => {
        const today = dayjs(); 
        return tasks.filter((task) => dayjs(task.dueDate).diff(today, "day") <= days);
    }
    // NOTE: 期限日が本日から3日以内のタスクを取得
    const upcomingTaskCards = filterUpcomingTasks(state.tasks, 3).map((task) => {
        return <TaskCard task={task} key={task.id} />
    })

    return (
        <>
            <Typography variant="h2">Dashboard</Typography>
            <Typography variant="h4">Upcoming Tasks</Typography>
            <Dashboard upComingTaskCards={upcomingTaskCards}/>
        </>
    );
};

export default DashboardPage;
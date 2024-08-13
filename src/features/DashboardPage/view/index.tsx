import { Typography } from '@mui/material';
import React from 'react';
import dayjs from 'dayjs';
import { Task } from '../../../types/task';
import { TaskCard } from '../components/TaskCards';
import { Dashboard } from '../components/Dashboard';
import { useAppSelector } from '../../../reducers';

const DashboardPage: React.FC = () => {
    const tasks = useAppSelector((state) => state.tasks);
    const filterUpcomingTasks = (tasks: Task[], days: number) => {
        const today = dayjs(); 
        return tasks.filter((task) => dayjs(task.dueDate).diff(today, "day") <= days);
    }
    // NOTE: 期限日が本日から3日以内のタスクを取得
    const upcomingTaskCards = filterUpcomingTasks(tasks, 3).map((task) => {
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
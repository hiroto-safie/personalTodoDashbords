import { Paper, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { TaskContext } from '../providers/TaskContextProvider';
import dayjs from 'dayjs';
import { Task } from '../types/task';
import { TaskCard } from '../components/common/Cards';

// NOTE: upComingTaskCardsの内容が変わらなければ、Dashboardコンポーネントは再レンダリングする必要がない
export const Dashboard: React.FC<{ upComingTaskCards: JSX.Element[] }> = React.memo(({ upComingTaskCards }) => {
    return (
        <Paper sx={{ minWidth: "50vw" }}>
            <Stack direction="column">
                {upComingTaskCards}
            </Stack>
        </Paper>
    );
})

const DashboardPage: React.FC = () => {
    const {state} = useContext(TaskContext)
    const filterUpcomingTasks = (tasks: Task[], days: number) => {
        const today = dayjs(); 
        return tasks.filter((task) => task.dueDate.diff(today, "day") <= days);
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
import { useMemo } from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { Task } from '../../../types/task';

export default function TaskStatistics() {
  const tasks: Task[] = useSelector((state: RootState) => state.tasks);

  const statistics = useMemo(() => {
    const totalTasks = tasks.length;
    const CompletedTasks = tasks.filter(task => task.status === 'Completed').length;
    const pendingTasks = totalTasks - CompletedTasks;
    const completionRate = totalTasks > 0 ? (CompletedTasks / totalTasks) * 100 : 0;

    return {
      totalTasks,
      CompletedTasks,
      pendingTasks,
      completionRate: completionRate.toFixed(2) + '%'
    };
  }, [tasks]);

  return (
    <>
        <Typography variant="h2">Task Statistics</Typography>
        <p>Total Tasks: {statistics.totalTasks}</p>
        <p>Completed Tasks: {statistics.CompletedTasks}</p>
        <p>Pending Tasks: {statistics.pendingTasks}</p>
        <p>Completion Rate: {statistics.completionRate}</p>
    </>
  );
}
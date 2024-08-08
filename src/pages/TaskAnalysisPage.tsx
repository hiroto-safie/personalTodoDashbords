import { useContext, useMemo } from 'react';
import { TaskContext } from '../providers/TaskContextProvider';
import { Typography } from '@mui/material';

export default function TaskStatistics() {
  const { state } = useContext(TaskContext);

  const statistics = useMemo(() => {
    const totalTasks = state.tasks.length;
    const CompletedTasks = state.tasks.filter(task => task.status === 'Completed').length;
    const pendingTasks = totalTasks - CompletedTasks;
    const completionRate = totalTasks > 0 ? (CompletedTasks / totalTasks) * 100 : 0;

    return {
      totalTasks,
      CompletedTasks,
      pendingTasks,
      completionRate: completionRate.toFixed(2) + '%'
    };
  }, [state.tasks]);

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
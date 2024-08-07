import { useContext, useMemo } from 'react';
import { TaskContext } from '../providers/TaskContextProvider';
import { Typography } from '@mui/material';

export default function TaskStatistics() {
  const { state } = useContext(TaskContext);

  const statistics = useMemo(() => {
    const totalTasks = state.tasks.length;
    const completedTasks = state.tasks.filter(task => task.status === 'completed').length;
    const pendingTasks = totalTasks - completedTasks;
    const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return {
      totalTasks,
      completedTasks,
      pendingTasks,
      completionRate: completionRate.toFixed(2) + '%'
    };
  }, [state.tasks]);

  return (
    <>
        <Typography variant="h2">Task Statistics</Typography>
        <p>Total Tasks: {statistics.totalTasks}</p>
        <p>Completed Tasks: {statistics.completedTasks}</p>
        <p>Pending Tasks: {statistics.pendingTasks}</p>
        <p>Completion Rate: {statistics.completionRate}</p>
    </>
  );
}
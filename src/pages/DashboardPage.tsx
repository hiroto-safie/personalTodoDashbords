import { Paper, Typography } from '@mui/material';
import React from 'react';

const DashboardPage: React.FC = () => {
    return (
        <>
            <Typography variant="h2">Dashboard</Typography>
            <Typography variant="h4">Upcoming Tasks</Typography>
            <Paper sx={{minWidth: "50vw"}}>
                <Typography>タスク1</Typography>
                <Typography>タスク2</Typography>
                <Typography>タスク3</Typography>
            </Paper>
        </>
    );
};

export default DashboardPage;
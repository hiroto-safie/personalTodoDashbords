import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

const TaskAnalysisPage: React.FC = () => {
    return (
        <>
            <Typography variant="h2">Task Analysis</Typography>
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
                    
                </TableBody>
            </Table>
        </>
    )
};

export default TaskAnalysisPage;
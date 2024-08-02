import { Box, Typography } from '@mui/material';
import React from 'react';

export const HEADER_HEIGHT = 10;

export const Header: React.FC = () => {
    return (
        <Box sx={{width: "100vw", height: `${HEADER_HEIGHT}vh`, backgroundColor: "green"}}>
            <Typography variant='h2'>Task Management Dashboard</Typography>
        </Box>
    );
};
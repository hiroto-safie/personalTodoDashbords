import { Box, cardClasses, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { HEADER_HEIGHT } from './Header';

interface PageRouteComponentProps {
  pageTitle: string;
  pageLink: string;
}

const PageRouteComponent: React.FC<PageRouteComponentProps> = ({ pageTitle, pageLink }) => {
    return (
        <Box sx={{width: "100%", height: "8vh", "&hover": {
            backgroundColor: "gray"
        }}}>
            <Link href={pageLink}>
                <Typography>{pageTitle}</Typography>
            </Link>
        </Box>
    );
}

export const Sidebar: React.FC = () => {
    return (
        <Stack direction="row">
            <Stack sx={{width: "20vw", height: `calc(100vh - ${HEADER_HEIGHT}vh)`, backgroundColor: "blue", marginRight: 3}}>
                <PageRouteComponent pageTitle="Dashboard" pageLink="/" />
                <PageRouteComponent pageTitle="Task List" pageLink="/taskList" />
                <PageRouteComponent pageTitle="Task Analysis" pageLink="/taskAnalysis" />
            </Stack>
        </Stack>
    );
};
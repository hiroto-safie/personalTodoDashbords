import { Box, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { HEADER_HEIGHT } from './Header';
import { TaskAddModal } from '../common/Modals';

interface PageRouteComponentProps {
  pageTitle: string;
  pageLink?: string;
  onClick?: () => void;
}

const PageRouteComponent: React.FC<PageRouteComponentProps> = ({ pageTitle, pageLink, onClick }) => {
    return (
        <Box
            sx={{width: "100%","&hover": {
                    backgroundColor: "gray"
                }
            }}
            onClick={onClick}
            >
            <Link href={pageLink}>
                <Typography variant="h5" align='center' sx={{margin: 2}}>{pageTitle}</Typography>
            </Link>
        </Box>
    );
}

export const Sidebar: React.FC = () => {
    const [isTaskAddModalOpen, setIsTaskAddModalOpen] = React.useState(false);
    return (
        <Stack direction="row">
            <Stack sx={{width: "15vw", height: `calc(95vh - ${HEADER_HEIGHT}vh)`, backgroundColor: "blue", marginRight: 3}}>
                <PageRouteComponent pageTitle="Dashboard" pageLink="/" />
                <PageRouteComponent pageTitle="Task Add" onClick={() => setIsTaskAddModalOpen(true)} />
                <PageRouteComponent pageTitle="Task List" pageLink="/taskList" />
                <PageRouteComponent pageTitle="Task Analysis" pageLink="/taskAnalysis" />
            </Stack>
            <TaskAddModal open={isTaskAddModalOpen} setOpen={setIsTaskAddModalOpen}/>
        </Stack>
    );
};
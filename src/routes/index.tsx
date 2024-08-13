import { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../features/DashboardPage/view';
import TaskList from '../features/TaskListPage/view';
import TaskAnalysis from '../features/TaskStatisticsPage/view';

const PAGES = [
    {
        path: '/',
        element: <Dashboard />,
    },
    { 
        path: '/taskList',
        element: <TaskList /> 
    },
    {
        path: '/taskAnalysis',
        element: <TaskAnalysis />
    }
];

const createRoutes = (pages: readonly { readonly path: string, readonly element: ReactNode }[]) => {
    return pages.map(page => (
        <Route key={page.path} path={page.path} element={page.element} />
    ));
}

export { createRoutes, PAGES };
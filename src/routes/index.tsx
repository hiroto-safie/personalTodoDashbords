import { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../pages/DashboardPage';
import TaskList from '../pages/TasklistPage';
import TaskAnalysis from '../pages/TaskAnalysisPage';

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
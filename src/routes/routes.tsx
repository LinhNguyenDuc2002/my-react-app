import { createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import AdminLayout from '../layouts/AdminLayout';
import Home from '../pages/home/Home';

export const routes = createBrowserRouter([
    {
        path: '',
        element: <UserLayout />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '',
                element: <Home />,
                children: [
                    {
                        path: ':id',
                        element: <Home />,
                    }
                ]
            }
        ]
    }
]);
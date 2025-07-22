import { createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import AdminLayout from '../layouts/AdminLayout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import ROUTE_CONSTANTS from './routeConstant';

export const routes = createBrowserRouter([
    {
        path: '',
        element: <UserLayout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            { path: ROUTE_CONSTANTS.login, element: <Login /> },
            { path: ROUTE_CONSTANTS.signup, element: <Signup /> },
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
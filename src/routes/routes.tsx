import { createBrowserRouter } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import AdminLayout from '../layouts/AdminLayout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import { ROUTE_CONSTANTS } from './RouteConstant';
import ProtectedRoute from './ProtectedRoute';

export const routes = createBrowserRouter([
    {
        path: '',
        element: <UserLayout />,
        children: [
            {
                path: '',
                element: (
                    <ProtectedRoute redirectUri={ROUTE_CONSTANTS.home}>
                        <Home />
                    </ProtectedRoute>
                )
            },
            { 
                path: ROUTE_CONSTANTS.login, 
                element: (
                    <ProtectedRoute>
                        <Login />
                    </ProtectedRoute>
                )
            },
            { 
                path: ROUTE_CONSTANTS.signup, 
                element: (
                    <ProtectedRoute>
                        <Signup />
                    </ProtectedRoute>
                )
            },
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
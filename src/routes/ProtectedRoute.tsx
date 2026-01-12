import type React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "./RouteConstant";

interface ProtectedRouteProps {
    children: React.ReactNode;
    redirectUri?: string;
    allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectUri, allowedRoles }) => {
    const { isAuthenticated } = useSelector((state: RootState) => state.user);
    
    if (isAuthenticated) {
        return children;
    }
    else {
        return <Navigate to={ROUTE_CONSTANTS.login} />;
    }
};

export default ProtectedRoute;
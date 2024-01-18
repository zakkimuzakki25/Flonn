/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet } from "react-router-dom";

export const Auth = () => {
  if (window.localStorage.getItem('token')) 
    return <Navigate to="/" />;
  
  return <Outlet />;
};
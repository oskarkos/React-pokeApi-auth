import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths";
import { useAuthContext } from "../../contexts/authContext";

export const PrivateRoutes = () => {
  const { isAuth } = useAuthContext();

  if (!isAuth) {
    return <Navigate to={LOGIN}></Navigate>;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { HOME } from "../../config/routes/paths";
import { useAuthContext } from "../../contexts/authContext";

export const PublicRoutes = () => {
  const { isAuth } = useAuthContext();

  if (isAuth) {
    return <Navigate to={HOME}></Navigate>;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

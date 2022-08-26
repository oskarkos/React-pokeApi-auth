import React from "react";
import { useAuthContext } from "./../contexts/authContext";

import { PaginationItems } from "../components/Pagination/PaginationItems";

export const Home = () => {
  const { logout } = useAuthContext();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold underline">Home</h1>
      <button onClick={handleLogout}>Logout</button>
      <PaginationItems itemsPerPage={20} />
    </div>
  );
};

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthContext } from "./../../contexts/authContext";

export const NavBar = () => {
  const { logout } = useAuthContext();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div className="flex justify-between p-4 w-full sticky top-0 bg-[#ef5350] text-white shadow-md">
      <p className="font-bold">POKEDEX</p>
      <button onClick={handleLogout}>
        Logout <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
      </button>
    </div>
  );
};

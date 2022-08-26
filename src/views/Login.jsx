import React, { useState } from "react";
import { useAuthContext } from "../contexts/authContext";
import PokedexImage from "../assets/pokedex.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Login = () => {
  const { login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const MOCK_EMAIL = "oscar.arcos@57blocks.com";
  const MOCK_PASSWORD = "57Blocks";

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Datos incompletos");
      return;
    }
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      const user = {
        email,
        password,
      };
      login(user);
    } else {
      alert("Usuario o Contraseña incorrecta");
    }
  };

  return (
    <div className="flex w-full bg-gray-200 justify-center items-center h-screen">
      <div className="w-4/5 md:w-1/2 bg-white h-auto p-8 flex flex-col justify-center items-center gap-5 rounded-xl shadow-xl">
        <img src={PokedexImage} alt="pokedex" />
        <h1 className="text-[#3761a8] font-bold text-3xl">Pokedex Login</h1>
        <form
          onSubmit={handlesubmit}
          className="flex flex-col w-full justify-center items-center gap-5"
        >
          <div className="flex border-2 items-center w-4/5 border-[#3761a8] rounded-md px-4 py-2">
            <FontAwesomeIcon
              className="text-[#3761a8]"
              icon="fa-solid fa-user"
            />
            <input
              className="outline-none ml-4 w-full"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center w-4/5 border-2 rounded-md border-[#3761a8] px-4 py-2">
            <FontAwesomeIcon
              className="text-[#3761a8]"
              icon="fa-solid fa-lock"
            />
            <input
              className="outline-none ml-4 w-full"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-4/5 bg-[#3761a8] text-white border-2 border-[#3761a8] p-3 rounded-md font-bold"
            type="submit"
          >
            Login <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />
          </button>
        </form>
      </div>
    </div>
  );
};

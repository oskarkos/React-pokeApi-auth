import React, { useState } from "react";
import { useAuthContext } from "../contexts/authContext";

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
    <div>
      <h1>Login</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

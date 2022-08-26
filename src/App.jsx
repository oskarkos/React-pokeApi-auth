import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DETAILS, HOME, LOGIN } from "./config/routes/paths";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Details } from "./views/Details";
import { AuthContextProvider } from "./contexts/authContext";
import { PublicRoutes } from "./components/routes/PublicRoutes";
import { PrivateRoutes } from "./components/routes/PrivateRoutes";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
            <Route index path={LOGIN} element={<Login />} />
          </Route>
          <Route path={HOME} element={<PrivateRoutes />}>
            <Route index element={<Home />} />
            <Route path={DETAILS} element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;

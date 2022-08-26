import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from "react";

const MY_AUTH_APP = "MY_AUTH_APP";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(
    window.localStorage.getItem(MY_AUTH_APP)
  );

  const login = useCallback(function (user) {
    window.localStorage.setItem(MY_AUTH_APP, JSON.stringify(user));
    setIsAuth(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    setIsAuth(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuth,
    }),
    [login, logout, isAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}

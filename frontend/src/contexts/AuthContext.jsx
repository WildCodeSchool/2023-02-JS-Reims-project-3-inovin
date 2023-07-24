import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [isAdmin, setIsAdmin] = useState(
    parseInt(sessionStorage.getItem("isAdmin"), 10)
  );

  const tokenManage = useMemo(() => {
    return { token, setToken, isAdmin, setIsAdmin };
  }, [token]);

  return (
    <AuthContext.Provider value={tokenManage}>{children}</AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useAuth = () => useContext(AuthContext);

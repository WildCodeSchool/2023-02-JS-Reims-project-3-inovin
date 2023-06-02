import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

// export const AuthContextProvider = memo(function AuthContextProvider({
//   children,
// }) {
//   const [token, setToken] = useState();

//   return (
//     <AuthContext.Provider value={{ token, setToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// });

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState();

  const tokenManage = useMemo(() => {
    return { token, setToken };
  }, [token]);

  return (
    <AuthContext.Provider value={tokenManage}>{children}</AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

/* const SomeComponent = memo(function SomeComponent(props) {
  // ...
}); */

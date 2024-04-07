// AuthProvider.js
import React, {useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';


const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
    console.log(isLoggedIn);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 
// const useAuth = () => {
//   return useContext(AuthContext);
// };
// export {useAuth};
// useAuth.js
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useAuth = async () => {
  return await useContext(AuthContext);
};
console.log(useAuth);
export default useAuth;

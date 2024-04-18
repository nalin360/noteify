// App.jsx
import React, { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import LoginForm from './pages/Login/LoginForm';
// import AuthContext from './context/AuthContext';
import Dashboard from './pages/DashBoard/Dashboard';
import SignupForm from './pages/Login/SignupForm';
import NotesBoard from './components/Dashboards/NotesBoard';

function App() {
  // const { isLoggedIn } = useContext(AuthContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate('/user');
  //   } 
  // }, [isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user" element={<Dashboard />} >
          <Route path="dashboard" element={<NotesBoard />} />
          <Route path="analytics" element={<div>Analytics</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

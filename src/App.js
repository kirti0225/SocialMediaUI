import React from 'react'
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element= { <Home />} />
        <Route  path="/login" element= {<Login />} />
        <Route  path="/register" element= {<Register />} />
        <Route  path="/profile" element= {<Profile/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
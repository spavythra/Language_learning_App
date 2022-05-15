import './App.css';
import {useState} from 'react';
import User from './User.js';
import Admin from './Admin.js';
import Home from './Home.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(){

  return(
   
    <Router>
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/admin"> Admin </Link>
      <Link to="/user"> User </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
     
    </Routes>
  </Router>
 
    
  )
  
}


export default App;

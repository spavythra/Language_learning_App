import './App.css';
import {useState} from 'react';
import User from './User.js';
import Admin from './Admin.js';
import Home from './Home.js';
import AddWord from "./AddWord.js";
import DeleteWord from "./DeleteWord.js";
import UpdateWord from "./UpdateWord.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(){

  return(<>
    <div className='header'>Learning Finnish</div>
   
    <Router>
    <nav>
      <button><Link to="/">Home </Link></button>
      {/* <Link to="/admin"> Admin </Link>
      <Link to="/user"> User </Link> */}
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
      <Route path="/admin/add" element={<AddWord />} />
      <Route path="/admin/delete" element={<DeleteWord />} />
      <Route path="/admin/update" element={<UpdateWord />} />
     
    </Routes>
  </Router>
 
    
  </> )
  
}


export default App;

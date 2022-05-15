import './App.css';
import {useState} from 'react';
import User from './User.js';
import Admin from './Admin.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {

  return(
  <div>
    <div className='header'>Learning Finnish</div>
    <nav>
    <button >User</button>
    <button >Admin</button>
    </nav>
    {/* <div>
      {view === "User" && <User/>}
      {view === "Admin" && <Admin/>}
    </div> */}

	</div>
    
  )
  
}

export default Home
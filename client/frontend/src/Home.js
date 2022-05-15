import './App.css';
import {useState} from 'react';
import User from './User.js';
import Admin from './Admin.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";

function Home() {

  return(
  <div>
    {/* <div className='header'>Learning Finnish</div> */}
    <nav>
    <button ><Link to="/admin"> Admin </Link>
      </button>
    <button ><Link to="/user"> User </Link></button>
    </nav>
    {/* <div>
      {view === "User" && <User/>}
      {view === "Admin" && <Admin/>}
    </div> */}

	</div>
    
  )
  
}

export default Home
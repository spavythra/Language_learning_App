import './App.css';
import {useState} from 'react';
import User from './User.js';
import Admin from './Admin.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { margin } from '@mui/system';
import teacher from './img/teacher.webp';
import student from './img/student.webp'


function Home() {

  return(
  <div>
    {/* <Container maxWidth="sm"> */}
    <h2 className='home'> Choose Type </h2><nav>
    <div className='home_items'>
    
    <div className="container">
      <img src={teacher} alt="Snow"/>
      <button className="btn"><Link to='/admin' style={{text_decoration:'none',color:'white'}}>Admin</Link></button>
    </div> 
    <div className="container">
      <img src={student} alt="Snow"/>
      <button className="btn"><Link to='/user' style={{text_decoration:'none',color:'white'}}>User</Link></button>
    </div> 
    
    </div>
    </nav>
	</div>
    
  )
  
}

export default Home
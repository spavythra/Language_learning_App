import './App.css';
import {useState} from 'react';
import User from './User.js';
import Admin from './Admin.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { margin } from '@mui/system';
import admin from './img/admin.jpg'


function Home() {

  return(
  <div>
    <Container maxWidth="sm">
    <h2> Choose Type </h2>
    <div className='row'>
    <nav>
    <div className='col-md-6'>
<div className='card'>
<img src={admin} className='card-img-top'/>
<div className='card-body'>
<button className='btn btn-outline-primary'>Admin</button>
</div>
</div>
</div>
<div className='col-md-6'>
<div className='card'>
<img/>
<div className='card-body'>
<button className='btn btn-outline-primary'>Admin</button>
</div>
</div>
</div>
      
      {/* <div className='col-md-4' style={{padding: "15px", border: "1px solid #f2f2f2"}}>
    <button className='btn btn-outline-primary'><Link to="/admin"> Admin </Link>
      </button></div><div className='col-md-4' style={{padding: "15px", border: "1px solid #f2f2f2"}}>
    <button className='btn btn-outline-success'><Link to="/user"> User </Link></button></div> */}
    </nav>
    </div>
    {/* <div>
      {view === "User" && <User/>}
      {view === "Admin" && <Admin/>}
    </div> */}
    </Container>
	</div>
    
  )
  
}

export default Home
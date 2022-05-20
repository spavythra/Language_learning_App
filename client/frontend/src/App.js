import './App.css';
import {useState} from 'react';
import User from './User.js';
import Admin from './Admin.js';
import Home from './Home.js';
import AddWord from "./AddWord.js";
import DeleteWord from "./DeleteWord.js";
import UpdateWord from "./UpdateWord.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TotalScore from './TotalScore.js';
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App(){

  return(<>
    {/* <div className='header'>Learning Finnish</div> */}
   
    <Router>
    <Container maxWidth="sm">
    <nav>
    <Typography variant="h2" align='center' mt={10} mb={5} fontWeight="bold">
    Learning Finnish
              </Typography>
      {/* <button><Link to="/">Home </Link></button> */}
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
      <Route path="/score" element={<TotalScore />} />
     
    </Routes>
    </Container>
  </Router>
 
    
  </> )
  
}


export default App;

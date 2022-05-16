import React from 'react'
import { useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Admin() {
  return(<>
    <nav>
      <button><Link to="/admin/add">Add </Link></button>
      <button><Link to="/admin/delete"> Delete </Link></button>
      <button><Link to="/admin/update"> Update </Link></button>
    </nav>
   
  </>)
}

export default Admin

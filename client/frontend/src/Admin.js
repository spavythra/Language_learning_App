import React from 'react'
import { useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Admin() {
  return(<>
    <nav className='adminpage'>
    {/* <a className="btn icon-btn btn-success" href="/admin/add"><span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span>
      Add  
      </a> */}
      
      <Link className="btn icon-btn btn-success" to='/admin/add' >
        <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span>
        Add
        </Link>
      <Link className="btn icon-btn btn-info" to='/admin/update ' >
      <span className="glyphicon btn-glyphicon glyphicon-edit img-circle text-info"></span>
      Update
      </Link>
      <Link className="btn icon-btn btn-danger" to='/admin/delete'>
      <span className="glyphicon btn-glyphicon glyphicon-trash img-circle text-danger"></span>
      Delete
      </Link>
      <Link className="btn icon-btn btn-warning" to="/">
      <span className="glyphicon btn-glyphicon glyphicon-step-backward img-circle text-warning"></span>
      Go Back
      </Link>
      
    </nav>
   
  </>)
}

export default Admin

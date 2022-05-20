import React from 'react'
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

// admin page features and its styles

function Admin() {
  return(<div style={{border:'1px ', width:'600px',justifyContent: 'center',alignItems: 'center', display: 'flex',flexDirection: 'column'}}>
    <nav className='adminpage'>
      
      <Link className="btn icon-btn btn-success" to='/admin/add' style={{marginTop:'5px', width:'50%', padding:'12px', color:'white',fontWeight:'bold',fontSize:'2rem', marginRight:'10px'}} >
        <span className="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span>
        Add word
      </Link>

      <Link className="btn icon-btn btn-info" to='/admin/update ' style={{marginTop:'5px', width:'50%', padding:'12px', color:'white',fontWeight:'bold',fontSize:'2rem',marginRight:'10px'}} >
      <span className="glyphicon btn-glyphicon glyphicon-edit img-circle text-info"></span>
      Update
      </Link>

      <Link className="btn icon-btn btn-danger" to='/admin/delete' style={{marginTop:'5px', width:'50%', padding:'12px', color:'white',fontWeight:'bold',fontSize:'2rem',marginRight:'10px'}}>
      <span className="glyphicon btn-glyphicon glyphicon-trash img-circle text-danger"></span>
      Delete
      </Link>
      
    </nav>
    <div>
    {/*App info for the user*/}

      <Box sx={{ justifyContent: 'justify',alignItems: 'justify', display: 'flex',flexDirection: 'column', border: 1, p:8, background:"#EFEDED", width:'800px', textAlign: 'justify', m: 1, height:'400px', fontSize : '18px' }} mt={2}>
      <p style={{fontWeight : 'bold', fontSize: '20px'}}> Application info - ADMIN page</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <li> Click "Add word"  - To add new a word-pair to the study module </li>
      <li> Click "Update"    - To update the already added word-pair in the study module </li>
      <li> Click "Delete"    - To delete the already added word-pair in the study module </li>
      <p></p>
      <p></p>
      <p></p>
      <li> Click "Go home"      - To go back to the home page </li>

      </Box>
      </div>
    <Link className="btn icon-btn btn-warning" to="/" style={{marginTop:'25px', width:'40%', padding:'12px', color:'white',fontWeight:'bold',fontSize:'2.5rem', marginRight:'5px'}}>
      <span className="glyphicon btn-glyphicon glyphicon-step-backward img-circle text-warning"></span>
      Go home
      </Link>
   
  </div>)
}

export default Admin

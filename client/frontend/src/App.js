import './App.css';
import User from './User.js';
import Admin from './Admin.js';
import Home from './Home.js';
import AddWord from "./AddWord.js";
import DeleteWord from "./DeleteWord.js";
import UpdateWord from "./UpdateWord.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TotalScore from './TotalScore.js';
import { Container, Typography } from "@mui/material";

function App(){

  return(<>
   {/* routing between pages */}
   {/* <div class="box-area">
    <header > <div className='wrapper'><div className='logo'><a>EasyLearn Suomi</a></div> </div></header></div> */}
    {/* <Typography variant="h2" align='center' mt={5} mb={5} bgcolor={'black'} color={'white'} width={'100%'} height={'60px'} fontWeight="bold">
    EasyLearn Suomi
    </Typography> */}
    <header className='appsection'><a style={{textDecoration:'none', color:'white'}} href='/'>EasyLearn Suomi</a></header>
    <Router>
    
    <Container maxWidth="sm">
    <nav>
    
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

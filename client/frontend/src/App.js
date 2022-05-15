import './App.css';
import {useState} from 'react';
import User from './User.js';

function App(){

  const [view, setView] = useState('Home')

  return(
  <div>
    <div className='header'>Learning Finnish</div>
    <nav>
    <button onClick={setView('User')}>User</button>
    <button onClick={setView('Admin')}>Admin</button>
    </nav>
    

	</div>
    
  )
  
}


export default App;

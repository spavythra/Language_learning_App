import './App.css';
import {useState} from 'react'

function App() {
  const [message, setMessage] = useState("")

const main = async () => {
  let hr = await fetch("http://localhost:8080/locations")
  let js = await hr.json()
  console.log(js)
}


  return (
    <div className="App">
      <button onClick={() => {
        fetch("http://localhost:8080/words")
        .then(res => res.json())
        .then(console.log("words"))
      }}>connect </button>
      
      <h1>{message}</h1>
    </div>
  );
}

export default App;

import React from 'react'
import { useState } from "react";
import Axios from "axios";
import { Button, Typography } from "@mui/material";
import Home from "./Home.js"

function AddWord() {
  const [Eng_word, setEng_word] = useState('')
  const [Fin_word, setFin_word] = useState('')

  const [wordList, setWordList] = useState([]);

  const addWord = () => {
    Axios.post("/admin/add", {
      Eng_word: Eng_word,
      Fin_word: Fin_word,
    }).then(() => {
      setWordList([
        ...wordList,
        {
          Eng_word: Eng_word,
          Fin_word: Fin_word,
        },
      ]);
    });
  };

  return (
    <div className='addword'>
      <div className="information">
        <h3 style={{marginBottom:'40px'}}>Add the new words here!!!</h3>
      <label>English word</label>
      <input type="text" style={{marginBottom:'40px'}} placeholder='Type a english word here..' onChange={(event) => {
            setEng_word(event.target.value);
          }}/>
      <label>Finnish word</label>
      <input type="text" style={{marginBottom:'40px'}} placeholder='Type a finnish word here..' onChange={(event) => {
            setFin_word(event.target.value);
          }}/>
      <div style={{display: "flex", flexDirection:'row',width:'50%', justifyContent:'space-between'}}>
            <Button
              onClick={addWord}
              variant="contained" style={{marginRight:'10px', display: "flex", flexDirection:'row', fontSize:'1.5rem', width:'50%',borderRadius:'25px', fontWeight:'bold'}} >
              <span className="glyphicon btn-del-glyphicon glyphicon-plus img-fluid text-white"></span>
              Add
              </Button>

              <Button
              onClick={()=> <Home/>}
              variant="contained" style={{margin: '10 auto', display: "flex", flexDirection:'row', fontSize:'1.5rem', width:'50%', borderRadius:'25px', fontWeight:'bold'}} >
              <span className="glyphicon btn-del-glyphicon glyphicon-home img-fluid text-white"></span>
              Home
              </Button>
      </div>
      </div>
      
      
    </div>
  )
}

export default AddWord

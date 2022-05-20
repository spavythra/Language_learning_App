import React from 'react'
import { useState } from "react";
import Axios from "axios";
import { Button, Typography } from "@mui/material";

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
        <h3>Enter the words which you want to add</h3>
      <label>English word</label>
      <input type="text" placeholder='Type your english word here..' onChange={(event) => {
            setEng_word(event.target.value);
          }}/>
      <label>Finnish word</label>
      <input type="text" placeholder='Type your finnish word here..' onChange={(event) => {
            setFin_word(event.target.value);
          }}/>

      <Button
        onClick={addWord}
        variant="contained" style={{margin: '10 auto', display: "flex", flexDirection:'row', fontSize:'1.5rem', width:'30%'}} >
        <span className="glyphicon btn-del-glyphicon glyphicon-trash img-fluid text-white"></span>
        Add
        </Button>

      <a className="btn icon-btn btn-success" style={{marginTop:"20px", width:"20%"}} href="/">
      <span className="glyphicon btn-glyphicon glyphicon-step-backward img-circle text-success"></span>
      Go Home
      </a>
      </div>
      
      
    </div>
  )
}

export default AddWord

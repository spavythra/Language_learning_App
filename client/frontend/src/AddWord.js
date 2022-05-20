import React from 'react'
import { useState } from "react";
import Axios from "axios";
import { Button, Typography } from "@mui/material";
import Home from "./Home.js"
import { Box } from "@mui/system";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function AddWord() {
  const [Eng_word, setEng_word] = useState('')
  const [Fin_word, setFin_word] = useState('')

  const [wordList, setWordList] = useState([]);
  const [msg, setMsg] = useState(false)

  const addWord = () => {
    if((Eng_word && Fin_word ) != ""){
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
      setMsg("Your new word-pair is added successfully!")
    }
    else{
      setMsg("Error! Missing input field.")
    }
  };

  return (
    <div className='addword'>
      <Box sx={{ justifyContent: 'center',alignItems: 'center', display: 'flex',flexDirection: 'column' , border: 1,p:8, background:"#EFEDED"  }} mt={8}>
      <div className="information">
        <Box sx={{justifyContent: 'center',alignItems: 'center', display: 'flex'}}>
        <h2 style={{marginBottom:'60px', fontWeight:'bold', color:'green'}}>Add new words to module</h2></Box>
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
              <Link className="btn icon-btn " style={{marginTop:'15px', width:'50%', padding:'12px', backgroundColor:'#1976d2', color:'white',fontWeight:'bold',fontSize:'1.5rem'}} to="/">
              <span className="glyphicon btn-del-glyphicon glyphicon-home img-fluid text-white"></span>
              HOME
              </Link>

           
      </div>
      </div>
      {msg && 
          <div>
            <h4 style={{color:"red"}}>{ msg }</h4>
          </div>
        }
      </Box>
      
    </div>
  )
}

export default AddWord

import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";
import { Button, Typography } from "@mui/material";

function UpdateWord() {
    const [wordList, setWordList] = useState([]);

    const [newWord, setNewWord] = useState('')

    useEffect(()=>{
        async function getWords(){
          let hr = await fetch("/words")
          let data = await hr.json()
          setWordList(data);
        }
        getWords();
      }, []);

    const updateFinWord = (id) => {
        Axios.put("/admin/update", { Fin_word: newWord, id: id }).then(
      (response) => {
        setWordList(
            wordList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  Eng_word: val.Eng_word,
                  Fin_word: newWord,
                }
              : val;
          })
        );
      }
    );
    }
    
        return (
        <div className='updatewords' >
            <div>
            { (() => {
                return(<div>
                    {wordList.map((val,i) => {
                        return(<div key={i} className='updateword'>
                            <div >
                <h4 >English word: {val.Eng_word}</h4>
                <h4 >Finnish word: {val.Fin_word}</h4>
           
                <input
                  type="text"
                  placeholder="update finnish word..."
                  onChange={(event) => {
                    setNewWord(event.target.value);
                  }}
                  style={{width:'200px'}}
                />
              

                <Button
                  onClick={() => {
                    updateFinWord(val.id);
                  }}
                  variant="contained" style={{margin: '0 auto', display: "flex", flexDirection:'row', fontSize:'1.5rem', marginTop:'20px', marginBottom:'20px'}} >
                  <span className="glyphicon btn-del-glyphicon glyphicon-edit img-fluid text-white"></span>
                  Update
                </Button>
                
                </div>
                        </div>)
                    
                 })
        }
                </div>)
           
    })()}
    </div>
    <a className="btn icon-btn btn-success" href="/">
      <span className="glyphicon btn-glyphicon glyphicon-step-backward img-circle text-success"></span>
      Go Home
      </a>
        </div>
          )
   


    
}

export default UpdateWord
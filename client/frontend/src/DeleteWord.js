import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import {DeleteIcon} from '@mui/icons-material'

function DeleteWord() {
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
    
    const deleteEmployee = (id) => {
        Axios.delete(`/admin/delete/${id}`).then((response) => {
            setWordList(
                wordList.filter((val) => {
              return val.id != id;
            })
          );
        });
      };



    
        return (
        <div className='deletewords'>
            <div>
            { (() => {
                return(<div >
                    {wordList.map((val,i) => {
                        return(<div key={i} className='deleteword'>
                            <div >
                <h3 >English word: {val.Eng_word}</h3>
                <h3 >Finnish word: {val.Fin_word}</h3>
                </div>
                
                <Button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                  variant="contained" style={{margin: '0 auto', display: "flex", flexDirection:'row', fontSize:'1.5rem'}} >
                  <span className="glyphicon btn-del-glyphicon glyphicon-trash img-fluid text-white"></span>
                  Delete
                </Button>
                
                
                
                        </div>)
                    
                 })
        }
                </div>)
           
    })()}
    </div>
             
        </div>
          )
}

export default DeleteWord
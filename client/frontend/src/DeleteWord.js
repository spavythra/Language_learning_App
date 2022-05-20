import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function DeleteWord() {
    const [wordList, setWordList] = useState([]);

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
              return val.id !== id;
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
                <h4 >English word: {val.Eng_word}</h4>
                <h4 >Finnish word: {val.Fin_word}</h4>
                </div>
                
                <Button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                  variant="contained" style={{margin: '0 auto', display: "flex", flexDirection:'row', fontSize:'1.5rem', marginBottom:'15px',marginTop:'15px'}} >
                  <span className="glyphicon btn-del-glyphicon glyphicon-trash img-fluid text-white"></span>
                  Delete
                </Button>

                </div>)
                    
                })
        }
        </div>)
           
    }
    )()}
    </div>
    <a className="btn icon-btn btn-success" href="/">
      <span className="glyphicon btn-glyphicon glyphicon-step-backward img-circle text-success"></span>
      Go Home
      </a>
        </div>
      )
}

export default DeleteWord
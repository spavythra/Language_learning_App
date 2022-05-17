import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";

function DeleteWord() {
    const [wordList, setWordList] = useState([]);

    const [newWord, setNewWord] = useState('')

    // const getWords = () => {
    //     Axios.get("/words").then((response) => {
    //         setWordList(response.data);
    //     });
    //   };

    // getWords();

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
        <div>delete
            {/* <div>
            { (() => {
                return(<div>
                    {wordList.map((val,i) => {
                        return(<div key={i}>
                            <div >
                <h3 >English word: {val.Eng_word}</h3>
                <h3 >Finnish word: {val.Fin_word}</h3>
           
                
                
                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
                </div>
                        </div>)
                    
                 })
        }
                </div>)
           
    })()}
    </div> */}
             
        </div>
          )
}

export default DeleteWord
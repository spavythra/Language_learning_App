import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";

function UpdateWord() {
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
        <div>
            <div>
            { (() => {
                return(<div>
                    {wordList.map((val,i) => {
                        return(<div key={i}>
                            <div >
                <h3 >English word: {val.Eng_word}</h3>
                <h3 >Finnish word: {val.Fin_word}</h3>
           
                <input
                  type="text"
                  placeholder="update finnish word..."
                  onChange={(event) => {
                    setNewWord(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateFinWord(val.id);
                  }}
                > Update
                </button>
                
                </div>
                        </div>)
                    
                 })
        }
                </div>)
           
    })()}
    </div>
             
        </div>
          )
   


    
}

export default UpdateWord
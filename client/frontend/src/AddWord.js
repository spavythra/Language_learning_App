import React from 'react'
import { useState } from "react";
import Axios from "axios";

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
      <button onClick={addWord}>Add</button>
      </div>
    </div>
  )
}

export default AddWord

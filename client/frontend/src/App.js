import './App.css';
import {useState, useEffect} from 'react'

// function App() {
//   let [word, setWord] = useState([])

//   useEffect(()=>{
//     async function getWord(){
//       let hr = await fetch("/words")
//       let data = await hr.json()
//       // console.log(data)
//       setWord(data);
//     }
//     getWord();
//   }, []);

//   //  word.map((animal,i) => {
//   //    return(<p>hello</p>)
//   //  })
//     // return(
//     //   <div><ul>{word.map((item,i)=>{<li key={i}>the item is {item}</li>})}</ul></div>
//     // )

//     return(<div></div>)
 
// }

function App(){
    let [words, setWords] = useState([])

  useEffect(()=>{
    async function getWords(){
      let hr = await fetch("/words")
      let data = await hr.json()
      console.log(data)
      setWords(data);
    }
    getWords();
  }, []);

  const animals = words.map((animal,i)=> <li key={i}>{animal.Eng_word} - {animal.Fin_word}</li>)
 
  return(
  <div>
    <div className='header'>Learn Finnish</div>
    <div className='words'>{animals}</div>
    
  </div>)
  
}


export default App;

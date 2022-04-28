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

  const animals = words.map((animal,i)=> <tr key={i}><td>{animal.Eng_word} </td><td> {animal.Fin_word}</td></tr>)
 
  return(
  <div>
    <div className='header'>Learn Finnish</div>
    <div className='words'><table><tbody><tr>
          <th>English Word</th>
          <th>Finnish word</th>
          
        </tr>{animals}</tbody></table></div>
    
  </div>)
  
}


export default App;

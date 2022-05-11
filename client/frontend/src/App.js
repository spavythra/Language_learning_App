import './App.css';
import {useState, useEffect} from 'react'

function App(){
    let [words, setWords] = useState([])

    let [answer, setAnswer] = useState('')

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
  // function handleChange(event) {
  //   // console.log(event.target.value);
  //   setAnswer(event.target.value);
  //   console.log(answer);
  // }

  // function checkAnswer(text){
  //   if(answer == text){
  //     console.log("correct")
  //   } else {
  //     console.log("wrong")
  //   }
  // }

  // const animals = words.map((animal,i)=> <tr key={i}><td>{animal.Eng_word} </td><td><input onChange={handleChange}></input><button onClick={checkAnswer(animal.Fin_word)}>check</button></td></tr>)

 
  return(
  <div>
    <div className='header'>Learning Finnish</div>
    <div className='words'><table><tbody><tr>
          <th>English Word</th>
          <th>Finnish word</th>
          
        </tr>{animals}</tbody></table></div>
    
  </div>)
  
}


export default App;

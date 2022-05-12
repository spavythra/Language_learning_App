import './App.css';
import {useState, useEffect} from 'react'

function App(){
    let [words, setWords] = useState([])
    const [input, setInput] = useState('')
	const [current, setCurrent] = useState(0)
	
	const [streak, setStreak] = useState(0)
	const [maxStreak, setMaxStreak] = useState(0)

	const [error, setError] = useState(false)

  useEffect(()=>{
    async function getWords(){
      let hr = await fetch("/words")
      let data = await hr.json()
      console.log(data)
      setWords(data);
      setStreak(parseInt(localStorage.getItem('streak')) || 0)
		setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
    }
    getWords();
  }, []);

  const setNextWord = () => {
		// const randomIndex = Math.floor(Math.random() * words.length)
    // console.log(current)

		// setCurrent(current+1)
    // console.log(current)
	}

  // changing condition
const handleChange = (event) => {
setInput(event.target.value)
}

//submit function
const handleSubmit = (event) => {
event.preventDefault()
console.log(input.toLocaleLowerCase())
console.log(words[current].Fin_word.toLocaleLowerCase())
if(input.toLocaleLowerCase() === words[current].Fin_word.toLocaleLowerCase()){
  setStreak(streak + 1)
  setMaxStreak(streak + 1 > maxStreak ? streak + 1 : maxStreak)
  setError(false)

  localStorage.setItem('streak', streak + 1)
  localStorage.setItem('maxStreak', streak + 1 > maxStreak ? streak + 1 : maxStreak)
} else {
  const h = words[current].Eng_word
  const r = words[current].Fin_word
  setError(`Wrong! The correct answer for ${h} is ${r}`)
  setStreak(0)
  localStorage.setItem('streak', 0)
}

setInput('')
setCurrent(current+1)
}

  // const animals = words.map((animal,i)=><tr key={i}><td>{animal.Eng_word} </td><td><form onSubmit={handleSubmit}><input type="text" placeholder="Enter text" value={input} onChange={handleChange}/></form></td></tr>
  // )



  return(
  <div>
    <div className='header'>Learning Finnish</div>
    <p>{streak} / {maxStreak}</p>
    <div>
				{words.map((word,i) => { if(i===current)
        return(<p key={i}>{word.Eng_word}</p>)}
        ) }
          
          
			</div>
        {/* <div className='words'><table><tbody><tr>
          <th>English Word</th>
          <th>Finnish word</th>
          
        </tr>{animals}</tbody></table></div> */}

      <div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						onChange={handleChange}
						value={input}
						/>
				</form>
			</div>
			{error && 
				<div>
					<p>{ error }</p>
				</div>
			}
		</div>
    
  )
  
}


export default App;

import './App.css';
import {useState, useEffect} from 'react'

function User(){
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
		setCurrent(current+1)
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

const selectImage = () => {

}



  return(
  <div>
    
    <div>
    <p>{streak} / {maxStreak}</p>

    { (() => {
      if(current%2 !== 0){
        return(<div>
          {words.map((word,i) => { if(i===current)
          return(<p key={i}>{word.Eng_word}</p>)}
          ) }
            
            
        
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              value={input}
              />
          </form>
        
        {error && 
          <div>
            <p>{ error }</p>
          </div>
        }</div>)
      } else {
        return(<div><button onClick={setNextWord}>next</button></div>)
      }
    })()}
    
    
      </div>
	</div>
    
  )
  
}


export default User;

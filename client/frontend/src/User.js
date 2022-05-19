import './App.css';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

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
    //   setStreak(parseInt(localStorage.getItem('streak')) || 0)
		// setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
    }
    getWords();
  }, []);

  const NextWord = () => {if(current< (words.length-1)){
    setCurrent(current+1)
    
  } else {
    <Link to="/score">  </Link>
    return(alert("done"))
    // console.log("Limit exceeded")
  }
		
	}

  const BackWord = () => {if(current> 0){
    setCurrent(current-1)
  } else {
    <p>Limit exceeded</p>
  }
		
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
  // setMaxStreak(streak + 1 > maxStreak ? streak + 1 : maxStreak)
  setError(false)
  setMaxStreak(current+1)

  localStorage.setItem('streak', streak + 1)
  localStorage.setItem('maxStreak', streak + 1 > maxStreak ? streak + 1 : maxStreak)
} else {
  const h = words[current].Eng_word
  const r = words[current].Fin_word
  setError(`Wrong! The correct answer for ${h} is ${r}`)
  setMaxStreak(current+1)
  // setStreak(0)
  // localStorage.setItem('streak', 0)
}

setInput('')
setCurrent(current+1)
}

// console.log(words.length)

const selectImage = () => {

}



  return(
  <div>
    
    <div>
    <p>{streak} / {maxStreak}</p>

    { (() => {
     
        return(<div>
          {words.map((word,i) => { if(i===current)
          return(<p key={i}>{word.Eng_word}</p>)}
          ) }
        
          <form >
            <input
              type="text"
              onChange={handleChange}
              value={input}
              />
          </form>
          <button onClick={handleSubmit}>Check</button>
          <button onClick={NextWord}>Next</button>
        
        {error && 
          <div>
            <p>{ error }</p>
          </div>
        }</div>)
      
    })()}
    
    
      </div>
	</div>
    
  )
  
}


export default User;

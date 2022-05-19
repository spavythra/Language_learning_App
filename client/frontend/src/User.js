import './App.css';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { handleScoreChange } from "../src/redux/actions.js";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

function User(){

  const {
    score,
  } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    navigate("/score");
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
  if(current< (words.length-1)) {
//     event.preventDefault()
// console.log(input.toLocaleLowerCase())
// console.log(words[current].Fin_word.toLocaleLowerCase())
if(input.toLocaleLowerCase() === words[current].Fin_word.toLocaleLowerCase()){
  dispatch(handleScoreChange(score+1));
  // setStreak(streak + 1)
  // setError(false)
  // setMaxStreak(current+1)

  // localStorage.setItem('streak', streak + 1)
  // localStorage.setItem('maxStreak', streak + 1 > maxStreak ? streak + 1 : maxStreak)
} else {
  const h = words[current].Eng_word
  const r = words[current].Fin_word
  setError(`Wrong! The correct answer for ${h} is ${r}`)
  // setMaxStreak(current+1)
  // setStreak(0)
  // localStorage.setItem('streak', 0)
}

setInput('')
setCurrent(current+1)

  } else {
    navigate("/score");
  }

}

  return(
  <Box>
    <Typography variant="h2" mt={15}>Questions {current + 1}</Typography>
    
    <div>
    <Box mt={5}>Score: {score} / {words.length}</Box>
    
    { (() => {
     
        return(<div>
          {words.map((word,i) => { if(i===current)
          return(<Typography variant='h3' mt={5} mb={5} key={i}>Write the correct Finnish word for - {word.Eng_word}</Typography>)}
          ) }
        
          <form >
            <input
              type="text"
              onChange={handleChange}
              value={input}
              placeholder="type"
              style={{border:'none', alignItems: 'center'}}
              />
          </form>
          <button style={{marginTop:"10px", alignItems: 'center', justifyContent:'center',display:'flex'}}  onClick={handleSubmit} type="button" className="btn btn-primary">submit</button>
          {/* <button onClick={NextWord}>Next</button> */}
        
        {error && 
          <div>
            <p>{ error }</p>
          </div>
        }</div>)
      
    })()}
    
    
      </div>
	</Box>
    
  )
  
}


export default User;

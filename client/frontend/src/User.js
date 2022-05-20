import './App.css';
import {useState, useEffect} from 'react'
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

	const [error, setError] = useState(false)

  useEffect(()=>{
    async function getWords(){
      let hr = await fetch("/words")
      let data = await hr.json()
      console.log(data)
      setWords(data);
    }
    getWords();
  }, []);
  
  // changing condition for next question
const handleChange = (event) => {
setInput(event.target.value)
}

//submit function to handle score 
const handleSubmit = (event) => {
  if(input.toLocaleLowerCase() === words[current].Fin_word.toLocaleLowerCase()){
    dispatch(handleScoreChange(score+1));
  
  } else {
    const h = words[current].Eng_word
    const r = words[current].Fin_word
    setError(`Wrong! Correct answer for "${h}" is "${r}"`)
  
  }
  if(current< (words.length-1)) {

    setInput('')
    setCurrent(current+1)

  } else {
    navigate("/score");
  }

}

/*User page formatting*/
  return(
  <Box sx={{ justifyContent: 'center',alignItems: 'center', display: 'flex',flexDirection: 'column' , border: 1,p:10, background:"white" , width:'600px' }} mt={15}>
    <Typography variant="h2" align='center' fontFamily='"Roboto","Helvetica","Arial","sans-serif"' >Questions {current + 1}</Typography>
    
    <div>
    <Box sx={{ justifyContent: 'center',alignItems: 'center', display: 'flex', color: '#E57A5D' ,fontSize:'20px', fontWeight:'bold' }} >Score: {score} / {words.length}</Box>
    
    { (() => {
     
        return(<div><Box sx={{ justifyContent: 'center',alignItems: 'center', display: 'flex',flexDirection: 'column'  }} mt={2}>
          {words.map((word,i) => { if(i===current)
          return(<div><h3 style={{ alignItems: 'center', justifyContent:'center',display:'flex'}}>Write the correct Finnish word below</h3>
          <h2 style={{ alignItems: 'center', justifyContent:'center',display:'flex',fontWeight:'bold',color:'#1976d2', marginBottom:'20px', marginTop:'40px'}}  key={i}> {word.Eng_word}</h2></div>)}
          ) }
        
          <form >
            <input
              type="text"
              onChange={handleChange}
              value={input}
              placeholder="Type your answer here..."
              style={{ alignItems: 'center', justifyContent:'center',display:'flex', width:'250px'}}
              />
          </form>
          
          <Button
                  onClick={handleSubmit}
                  variant="contained" style={{margin: '0 auto', display: "flex", flexDirection:'row', fontSize:'1.5rem', marginBottom:'15px',marginTop:'25px'}} >
                  <span className="glyphicon btn-del-glyphicon glyphicon-ok img-fluid text-white"></span>
                  Submit
                </Button>
        
        {error && 
          <div>
            <h4 style={{color:"red"}}>{ error }</h4>
          </div>
        }</Box></div>)
      
    })()}
    
    
    </div>
	</Box>
    
  )
  
}


export default User;

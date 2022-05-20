import React from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { handleScoreChange } from "../src/redux/actions.js";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

function TotalScore() {
    const disptach = useDispatch();
    const navigate = useNavigate();
    const { score } = useSelector((state) => state);

    
  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    navigate("/");
  };
   
  return (
    
    <Box sx={{ justifyContent: 'center',alignItems: 'center', display: 'flex',flexDirection: 'column' , border: 1, p:15, background:"black"  }} mt={15}>
    <Typography variant="h3" fontWeight="bold" color='#F7CB1C' mb={3}> Lesson Completed! </Typography>
    <Typography variant="h3" fontWeight="bold" color='#F7CB1C' mb={8}> Final Score {score} </Typography>
    <Button variant="contained" onClick={handleBackToSettings} style={{fontSize:'2rem',fontWeight:'bold'}} >
        back to Home!
      </Button>
      </Box>
  )
}

export default TotalScore
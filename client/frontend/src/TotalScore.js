import React from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { handleScoreChange } from "../src/redux/actions.js";
import { Button, Typography } from "@mui/material";

function TotalScore() {
    const disptach = useDispatch();
    const navigate = useNavigate();
    const { score } = useSelector((state) => state);

    
  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    navigate("/");
  };
   
  return (
    <div><h2> Final Score {score} </h2>
    <Button onClick={handleBackToSettings} variant="outlined">
        back to settings!
      </Button></div>
  )
}

export default TotalScore
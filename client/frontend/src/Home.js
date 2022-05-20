import './App.css';
import {useState} from 'react';
import User from './User.js';
import Admin from './Admin.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { margin } from '@mui/system';
import teacher from './img/teacher.webp';
import student from './img/student.webp';
import { styled } from '@mui/system';
import {Box} from '@mui/system';
import {ButtonBase} from '@mui/material';

function Home() {

  const images = [
    {
      url: 'https://free-images.com/lg/3b7b/a4_accounts_admin_administration.jpg',
      title: 'Admin',
      link:'admin',
      width: '40%',
    },
    {
      url: 'https://free-images.com/lg/56c7/students_computer_young_boy.jpg',
      title: 'User',
      link:'user',
      width: '40%',
    },
    
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.4,
    // transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    // transition: theme.transitions.create('opacity'),
  }));

  return(

    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%',alignItems:'center', justifyContent:'space-between' }} mt={20}>
      
      
        <ImageButton
          focusRipple
          style={{
            width: '40%',
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${images[0].url})`}} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            ><Link style={{fontSize:'4rem', color:'white'}} to='/admin'>
              Admin</Link>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>

        <ImageButton
          focusRipple
          style={{
            width: '40%',
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${images[1].url})`}} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            ><Link to='/user' style={{fontSize:'4rem', color:'white'}}>
              User</Link>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
 
        
    </Box>


  // <div>
  //   {/* <Container maxWidth="sm"> */}
  //   <h2 className='home'> Choose Type </h2><nav>
  //   <div className='home_items'>
    
  //   <div className="container">
  //     <img src={teacher} alt="Snow"/>
  //     <button className="btn"><Link to='/admin' style={{text_decoration:'none',color:'white'}}>Admin</Link></button>
  //   </div> 
  //   <div className="container">
  //     <img src={student} alt="Snow"/>
  //     <button className="btn"><Link to='/user' style={{text_decoration:'none',color:'white'}}>User</Link></button>
  //   </div> 
    
  //   </div>
  //   </nav>
	// </div>
    
  )
  
}

export default Home
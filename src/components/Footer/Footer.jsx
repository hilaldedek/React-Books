import { AppBar, Link } from '@mui/material'
import React from 'react';
import "../Footer/Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <div>
         <AppBar position="static" sx={{position:"absolute",bottom:"0px",backgroundColor:"white",fontFamily:"Playfair Display",fontSize:"1rem", color:"black"}}>
            <p>Copyright © {year} All Rights Reserved</p>
            <div>
              <Link href="https://github.com/hilaldedek" target="_blank" style={{color:"black",margin:"3px"}}><GitHubIcon/></Link>
              <Link href="https://www.linkedin.com/in/hil%C3%A2ldedek/" target="_blank" style={{color:"black",margin:"3px"}}><LinkedInIcon/></Link>
              <Link herf="https://www.instagram.com/hilaldedek/" target="_blank" style={{color:"black",margin:"3px"}}><InstagramIcon/></Link>
              <Link href="https://twitter.com/Hilitomilito1" target="_blank" style={{color:"black",margin:"3px"}}><TwitterIcon/></Link>
              <Link href="https://hilaldedek.netlify.app/" target="_blank" style={{color:"black",margin:"3px"}}><AccountCircleIcon/></Link>
              
            </div>
            
  </AppBar>
    </div>
  )
}

export default Footer
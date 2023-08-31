import { AppBar } from '@mui/material'
import React from 'react';
import "../Footer/Footer.css";

export const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <div>
         <AppBar position="static" sx={{position:"absolute",bottom:"0px",backgroundColor:"#3F1D38",fontFamily:"EB Garamond",fontSize:"1.2rem"}}>
            <p>Copyright © {year} All Rights Reserved</p>
  </AppBar>
    </div>
  )
}

export default Footer
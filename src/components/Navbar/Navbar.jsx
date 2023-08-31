import React from 'react';
import "../Navbar/Navbar.css"
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import book from "../../assets/book.png";



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#291525",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));

export const Navbar = () => {
  return (
    <div>
             <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx
      ={{backgroundColor:"#3F1D38"}}>
        <Toolbar>
          <img src={book} alt="book" width={"35rem"} height={"35rem"} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1,fontFamily:"Merriweather"  ,display: { xs: 'none', sm: 'block'}, position:"absolute",marginLeft:"2.8rem", fontSize:"2rem"}}
          >
            BOOKs
          </Typography>
                <Search sx={{position:"absolute",right:"0px"}}>
                <SearchIconWrapper>
                <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar;
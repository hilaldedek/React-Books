import React, {useState } from 'react';
import "../Navbar/Navbar.css"
import { styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import BookCard from '../Card/Card';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "black",
    '&:hover': {
      backgroundColor: "#141111b6",
    },
    marginLeft: 0,
    width: '75%',
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
  const [input,setInput]=useState("");
  const [result,setResult]=useState("");

  console.log(input);
  const handleSubmit=(e)=>{
    if(e.key==='Enter'){
      e.preventDefault();
    const getBook=async function(){
      const url=`https://www.googleapis.com/books/v1/volumes?q=${input}`;
      const res=await fetch(url);
      const data=await res.json();
      setResult(Object.values(data)[2]);
      console.log(result);
      console.log(data);
      console.log("clicked enter");
    }
    getBook();
    }
  }
  return (
    <div>
             <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx
      ={{backgroundColor:"white"}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1,fontFamily:"Playfair Display"  ,display: { xs: 'none', sm: 'block'}, position:"absolute",marginLeft:"0.2rem", fontSize:"2.7rem",color:"black"}}
          >
            BOOKs
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1,fontFamily:"Playfair Display"  ,display: { xs: 'none', sm: 'block'}, position:"absolute",marginLeft:"15rem", fontSize:"1rem",color:"black"}}
          >
            Home
          </Typography>
                <Search sx={{position:"absolute",right:"0px"}} value={input} onChange={(e)=>setInput(e.target.value)} className='search'>
                <Button variant="text" className='searchButton' style={{color:"white"}} ><SearchIconWrapper>
                  <SearchIcon/>
                </SearchIconWrapper>
                </Button>
                  <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }} onKeyPress={handleSubmit}/>
            </Search>
        </Toolbar>
      </AppBar>
    </Box>
    {
                    result?.length>0 && (
                    <BookCard item={result}/>
                    )

                }
    </div>
  )
}

export default Navbar;
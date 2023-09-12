import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import book from "../../assets/book.png";
import "../Card/Card.css"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const BookCard = ({item}) => {
    console.log("card a geldim");
    console.log(item);
    const [value, setValue] = useState(0);
    if (!Array.isArray(item)) {
      item = []; 
    }
    
    console.log(item);
            return (
              <div className='cardDiv'>
                
                {item?.map((item,index)=>{
                  console.log(`geldim index ${index}`);
                  
                  return(
                    
                    <Card sx={{ maxWidth: 300,margin:"2rem"}} className='card' key={index}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item?.volumeInfo?.imageLinks?.thumbnail || book}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.volumeInfo?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.volumeInfo?.description}
                    </Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>

                  )
                })}

              </div>
          );
}

export default BookCard
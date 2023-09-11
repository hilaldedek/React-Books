import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const BookCard = ({...item}) => {
    console.log("card a geldim");
    console.log(item);
    if (!Array.isArray(item)) {
      item = []; 
    }
          return (
              <div>
                {item?.map((item,index)=>{
                  return(
                    <Card sx={{ maxWidth: 345 }} key={index}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.volumeInfo?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      title
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

                  )
                })}

              </div>
          );
}

export default BookCard
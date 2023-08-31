import React from 'react'
import "../Main/Main.css";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import book1 from "../../assets/book1.jpeg";
import book2 from "../../assets/book2.jpeg";
import book3 from "../../assets/book3.jpeg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#070404e0',
  color: '#ffffff'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: "200px"
}
const slideImages = [
  {
    url:'https://i.gifer.com/origin/2c/2c4451779c8527cec5d009060d123526_w200.webp',
    caption: '“There is no friend as loyal as a book.”',
    person:'Ernest Hemingway'
  },
  {
    url: 'https://i.gifer.com/origin/2c/2c4451779c8527cec5d009060d123526_w200.webp',
    caption: 'Slide 2',
    person:'Ernest Hemingway'
  },
  {
    url: 'https://i.gifer.com/origin/2c/2c4451779c8527cec5d009060d123526_w200.webp',
    caption: 'Slide 3',
    person:'Ernest Hemingway'
  },
];
export const Main = () => {
    
  return (
    <div >
      <div className="slide-container">
        <Slide>
         {slideImages.map((img, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${img.url})` }}><span style={spanStyle}>{img.caption}</span>
              <span style={spanStyle}>{img.person}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div>

  )
}

export default Main
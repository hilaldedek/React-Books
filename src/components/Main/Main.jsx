import React from 'react'
import "../Main/Main.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import 'animate.css';



const spanStyle = {
  padding: '5px',
  background: '#07040457',
  color: '#ffffff'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: "350px"
}
const slideImages = [
  {
    url:'https://i.gifer.com/origin/8a/8a39cf9d423e06c17971bf3cbf288b0d_w200.webp',
    caption: '“There is no friend as loyal as a book.”',
    person:'~Ernest Hemingway'
  },
  {
    url: 'https://i.gifer.com/origin/8a/8a39cf9d423e06c17971bf3cbf288b0d_w200.webp',
    caption: '“A room without books is like a body without a soul.”',
    person:'~Marcus Tullius Cicero'
  },
  {
    url: 'https://i.gifer.com/origin/8a/8a39cf9d423e06c17971bf3cbf288b0d_w200.webp',
    caption: '“Libraries are the thin red line between civilisation and barbarism.”',
    person:'~Neil Gaiman'
  },
];
export const Main = ({item}) => {
  console.log(item);
  return (
    <div >
      <div className="slide-container">
        <Slide>
         {slideImages.map((img, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${img.url})` }}className='img'><span style={spanStyle}>{img.caption}</span>
              <span style={spanStyle} >{img.person}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      
    </div>

  )
}

export default Main
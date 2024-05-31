import './Background.css'
import Navbar from './Navbar'
import {useState} from 'react'
import img10 from '../img/img10.jpg'
import img11 from '../img/img11.jpg'
import img12 from '../img/img12.jpg'
import { PiCaretLeftBold,PiCaretRightBold } from "react-icons/pi";



const Background = () => {
  const [index, setIndex] = useState(2)
   
  const data = [
    {img:img10},
    {img:img11},
    {img: img12}
  ]

return <section >
       <div className='background'
       style={ {backgroundImage: `url(${data[index].img})`}} >
        <Navbar />
          <h1>BORN TO LEGEND</h1>
          <h2>PORSCHE 911</h2>    
        
        
          <button className='right' onClick={() => {
          index > 0 && setIndex(index - 1)
        }} >
        <PiCaretRightBold className='arrow' />
        </button>
      
        <button className='left'onClick={() => {
          index < data.length - 1 && setIndex(index + 1)
        }} >
        <PiCaretLeftBold className='arrow'/>
        </button>
    
      </div>

      </section>  

  }
  export default Background;
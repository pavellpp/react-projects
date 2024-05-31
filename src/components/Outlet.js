import './Outlet.css'
import {useState, useEffect} from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.webp'
import img4 from '../img/img4.webp'
import img6 from '../img/img6.jpg'
import img7 from '../img/img7.jpeg'


const Outlet = () => {
  const [show, setShow] = useState(false)
  const [year, setYear] = useState(false)
  const [disc, setDisc] = useState(false)
  const [up, setUp] = useState(false)
  const [last, setLast] = useState(false)
  const [carrera, setCarrera] = useState(false)

  const array = [
    'Zakladatel Ferdinand Porsche, rodák z Vratislavic nad Nisou.',
    'Porsche 911 jako néstupce Porsche 356.',
    'Akcelerace z 0 na 100km/hod za 2,7sec.'
  ];
  
    
    const [text, setText] = useState(0);
    
    useEffect(() => {
      setText(Math.floor(Math.random() * array.length));
    }, [array.length]);
  
          
    
    return <section>     
    <h3>Události prvních deseti let</h3>
        <h3 className='text'>{array[text]}</h3>

        <div className='btn'>
      <button onClick={ () => setShow(!show)} >1963 +</button>
      <button onClick={ () => setYear(!year)} >1964 +</button>
      <button onClick={ () => setDisc(!disc)} >1967 +</button>
      <button onClick={ () => setUp(!up)} >1968 +</button>
      <button onClick={ () => setLast(!last)} >1969 +</button>
      <button onClick={ () => setCarrera(!carrera)}>1972 +</button>
      </div>

    
      { show && <p className='box'>1963 -Na podzim představení prvního Porsche 911 na autosalonu ve Frankfurtu nad Mohanem
      <img src={img1} alt="" height="100px" weidth="auto"/> </p>}
  
      {year && <p className='box'>1964 -Počátek seriové výroby 
      <img src={img2} alt="" /> </p>}

      {disc && <p className='box'>1967 -Vlastní vyroba disku z jednoho kusu <img src={img3}
      alt="" /></p>}

      {up && <p className='box'>1968 -Zvýšení rozvoru na 2268mm <img src={img4} alt="" /></p>}

      {last && <p className='box'>1969 -Zvýšen zdvihový objem na 2195cm3 <img src={img6} alt="" /></p>}

      {carrera && <p className='box'>1972 -Představení Carrery RS 2,7 <img src={img7} alt="" /></p>}
      
  
    
    </section>
  
}

export default Outlet

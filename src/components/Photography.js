import './Photography.css'
import data from './data'

const Photography = () => {
  console.log(data)
  return <div className='photo'>
    
    {
       data.map((item) => {
        const {id, title, text, img } = item
        
        return <div key={id} className='border'>
          <img src={img} alt="" />
          <h4>{title}</h4>
          <p>{text}</p>
          </div>
})
}
        
    </div>
  
}

export default Photography
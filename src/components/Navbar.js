import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  return <nav className='navbar'>
    <NavLink to='/' className={({isActive}) => isActive? "activeLink": "nonactiveLink"}>Home</NavLink>
    <NavLink to='/Porsche' className={({isActive}) => isActive? "activeLink": "nonactiveLink"}>O Porsche</NavLink>
    <NavLink to= '/Foto' className={({isActive}) => isActive? "activeLink": "nonactiveLink"}>Fotogalerie</NavLink>
    <NavLink to='/Code' className={({isActive}) => isActive? "activeLink": "nonactiveLink"}>Code</NavLink>
    
    
    </nav>
}

export default Navbar

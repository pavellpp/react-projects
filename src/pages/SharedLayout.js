import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SharedLayout = () => {
  return <header>
      <nav>
        <Navbar />
        <Outlet />
        <Footer />
      </nav>
    </header>
  
}

export default SharedLayout

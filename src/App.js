import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Code from './pages/Code'
import Porsche from './pages/Porsche'
import Foto from './pages/Foto'
import SharedLayout from './pages/SharedLayout'


const App = () => {
  return <BrowserRouter>
         <Routes>
              <Route index  element={ < Home />} />
              <Route path='/' element= {<SharedLayout />} >
              <Route path='/porsche' element= {<Porsche />} />
              <Route path='/foto' element= {<Foto />} />
              <Route path='/code' element= {<Code />} />
              </Route>
          </Routes>
         </BrowserRouter>
      
}

export default App

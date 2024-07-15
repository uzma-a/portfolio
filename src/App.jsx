import './App.css'
import Navbar from './Components/Navbar'
import Portfolio from './Pages/Portfolio'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PortfolioCategory from './Pages/PortfolioCategory'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Portfolio/>} />
    <Route path='/about' element={<PortfolioCategory/>} />
    <Route path='/github' element={<PortfolioCategory/>} />
    {/* <Route path='/contactme' element={<PortfolioCategory/>} /> */}
    <Route path='/github' element={<PortfolioCategory/>} />

    <Route path='/contact' element={<LoginSignup/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App

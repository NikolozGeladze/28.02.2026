import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import HowDoesItWork from './components/HowDoesItWork'
import Services from './components/Services'

function App() {

  return (
    <>
      <div className="py-20 px-11.25 bg-[#F5F8FF] w-full h-full">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/how-does-it-work' element={<HowDoesItWork />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </div>
    </>
  )
}

export default App

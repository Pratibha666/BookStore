import React from 'react'
import Home from './home/Home'
import {Route,Routes} from 'react-router-dom'
import Courses from './courses/Courses'
import Contact from './contact/Contact'
import About from './about/About'
import Login from './login/Login'
const App = () => {
  return (
    <>
    <div >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </div>
    </>
  )
}

export default App
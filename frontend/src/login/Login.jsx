import React from 'react'
import Navbar from '../components/Navbar'
import Logins from '../components/Logins'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
        <Logins />
    </div>
    <Footer />
    </>
  )
}

export default Login
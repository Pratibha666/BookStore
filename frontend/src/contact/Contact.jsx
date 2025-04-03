import React from 'react'
import Navbar from '../components/Navbar'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
        <Contacts />
    </div>
    <Footer />
    </>
  )
}

export default Contact
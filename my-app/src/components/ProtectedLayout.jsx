import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const ProtectedLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default ProtectedLayout

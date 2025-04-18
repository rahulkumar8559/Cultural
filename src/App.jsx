import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/navbar'
import Home from './components/Pages/Home'

const App = () => {
  return (
    <div className='flex flex-col relative items-center'>

      <Navbar/>
      <hr />
      <Home/>
      
      <Footer/>





    </div>
  )
}

export default App
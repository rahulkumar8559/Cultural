import React from 'react'
import Explore from '../Explore'
import Header from '../Header'

const Home = () => {
  return (
    <div className='flex flex-col mb-[5px] w-[100%] items-center'>

        <Header/>
        <Explore/>
    </div>
  )
}

export default Home
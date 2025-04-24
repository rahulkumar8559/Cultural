import React from 'react';
import { CiLocationOn } from "react-icons/ci";

const Header = () => {

  const randomnum = Math.floor(Math.random() * 7) + 1;




  return (
    <div className='w-[100%] h-auto p-[10px] mt-[190px] '>
      <div className='h-full w-[full] relative bg-contain  ' style={{ backgroundImage: `url('/images/pic${randomnum}.webp')` }}>
        {/* <div>
          <img src={`/images/pic${randomnum}.web`} alt="wded" className='h-[550px] w-[100%]  ' />
        </div> */}
        <div className=' left-[40px] h-auto mb-[10px] top-[30px] w-[100%] sm:w-[60%] backdrop-blur-xs'>

          <div className='p-[30px] text-white'>
            <h1 className='text-[50px] font-[700] mb-[30px]'>Welcome to the Cultural Atlas</h1>
            <p className='text-[17px] font-[500]'>The Cultural Atlas is an educational resource providing comprehensive information on the cultural background of Australia’s migrant populations. The aim is to improve social cohesion and promote inclusion in an increasingly culturally diverse society.</p>
            <button className='mt-[40px] text-[20px] font-[600] rounded-tl-[20px] hover:rounded-none hover:bg-[#174643] transition-all duration-300 ease rounded-br-[20px] px-[35px] py-[15px] bg-[#157e77]'> LEARN MORE</button>
          </div>
        </div>
        <div className=' items-center gap-[5px] flex bottom-[30px] text-white absolute right-[400px]'>

          <div className='text-black bg-white text-[25px]'><CiLocationOn /> </div>
          <span className='text-[20px] font-[500]'>Country</span>


        </div>


      </div>


    </div>
  )
}

export default Header
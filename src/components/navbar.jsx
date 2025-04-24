import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";


const Navbar = () => {

    const [search,setSearch]=useState(false);

    console.log(search)
    return (        
        <div className='flex flex-col fixed  z-1 bg-white w-[100%] py-[20px] items-center   mt-[0px] mb-[0px] '>

            <div className=' w-[88%]'>

            <div className='flex justify-between '>
                <div>
                    <div>
                        <img src="/images/CA-logo.svg" alt="img" className='h-[70px] w-auto' />
                    </div>
                </div>
                <div className='flex justify-center items-center text-center gap-[15px]'>
                    <div><a href='#form' className='font-[400] hover:text-[#157e77] cursor-pointer text-[#373737] text-[20px]'>Join Us</a>
                    </div>
                    <div className={` border flex justify-between ${ search ? 'w-[300px] border-green-300': 'w-[170px]'} items-center pr-[20px] transition-all  duration-300 ease border-[#dedede] rounded-[25px]`}>
                        <input type="text" placeholder='Search' onClick={()=>setSearch(true)}  className={`outline-none rounded-[25px]  h-[50px] w-[300px] px-[20px]`} />
                        <FaSearch className='cursor-pointer' />

                    </div>

                </div>
            </div>
            <hr className='my-[10px] h-[2px] bg-[gray]' />
            <div>
                <div className='lg:flex hidden sm:hidden lg:block justify-between  px-[10px] py-[5px]'>
                    <ul className='flex  justify-between gap-[30px]'>
                        <li className='font-[450] text-[18px] transition-all  duration-300 ease hover:border-b-4 hover:border-b-[#157e77] hover:text-[#157e77] cursor-pointer'>Cultures</li>
                        <li className='font-[450] transition-all  duration-300 ease text-[18px] hover:border-b-4 hover:border-b-[#157e77] hover:text-[#157e77] cursor-pointer'>Religions</li>
                        <li className='font-[450] text-[18px] transition-all  duration-300 ease hover:border-b-4 hover:border-b-[#157e77] hover:text-[#157e77] cursor-pointer'>Glossary</li>
                        <li className='font-[450] text-[18px] transition-all  duration-300 ease hover:border-b-4 hover:border-b-[#157e77] hover:text-[#157e77] cursor-pointer'>About</li>
                        <li className='font-[450] text-[18px] transition-all  duration-300 ease hover:border-b-4 hover:border-b-[#157e77] hover:text-[#157e77] cursor-pointer'>Give Us Feedback</li>
                    </ul>
                    <div className='flex justify-between items-center p-[5px] gap-[5px]'>
                        <img src="/images/mosaica.png" className='' alt="" />
                        <div className='px-[10px]'>

                        <a href="*" className='font-[500] hover:border-b-4 transition-all  duration-300 ease pb-[5px] hover:border-b-[#157e77] hover:text-[#157e77] text-[20px]'>
                            Unlock Premium Resources</a>
                            </div>

                    </div>

                </div>

            </div>
            </div>
        </div>
    )
}

export default Navbar;
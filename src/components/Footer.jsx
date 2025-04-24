import React from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-[100%]  '>
            <div className='flex justify-center items-center mt-[130px] p-[55px] bg-no-repeat border bg-cover repeat] bg-[url("/images/quote-bann.webp")]'>
                <div className='text-white italic'>
                    <p className='text-[20px] font-[600]'> There is no such thing as a ‘superior’ or ‘inferior’ culture, <br /> there are only various cultural patterns which make up a <br /> beautiful, multicoloured mosaic. </p>
                    <span className='float-right text-[25px] font-[350] mt-[30px]'>﹣ Taslima Nasrin</span>
                </div>
            </div>
            <div className='bg-[#373737] px-[60px] p-[10px] pb-[100px] w-[100%] pt-[100px]'>

                <div className='text-white '>
                    <h2 className='text-[20px] font-[500]'>Join us</h2>
                    <span className='text-[18px] font-[400]'>Join our community and get updates on new profiles</span>
                </div>
                <form id='form' className='sm:flex block flex-col gap-[25px]'>
                    <div className='sm:flex block text-white justify-between gap-[20px] mt-[30px]'>
                        <div className='flex w-full flex-col'>
                            <label>Name</label>
                            <input type="text" name='name' required className='bg-white text-black w-auto px-[20px] outline-none p-[10px]' placeholder='Your name' />
                        </div>
                        <div className='flex w-full flex-col'>
                            <label >Email</label>
                            <input type="email" required className='bg-white text-black p-[10px] px-[20px] outline-none w-auto' placeholder='email@example.com' />
                        </div>
                        <div className='flex w-full flex-col'>
                            <label >Reason for Interest</label>
                            <select name="" id="" required className='bg-white p-[10px] px-[20px]  text-black max-w-[350px] w-auto'>
                                <option value="">Select</option>
                                <option value="education">Education purpose</option>
                                <option value="research">Research purpose</option>
                                <option value="writer">Journalist/Writer</option>
                                <option value="market">Market Research</option>

                            </select>
                        </div>

                    </div>
                    <div className='flex gap-[20px] p-[10px] bg-[white] w-[350px] mt-[20px] '>
                        <input type="checkbox" required className='h-20px' />
                        <span>I'm not a robot</span>
                    </div>
                    <div className='mt-[20px]'>
                        <button type='submit' className='py-[10px] px-[20px] text-[30px] font-[500] italic bg-[#157e77] text-white rounded-tl-[20px] rounded-br-[20px]' >JOIN NOW</button>
                    </div>
                </form>
                <div className='flex flex-col'>

                    <div className='mt-[50px] flex items-center mb-[60px] '>
                        <p className='text-white italic text-[20px]'>The Cultural Atlas team acknowledges the Traditional Owners of the lands throughout Australia on <br /> whose country we have the privilege to live and work. We pay our respects to all Aboriginal and Torres <br /> Strait Islander custodians past, present and emerging.</p>

                    </div>
                    <div className=' sm:flex block  justify-between p-[20px]'>
                        <ul className='sm:flex block justify-between gap-[30px] text-[18px] font-[500] text-white'>
                            <li className=' cursor-pointer'>FAQ</li>
                            <li className=' cursor-pointer'>Our Collaborators</li>
                            <li className=' cursor-pointer'>Contact Us</li>
                            <li className=' cursor-pointer'>Cite Us</li>
                            <li className=' cursor-pointer'>Terms & Conditions</li>
                            <li className=' cursor-pointer'>Complaints</li>
                            <li className=' cursor-pointer'>Privacy</li>
                        </ul>
                        <div className='text-white flex justify-center gap-[30px] mt-[20px] font-[500] text-[20px]'>

                            <div className=' cursor-pointer text-black bg-white p-[5px] rounded'> 
                            <FaFacebookF />

                            </div>
                            <div className=' cursor-pointer text-black bg-white p-[5px] rounded'>
                            <FaInstagram />

                            </div>


                        
                        </div>
                    </div>
                    <div className='flex text-white flex-col mt-[60px]'>
                        <div className='text-[20px] font-[400]'>
                            <span>©</span>
                            <span>Mosaica</span>
                        </div>
                        <div className=' flex sm:self-end gap-[5px] items-center'>
                            <div className=' items-center'>
                            <img src='/images/mosaica.png' alt="dee" className='filter invert h-full w-[25px] brightness-0' />
                            </div>
                            <span  className=' text-[24px] font-[500] text-white'>Mosaica</span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
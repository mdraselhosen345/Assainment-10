import React from 'react';
import BannerPng from "../../assets/banner.jpg"
import manPng from "../../assets/man (2).png"
import { FaFacebook } from "react-icons/fa6";
const Banner = () => {
    return (
       <div className=''>
                <div className='relative'>
                     <div className='absolute'>
                        <img className='top-0 ml-20 mb-7 h-[500px] w-[500px] ' src={manPng} alt="" />
                     </div>
                        <div className="absolute w-full text-right">
                              <h1 className="text-[#A4A4A4] text-5xl mt-24 font-bold mr-28">WEB <span className='text-[#FF6C36] text-6xl font-bold'>BANNER</span></h1>
                              <h3 className='text-4xl font-semibold mr-28 mt-1 text-[#FF6C36]'>Template Design</h3>
                              <p className='text-[16px] font-semibold mt-4xl mr-28 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                              <br/>Modi beatae eligendi eos unde, exercitationem fugit 
                                                               </p>
                                 <div>
                                    <FaFacebook />
                                 </div>
                       </div>
                        <div className=''>               
                           <img className='bg-cover bg-center w-full h-[500px]' src={BannerPng} alt="" />
                         </div>
                         
                </div>
                <div>
                </div>
       </div>
    );
};

export default Banner;
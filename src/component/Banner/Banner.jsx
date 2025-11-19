import React, { useEffect } from 'react';
import BannerPng from "../../assets/banner.jpg"
import manPng from "../../assets/man (2).png"
import viewPng from "../../assets/view.jpg"
import honnerPng1 from "../../assets/hands (2).jpg"


const Banner = () => {
   useEffect(() => {
      let index = 0;
      const slider = document.getElementById("slider");
      const total = slider.children.length;

      const interval = setInterval(() => {
         index = (index + 1) % total;
         slider.style.transform = `translateX(-${index * 100}%)`;
      }, 3000);
      return() => clearInterval(interval);
   },[]);
    return (
       <div className='relative overflow-hidden w-full h-[500px]'>
                <div className='relative'>
                     <div className='absolute'>
                        <img className='top-0 ml-20 mb-7 h-[500px] w-[500px] ' src={manPng} alt="" />
                     </div>
                        <div className="absolute w-full text-right z-10">
                              <h1 className="text-[#A4A4A4] text-5xl mt-24 font-bold mr-28">WEB <span className='text-[#FF6C36] text-6xl font-bold'>BANNER</span></h1>
                              <h3 className='text-4xl font-semibold mr-28 mt-1 text-[#FF6C36]'>Template Design</h3>
                              <p className='text-[16px] font-semibold mt-4xl mr-28 mt-5 text-[#A4A4A4]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                              <br/>Modi beatae eligendi eos unde, exercitationem fugit 
                                                               </p>
                                 <div>
                                     <button className="btn bg-[#FF6C36] font-bold text-[#4b4848] mt-10 mr-60 pb-2 pt-1 pl-13 pr-13 rounded-tl-3xl rounded-br-3xl text-xl hover:bg-transparent hover:border-white hover:text-white">Login</button>
                                 </div>
                       </div>
                        <div className='flex transition-transform duration-700' id='slider'>             
                                    <img className="w-full h-[500px] flex-shrink-0" src={BannerPng} alt=""/>                             
                                     <img className="w-full h-[500px] flex-shrink-0" src={viewPng} alt="" />
                                    <img className="w-full h-[500px] flex-shrink-0" src={honnerPng1} alt=""/>
                                    
                                 
                         </div>
                         
                </div>
                <div>
                </div>
       </div>
    );
};

export default Banner;
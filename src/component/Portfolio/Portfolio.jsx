import React from 'react';
import { FaServer } from "react-icons/fa";
import { BsCreditCard2Front } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
const Portfolio = () => {
    return (
        <div className='mx-auto w-[1200px] h-[600px]'>
            <div className='flex h-[350px]'>
                 <div className='w-[800px] bg-gradient-to-t from-[#000000] via-[#1f0a0a] pt-20 pl-14'>
                      <h1 className='slide-left text-6xl font-bold text-[#F54927] animate-slideLeft'>MD.</h1>
                      
                      <h1 className='text-8xl font-bold text-[#C4C4C4] animate-slideLeft'>RASEL</h1>
                   </div>
                  <div className='w-[400px] bg-gradient-to-b from-[#000000] via-[#1f0a0a] to-[#000000] pt-14 pl-6'>
                        <h3></h3>
                        <h1 className='text-2xl text-#1A0000 font-bold'>Product Designer and Development. bosed in Colifromia </h1>
                        <p className='text-[14px] text-[#808080] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias deleniti debitis delectus ab, laboriosam rerum. Sit iste beatae itaque voluptatum.</p>
                  </div>
            </div>
              <div className='flex h-[250px]'>
                   <div className='w-[400px] bg-gradient-to-l from-[#0D0D0D] via-[#242424]'>
                    <div className='pt-5 pl-3'>
                             <h3 className='text-3xl font-bold text-[#E7A2A2]'>Full Stack Web Developer</h3>
                             <p className='text-[14px] font-semibold text-[#C4C4C4] pt-2'>I am a Web Developer who creates modern, responsive, and user-friendly websites. I enjoy building clean designs, writing efficient code, and developing smooth user experiences using HTML, CSS, JavaScript, and modern frontend tools</p>
                    </div>
                      
                  </div>
                   <div className='w-[800px] bg-gradient-to-r from-[#111010] via-[#351212] flex'>
                       <div className='gap-14 m-[50px] flex justify-center'>
                           <div className=' bg-[#CB3434] w-30 h-30 rounded-xl pt-6 pl-6'> <BsCreditCard2Front size={70}/></div>
                           <div className=' bg-[#0000FF] w-30 h-30 rounded-xl pt-6 pl-6'><GrShieldSecurity size={70}/></div>
                           <div className=' bg-[#C19A6B] w-30 h-30 rounded-xl pt-6 pl-6'><FaServer size={70}/></div>
                       </div>
                   </div>
              </div>
        </div>
    );
};

export default Portfolio;
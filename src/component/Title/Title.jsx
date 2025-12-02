import React from 'react';
import { FaSquareJs } from "react-icons/fa6";
import { IoLogoPython } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

const Title = () => {
    return (
      <div className=' h-[150px] mx-auto w-[1200px] '>
            <div className='flex justify-center '>
                <div className='w-[300px] h-[150px] bg-[#000A30] flex justify-center items-center  hover:scale-105'>
                    <a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank"><IoLogoPython className='text-[#F5B027]'  size={80}/></a>
                </div> 
                    <div className='w-[300px] h-[150px] bg-[#003757] flex justify-center items-center hover:scale-105'>
                       <a href="https://www.programiz.com/javascript/online-compiler/" target="_blank"><FaSquareJs className='text-[#F54927]' size={80}/></a>
        
                    </div>
                       <div className='w-[300px] bg-[#000A30] h-[150px] flex justify-center items-center hover:scale-105'>
                           <a href="https://www.programiz.com/javascript/online-compiler/" target="_blank"><FaJava className='text-[#F5B027]' size={80}/></a>
                        </div> 
                       <div className='w-[300px] h-[150px] bg-[#003757] flex justify-center items-center hover:scale-105'>
                            <a href="https://www.programiz.com/javascript/online-compiler/" target="_blank"><FaReact className='text-[#F54927]' size={80}/> </a>  
                      </div>
            </div>
      </div>
    );
};

export default Title;
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
                    <IoLogoPython size={60}/>
                </div> 
                    <div className='w-[300px] h-[150px] bg-[#003757] flex justify-center items-center hover:scale-105'>
                       <FaSquareJs size={60}/>
        
                    </div>
                       <div className='w-[300px] bg-[#000A30] h-[150px] flex justify-center items-center hover:scale-105'>
                           <FaJava size={60}/>
                        </div> 
                       <div className='w-[300px] h-[150px] bg-[#003757] flex justify-center items-center hover:scale-105'>
                            <FaReact size={60}/>   
                      </div>
            </div>
      </div>
    );
};

export default Title;
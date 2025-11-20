import React from 'react';
import aiGeneratePng from '../../assets/ai-generated.jpg'
import { MdAnalytics } from "react-icons/md";
import { MdSystemSecurityUpdateWarning } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div className='mx-auto w-[1200px] h-[700px] flex'>
             <div className='w-[700px] h-[700px]'>
                <div>
                    <h1 className='text-5xl pb-2 text-[#F5B027] font-bold  pt-10 pl-7'>The best skills <span className='text-[#F54927]'>for 2025</span></h1>
                </div>
                       <div className='flex gap-3'>
                              <div className='w-[350px] h-[300px] text-center justify-center pt-10'>
                                    <FaBrain className='inline-block text-[#C4C4C4]' size={70}/>
                                    <h1 className='text-3xl font-bold pt-5 text-[#C4C4C4]'>Artificial Intelligence</h1>
                                    <p className='font-semibold pt-1 text-[#808080] pr-2'>Artificial Intelligence empowers machines to learn, reason, adapt, and innovate, transforming industries, education, healthcare, communication, and human creativity.</p>
                                </div>
                            <div className='w-[350px] h-[300px] text-center pt-10'>
                                 <MdAnalytics className='inline-block text-[#C4C4C4]' size={70}/>
                                 <h1 className='text-3xl font-bold pt-5 text-[#C4C4C4]'>Data Analytics</h1>
                                 <p className='font-semibold pt-1 text-[#808080] pr-2'>Data analysis collects, organizes, interprets, and visualizes information, enabling decisions, discovering patterns, improving efficiency, and driving innovation.</p>
                            </div>
                       </div>
              <div className='flex gap-3'>
                    <div className='w-[350px] h-[300px] pt-10 text-center'> 
                        <MdSystemSecurityUpdateWarning className='inline-block text-[#C4C4C4]' size={60}/>
                        <h1 className='text-3xl font-bold pt-5 text-[#C4C4C4]'>Cyber Security</h1>
                        <p className='font-semibold pt-1 text-[#808080] pr-2'>Cyber security protects systems, networks, and data from threats, ensuring privacy, preventing attacks, safeguarding information, and maintaining trust.</p>
                   </div>
                  <div className='w-[350px] h-[300px] text-center pt-10'>
                      <TbCloudComputing className='inline-block text-[#C4C4C4]' size={60}/>
                      <h1 className='font-bold text-3xl pt-5 text-[#C4C4C4]'>Cloud Computing</h1>
                      <p className='text-semibold pt-1 text-[#808080] pr-2'>Cyber security protects systems, networks, and data from threats, ensuring privacy, preventing attacks, safeguarding information, and maintaining trust.</p>
                  </div>
              </div>

             </div>
              <div className='w-[500px] h-[700px]'>
                   <img className='w-[600px] h-[700px]' src={aiGeneratePng} alt="" />
              </div>
        </div>
    );
};

export default Dashboard;
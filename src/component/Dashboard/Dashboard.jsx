import React from 'react';
import aiGeneratePng from '../../assets/ai-generated.jpg'
import { MdAnalytics } from "react-icons/md";
import { MdSystemSecurityUpdateWarning } from "react-icons/md";
import { TbCloudComputing } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div className='border-2 border-red-500 mx-auto w-[1200px] h-[700px] flex'>
             <div className='border-2 border-green-500 w-[700px] h-[700px]'>
                <div>
                    <h1 className='text-3xl font-bold text-white pt-10 pl-7'>The best skills for 2025</h1>
                </div>

                       <div className='flex justify-between'>
                              <div className='pl-10 pt-7'>
                                    <FaBrain className='pl-[30px]' size={70}/>
                                    <h1 className='text-2xl font-bold'>Artificial Intelligence</h1>
                                    <p className='font-semibold'>Artificial Intelligence machines learn, think,<br />decide, create, and transform society.</p>
                                </div>
                            <div className='pr-30 pt-7'>
                                 <MdAnalytics size={70}/>
                                 <h1>Data Analytics</h1>
                                 <p></p>
                            </div>
                       </div>
                  <div> 
                        <MdSystemSecurityUpdateWarning size={60}/>
                  </div>
                  <div>
                      <TbCloudComputing size={60}/>
                  </div>

             </div>
              <div className='border-2 border-blue-500 w-[500px] h-[700px]'>
                   <img className='w-[600px] h-[700px]' src={aiGeneratePng} alt="" />
              </div>
        </div>
    );
};

export default Dashboard;
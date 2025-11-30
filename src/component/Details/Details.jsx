import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Details = () => {
    return (   
     <div className='flex mx-auto w-[1200px] h-[550px]'>

          <div className='border-2 border-[#ADADAD] w-[300px] mt-10'>
           <figure>
              <img className='w-[350px] h-[350px]'
                   src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                   alt="Movie" />
           </figure>
          </div>
       
          <div className='w-[600px]'>
           <div className='pt-10 pl-3'>
              <h2 className="card-title text-3xl font-bold text-[#C4C4C4]">New movie is released!</h2>
               <h3 className='text-xl text-[#969696]'>ratings</h3>

               <div className='pt-5 pb-5 pl-3'>
                  <h1 className='text-3xl font-semibold'><span className='text-[#D12300]'>-16% </span><sup>$</sup>8 <sup>36</sup></h1>
               </div>

               <div className='pt-2'>
                 <h1 className='text-2xl font-semibold text-[#ADADAD]'>Key Features</h1>
                 <ol className='pt-1 pl-2 text-[#808080]'>
                   <li>Unlock powerful performance gains with React server components and server functions in Next.js</li>
                   <li>Manage forms, state, and data fetching with modern tools like Zustand and Next.js</li>
                   <li>Build reusable, scalable components using proven React and TypeScript design patterns</li>
                 </ol>
               </div>
               <div className='pt-5'>
                <h1 className='text-2xl font-semi-bold text-[#ADADAD]'>Description</h1>
                 <p className='pt-1 pl-2 text-[#808080]'>Reading, navigating, and debugging a large frontend codebase can be challenging. 
                    Learn React with TypeScript, 3rd Edition helps you overcome these challenges by teaching you React, 
                    TypeScript, and Next.js, which are core technologies for building scalable, high-performance apps 
                 </p>
              </div>
         </div>
          </div>

          <div className='w-[300px] border-1 border-[#525252] mt-12 mb-3'>
                 <div className='flex gap-1 pl-1.5 mt-3'>
                  <div className='border-2 border-[#525252] rounded-[8px] w-[140px] h-[80px] hover:border-blue-700'>
                     <div className='pl-1.5'>
                       <h5 className='text-[16px] text-semibold text-[#DBDBDB]'>Kindle</h5>
                       <h3 className='text-xl font-bold'>$31.19</h3>
                       <p className='text-[14px] text-semibold text-[#969696]'>Available instantly</p>
                     </div>
                  </div>
                  <div className='border-2 border-[#525252] w-[140px] rounded-[8px] h-[80px] hover:border-blue-700'>
                      <div className='pl-1.5'>
                         <h5 className='text-[16px] text-semibold text-[#DBDBDB]'>Paperback</h5>
                         <h3 className='text-xl font-bold'>$39.99</h3>
                      </div>

                  </div>
                 </div>
                  <div className='pt-5 pl-3'>
                    <h1 className=' font-semibold text-[#525252] pt-1'>$249.62 Shipping & Import Charges to Bangladesh<span className='text-[#00004e] font-bold underline'><a href='https://www.easyship.com/duties-and-taxes-calculator/bangladesh'>Details</a></span></h1>
                    <h3 className='flex underline text-[#ADADAD] gap-2 pt-3'><span className='pt-1.5'><SlLocationPin /></span><a href="#">Deliver to Bangladesh</a></h3>
                     <h1 className='text-xl pt-2 text-[#00A300]'>In Stoock</h1>  

              <div class="max-w-xs pt-3 pr-2">
                   <select class="w-full bg-[#525252] border-gray-500 rounded-lg p-2 shadow-sm pr-2
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                         <option>Quality 1</option>
                         <option>Quality 2</option>
                         <option>Quality 3</option>
                         <option>Quality 4</option>
                         <option>Quality 5</option>
                   </select>
             </div>

                <div className='max-w-xs mt-4'>
                       <div className='py-1.5 px-6 rounded-3xl text-center bg-[#FFFF00] mr-2'> 
                            <button className='text-xl text-black font-bold'>Add to Card</button>
                       </div>
                         <div className='py-1.5 px-6 rounded-3xl pr-3 text-center bg-[#F54927] mt-2 mr-2'>
                            <button className='text-xl text-black font-bold'>Buy Now</button>
                        </div>
                </div>
                   
             <div className='mr-3'>
                    <div className='flex gap-3 pt-3 pl-2'>
                       <input type="checkbox" name="input" id="" />
                       <h1 className='text-[16px]'>Add a gift receipt for easy returns</h1>
                   </div>
                    <div className='py-1 px-6 rounded-xl text-center border-1 mt-2 hover:border-blue-700'>
                       <Link to="/Returns"><h1 className='text-lg'>Add to List</h1></Link>
                    </div>
             </div>

                     </div>
                  </div>
                 

          </div>
  
    );
};

export default Details;
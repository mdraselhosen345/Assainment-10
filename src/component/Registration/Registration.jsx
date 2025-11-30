import React from 'react';
import { FaUserLock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Registration = () => {
    return (
         <div className='mx-auto w-[1200px] flex'>
           <div className='w-[700px] pt-44 pl-20'>
             <h1 className='text-5xl font-bold text-[#CC5500]'>
               WELCOME TO OUR <br /> WEBSITE
             </h1>
     
             <p className='text-lg font-semibold text-[#969696] pt-5'>
               Securely access your account to manage <br />
               settings, track progress, and enjoy <br />
               personalized features anytime, anywhere.
             </p>
     
             <h2 className='text-4xl pt-3 font-bold text-[#313AED] flex items-center gap-4'>
               User Registration Now <FaArrowRight />
             </h2>
           </div>
     
           <div className='w-[500px]'>
             <div className="hero min-h-screen flex justify-center">
               <div className="lg:flex-row-reverse ">
                 <div className="flex justify-center pb-5">
                   <h1 className="text-5xl font-bold">
                     <FaUserLock className='card underline' size={90} />
                   </h1>
                 </div>
     
                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                   <div className="card-body w-[300px]">
                     <fieldset className="fieldset">
                        <label className='label'>Full Name</label>
                        <input type='name' className='input' placeholder='Full Name'></input>
     
                       <label className="label">Email</label>
                       <input type="email" className="input" placeholder="Email" />
     
                       <label className="label">Password</label>
                       <input type="password" className="input" placeholder="Password" />

                       <label className='label'>Number</label>
                       <input type="number" className='input' placeholder='Namber' />
                        
                        
                        <div className='pl-2'>
                            <input type="checkbox" className='text-left' name="" id="" />
                        </div>
     
                       <button className="btn btn-neutral mt-2">
                         Registration with Google
                       </button>
                       
     
                     </fieldset>
                   </div>
                 </div>
               </div>
             </div>
           </div>
     
         </div>
    );
};

export default Registration;
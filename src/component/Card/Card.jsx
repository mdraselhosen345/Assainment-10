import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";



const Card = () => {
    const [skills, setskills] = useState([]);

  useEffect(() => {
     fetch("/skills.json")
      .then(res => res.json())
      .then(data => setskills(data))
       .catch(err => console.error("JSON load error:", err));
}, []); 

    return (
   <div className='mx-auto w-[1200px] grid grid-cols-4 pt-10'>
          {
            skills.map((item) => (
            <div key={item.id} className="card bg-base-100 w-72 shadow-sm gap-4 hover:scale-105">
               <figure>
                   <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
               </figure>
          <div className="pr-3 pl-3">
                 <h2 className="card-title text-xl font-bold">{item.title}</h2>
                  <p className='text-[13px] pt-1'>{item.paragraph}</p>
                  <h2 className='text-[16px] pt-1 font-semibold'>{item.tagline}</h2>
               <div className=" flex justify-between items-center pb-5 pt-1">
                         <div className='flex items-center gap-2'>
                            <h1><FaStar /></h1>
                            <h1 className='text-xl'>{item.rating}</h1>
                         </div>
                       <button className="btn btn-primary">{item.buy}</button>
               </div>
         </div>
      </div> 
      
            ))
          }
   </div>
    );
};

export default Card;
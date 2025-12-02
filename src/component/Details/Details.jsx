
import { useEffect, useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";

const Details = () => {
   const {id} = useParams();
   const [skill, setSkill] = useState(null);
   useEffect(() => {
      fetch("/skills.json")
       .then(res => res.json())
       .then(data => {
         const found = data.find(item => item.id === parseInt(id))
         setSkill(found);
       })
       .catch(err => console.error("JSON load error:", err))
   },[id]);
   if(!skill) return <p>Loading...</p>

    return (   
     <div className='flex mx-auto w-[1200px] h-[550px]'>
         
        {/* Left Column: Images */}
         <div className=' w-[300px] mt-10'>
                       <figure>
                           <img className='w-[350px] h-[350px]'
                              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                              alt="Movie" />
                       </figure> 

                  {/* 3 image  */}
               <div className='flex gap-1.5 pt-2 pl-2'>
                     {skill.thumbnails?.map((thumb, idx) => (
                        <div key={idx} className='border-2'>
                             <img className='h-[60px] w-[40px]'
                                   src={thumb} alt={`thumb-${idx}` }/>
                         </div>
                      ))}
      
               </div>

                {/* personal details */}
                                   <div className="pl-4 pr-4">
                                              <h1 className='text-xl font-bold pt-2 pl-3'>Follow the author</h1>
                                        <div className='flex justify-between items-center'>
                                            <div className='w-9 h-9 rounded-full overflow-hidden'>
                                                 <img src={skill.authorImage} 
                                                 alt="skill.author" />
                                            </div>

                                            <div>
                                               <h1 className='text-[#5C5CFF]'>{skill.author}</h1>
                                            </div>

                                            <div className=''>
                                                  <button className="btn btn-outline rounded-3xl">Follow</button>
                                            </div>
                                        </div>
                                 </div>

          </div>
       
          {/* midedil column */}
                        <div className='w-[600px]'>
                              <div className='pt-10 pl-3'>
                                      <h2 className="card-title text-3xl font-bold text-[#C4C4C4]">{skill.title}</h2>
                                      <h3 className='text-xl text-[#ff9681]'>Ratings : {skill.rating}</h3>
                                    <div className='pt-5 pb-5 pl-3'>
                                        <h1 className='text-3xl font-semibold'><span className='text-[#D12300]'>-{skill.discount}%</span><sup>$</sup>{skill.price}<sup>{skill.cents}</sup></h1>
                                    </div>

                                      <div className='pt-2'>
                                           <h1 className='text-2xl font-semibold text-[#ADADAD]'>Key Features</h1>
                                              <ol className='pt-1 pl-2 text-[#808080]'>
                                                {skill.features?.map((feature, idx) => (
                                                   <li key={idx}>{feature}</li>
                                                ))}  
                                              </ol>
                                      </div>
                                     <div className='pt-5'>
                                           <h1 className='text-2xl font-semi-bold text-[#ADADAD]'>Description</h1>
                                               <p className='pt-1 pl-2 text-[#808080]'>{skill.description} </p>
                                      </div>
                              </div>
                       </div>
                
                {/* right Column */}
                   <div className='w-[300px] border-1 border-[#525252] mt-12 mb-3'>
                         {/* sort card  */}
                         <div className='flex gap-1 pl-1.5 mt-3'>
                           {skill.formats?.map((format,idx) => (
                              <div key={idx} className='border-2 border-[#525252] rounded-[8px] w-[140px] h-[80px] hover:border-blue-700'>
                                    <div className='pl-1.5'>
                                       <h5 className='text-[16px] text-semibold text-[#DBDBDB]'>{format.name}</h5>
                                       <h3 className='text-xl font-bold'>{format.price}</h3>
                                      <p className='text-[14px] text-semibold text-[#969696]'>{format.available}</p>
                                   </div>
                                </div>
                              ))}
                           </div>
                     
                         {/* add buyy now */}
                        <div className='pt-5 pl-3'>
                                <h1 className=' font-semibold text-[#525252] pt-1'>${skill.shipping} Shipping & Import Charges to Bangladesh<span className='text-[#00004e] font-bold underline'><a href='https://www.easyship.com/duties-and-taxes-calculator/bangladesh'>Details</a></span></h1>
                                <h3 className='flex underline text-[#ADADAD] gap-2 pt-3'><span className='pt-1.5'><SlLocationPin /></span><a href="#">Deliver to Bangladesh</a></h3>
                                <h1 className='text-xl pt-2 text-[#00A300]'>In Stoock</h1>  

                             <div class="max-w-xs pt-3 pr-2">
                                  <select class="w-full bg-[#525252] border-gray-500 rounded-lg p-2 shadow-sm pr-2   focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    {skill.qualityss?.map((qualities,idx) => (
                                       <option key={idx}>{skill.qualities}</option>
                                    ))}
                                       
                                  </select>
                            </div>

                                <div className='max-w-xs mt-4'>
                                      <div className='py-1.5 px-6 rounded-3xl text-center bg-[#FFFF00] mr-2'> 
                                      <button className='text-xl text-black font-bold'>Add to Card</button>
                                      </div>

                                      <div className='py-1.5 px-6 rounded-3xl pr-3 text-center bg-[#F54927] mt-2 mr-2'>
                                           <button className='text-xl text-black font-bold'>{skill.buy}</button>
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
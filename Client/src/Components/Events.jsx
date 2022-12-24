import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import img1 from './images/children.jpeg'
import img2 from './images/env.jpeg'
import img3 from './images/healthcamp2.jpeg'
import img4 from './images/healthcamp.jpeg'

function Events() {
  return (
    <div className='my-16 p-4 grid sm:grid-cols-1 lg:grid-cols-2'>
      <div className=''>
      
        <div className=' text-center text-4xl text-gray-700 font-extrabold p-4 '>Upcoming Events</div>

{/* 1st card */}
          <div className='text-center lg:text-left grid sm:grid-cols-1 lg:grid-cols-2 p-8 '>
          <div className='mx-auto'>
                <img className='h-36' src={img4}></img>
            </div>
          <div className='grid p-2 '>
               <div className='text-md'>Health Care  & Wellness Camp </div> 
               <div className='text-sm 
            '>Jan 2, 2023</div>  
               <div className='text-sm text-gray-500'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</div>
                <AnchorLink href="#footer" className='text-blue-500 hover:text-blue-700'>Contact Us</AnchorLink>
            </div>
            
            </div>

            {/* 2nd card */}
            <div className='text-center lg:text-left grid sm:grid-cols-1 lg:grid-cols-2 p-8 '>
          <div className='mx-auto'>
                <img className='h-36' src={img2}></img>
            </div>
          <div className='grid p-2 '>
               <div className='text-md'>Plantation Drive </div> 
               <div className='text-sm 
            '>Jan 2, 2023</div>  
               <div className='text-sm text-gray-500'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</div>
                <AnchorLink href="#footer" className='text-blue-500 hover:text-blue-700'>Contact Us</AnchorLink>
            </div>
            
            </div>

{/* 3rd card */}
            
            
<div className='text-center lg:text-left grid sm:grid-cols-1 lg:grid-cols-2 p-8 '>
          <div className='mx-auto'>
                <img className='h-36' src={img3}></img>
            </div>
          <div className='grid p-2 '>
               <div className='text-md'>Health Camp for Children </div> 
               <div className='text-sm 
            '>Jan 2, 2023</div>  
               <div className='text-sm text-gray-500'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</div>
                <AnchorLink href="#footer" className='text-blue-500 hover:text-blue-700'>Contact Us</AnchorLink>
            </div>
            
            </div>

            {/* end of cards section */}

      </div>


      {/* second section */}
      <div>
        <div className='text-4xl text-gray-700 font-extrabold p-4 text-left'>Educate a Child</div>
        <div className='bg-gray-100 m-2 pt-2 mt-10 '>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 m-10'>
                <div className=''>
                    <img src={img1} className='h-80' ></img></div>
                    <div className='grid place-items-center'>
                        <div className='text-2xl mt-4 p-1 text-center'>
                        <div>Sponsor Your Child </div>
                        <div className='text-sm'>Change their Lives</div>
                        </div>
                        
                        <div className='text-gray-600 p-6 text-center mb-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur.
                        </div>
                        
                    </div>
                    
                </div>
                <div className='text-center text-lg my-2 p-2 pb-6 '>
                   <div className='my-1'>If you want to know more </div> 
                    <button className='mx-auto grid place-items-center rounded-md bg-blue-500 text-white w-36 h-10 text-xl'><a href='/educate'>Read More</a></button>
                </div>

                
        </div>
      </div>
    </div>
  )
}

export default Events

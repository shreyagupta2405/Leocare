import React from 'react'
import children from './images/children.jpeg'
import Text from './Text'

function Journey() {
    return (
        <div >
    <div className=' p-4 mt-6 '>
      <div className='justify-center items-center mt-6'>
        {/* <h1 className='text-3xl font-extrabold flex justify-center items-center text-gray-800'>The Leocare Organization</h1> */}
        <h1 className=' flex justify-center items-center text-3xl text-center mt-2  font-extrabold'>
          The Leocare Foundation
        </h1>
        <h3 className=' flex flex-row justify-center items-center text-center mt-2 '>
        
          
         
        </h3>
      </div>
      <div className=' mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 '>
        <div className='w-full col-span-1 justify-around items-center flex h-35  p-8'>
   
         <img src={children} className="w-[200px] h-[200px] rounded-lg" />
         <img src={children} className="w-[200px] h-[200px] rounded-lg" />

        </div>
        <div className='col-span-1  justify-center items-center flex h-35 text-black'>
        
dijfijfijjifijfijijfijfiifjfifij
f4weijewfi
        
        </div>
      </div>
    </div>
    </div>
    )
}

export default Journey

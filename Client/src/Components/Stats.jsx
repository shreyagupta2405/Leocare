import React from 'react'

function stats() {
  return (
    <div className='w-full  '>
    <div className='bg-purple-600 h-48 text-white text-center flex flex-col justify-center items-center p-10 mt-48 mb-24'>
      <h3 className='text-center text-slate-700 text-white font-serif text-9xl tracking-[.75em] opacity-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>LEOCARE</h3>
      <div className='absolute pb-16 mr-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='text-4xl mx-96 absolute text-white'>30 Volunteers</div>
      <div className='-mx-96 text-4xl text-center absolute text-white'>100 <br></br>Helped</div>
      <div className=' absolute text-4xl  text-white'>75.00% Success</div>
      </div>
      
    </div>
    
    <div className='flex flex-col justify-center items-center'>
    <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium text-xl rounded-lg px-5 py-2.5 text-center mr-2 h-12 w-36 mb-12 ">
                        DONATE
       </button>
    </div>
    </div>
  )
}

export default stats

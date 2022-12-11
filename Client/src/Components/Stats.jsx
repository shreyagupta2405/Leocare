import React from 'react'

function stats() {
  return (
    <div>
    <div className='bg-purple-500 h-48 text-white text-center flex flex-col justify-center items-center mt-48 mb-24'>
      <h3 className='text-center ml-12 text-slate-700 text-gray-400 font-serif text-9xl tracking-[.75em]'>LEOCARE</h3>
    </div>
    <div className='flex flex-col justify-center items-center'>
    <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium text-xl rounded-lg px-5 py-2.5 text-center mr-2 h-12 w-36 mb-12">
                        DONATE
       </button>
    </div>
    </div>
  )
}

export default stats

import React from 'react'
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-white h-24 border-gray-200 px-2 sm:px-4 py-3 rounded dark:bg-gray-900 drop-shadow-lg ">
    <div className=" flex flex-wrap mt-4 items-center justify-between mx-auto ">
        <a className="flex items-center">
            
            <h1 className="text-primary font-bold text-[2rem]">Leocare</h1>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col  mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
                <li>
                <Link to='/' className='hover:text-primary text-lg'>Home</Link>
                </li>
                <li>
                <Link to='/events' className='hover:text-primary text-lg'>Events/Home</Link>
                </li>
                <li>
                <Link to='/edu-home' className='hover:text-primary text-lg'>Educate/Home</Link>
                </li>
                <li>
                <Link to='/env' className='hover:text-primary text-lg'>Environment/Home</Link>
                </li>

                <li>
                <Link to='/skillhome' className='hover:text-primary text-lg'>Skill Development/Home</Link>
                </li>
                
                <li>
                <Link to='/signin' className='hover:scale-75'><button className='rounded-md bg-second p-2 text-primary text-lg'>Logout</button></Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    // <div className='text-white sm:h-40 lg:h-28  bg-primary grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 text-xl sm:p-4 lg:p-12 text-center'>
    //     <Link to='/' className='hover:scale-75'>Home</Link>
    //     <Link to='/events' className='hover:scale-75'>Events/Home</Link>
    //     <Link to='/edu-home' className='hover:scale-75'>Educate/Home</Link>
        
    //     <Link className='hover:scale-75'>Environment/Home</Link>
    //     <Link className='hover:scale-75'>Skill Development/Home</Link>
    //     <Link to='/signin' className='hover:scale-75'><button className='rounded-md bg-second p-2 text-primary'>Logout</button></Link>
    // </div>
  )
}

export default NavBar

// 

// 
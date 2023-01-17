import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Link} from "react-router-dom";

function NavBar() {
    console.log("NavBar.jsx")
  return (
    <div className='text-white h-28 bg-primary grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-xl sm:p-0 lg:p-12 text-center'>
        <Link to='/events' className='hover:scale-75'>Events/Home</Link>
        <Link to='/edu-home' className='hover:scale-75'>Educate/Home</Link>
        <Link className='hover:scale-75'>Environment/Home</Link>
        <Link className='hover:scale-75'>Skill Development/Home</Link>
    </div>
  )
}

export default NavBar
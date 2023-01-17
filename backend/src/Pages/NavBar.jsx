import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";


function NavBar() {
  return (
    <div className='text-white h-28 bg-primary grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-xl sm:p-0 lg:p-12 text-center'>
        <a href='/Events' className='hover:scale-75'>Events/Home</a>
        <a href='/EduHome' className='hover:scale-75'>Educate/Home</a>
        <a className='hover:scale-75'>Environment/Home</a>
        <a className='hover:scale-75'>Skill Development/Home</a>
        </div>
  )
}

export default NavBar
import React from 'react'
import Card from './Card'
import img1 from "./images/envv.jpg";
import img2 from "./images/skill.jpg";
import imgv from './images/volunteer.jpeg';
import img3 from "./images/kid.png";

function Cards() {
  return (
    <div id='cards'>
    <div className='text-primary font-semibold lg:text-[2rem] text-[1.4rem] my-8 text-center'>
                Journey to change the world starts here
                </div>
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      
      <div className='justify-center items-center flex'>
        <Card
          link={'skills'}
          title='Environment'
          imageUrl={img1}
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>
      <div className='justify-center items-center flex'>
        <Card
          link={''}
          title='Volunteer'
          imageUrl={imgv}
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>
      <div className='justify-center items-center flex'>
        <Card
          link={'training'}
          title='Women&apos;s Skill Development'
          imageUrl={img2}
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>
      
    </div>
    </div>
  )
}

export default Cards

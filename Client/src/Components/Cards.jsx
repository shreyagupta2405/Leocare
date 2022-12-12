import React from 'react'
import Card from './Card'
import img1 from "./images/envv.jpg";
import img2 from "./images/skill.jpg";
import img3 from "./images/kid.png";

function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      <div className='justify-center items-center flex'>
        <Card
          title='Environment'
          imageUrl={img1}
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>
      <div className='justify-center items-center flex'>
        <Card
          title='Skill Training'
          imageUrl={img2}
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>
      <div className='justify-center items-center flex'>
        <Card
          title='Education'
          imageUrl={img3}
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>
      
    </div>
  )
}

export default Cards

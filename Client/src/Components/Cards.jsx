import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      <div className='justify-center items-center flex'>
        <Card
          title='Environment'
          imageUrl='https://picsum.photos/id/54/400/300'
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>
      <div className='justify-center items-center flex'>
        <Card
          title='Environment'
          imageUrl='https://picsum.photos/id/54/400/300'
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>
      <div className='justify-center items-center flex'>
        <Card
          title='Environment'
          imageUrl='https://picsum.photos/id/54/400/300'
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>
      <div className='justify-center items-center flex'>
        <Card
          title='Environment'
          imageUrl='https://picsum.photos/id/54/400/300'
          body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>
    </div>
  )
}

export default Cards

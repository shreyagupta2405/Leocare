import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='flex mb-24 grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1'>
            <Card 
              title='Environment'
              imageUrl='https://picsum.photos/id/54/400/300'
              body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Environment'
              imageUrl='https://picsum.photos/id/54/400/300'
              body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            <Card
              title='Environment'
              imageUrl='https://picsum.photos/id/54/400/300'
              body='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
            </div>
  )
}

export default Cards

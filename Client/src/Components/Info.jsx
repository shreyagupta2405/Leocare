import React from 'react'
import Text from './Text'

function info() {
  return (
    <div className='p-4 mt-16 bg-purple-200 '>
    <div className='justify-center items-center mt-6'>
        <h1 className='text-3xl font-extrabold flex justify-center items-center text-gray-800'>The Leocare Organization</h1>
        <h3 className='mx-32 flex justify-center items-center text-center mt-2 text-gray-600'>
        Leocare foundation is a not-for profit company operating across India. Leocare operates a broad suite of projects and services aiming to improve the quality of life around the rural areas.
        </h3>
      </div>
        <div className='p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 '>
        <div className=' justify-center items-center flex'>
          <Text 
            title='Mission'
            body='To be committed to community development. To do good by passionately protecting the young and innocent,empathizing with the elderly and the underprivileged,aiding the poor and healing the sick .'
          />
          </div>
          <div className='justify-center items-center flex'>
          <Text
          title='Vision'
          body='We wish to nurture children, educate the young, empower women,care for the elderly and  protect the environment.' />
          </div>
        </div>
        </div>
   
  )
}

export default info

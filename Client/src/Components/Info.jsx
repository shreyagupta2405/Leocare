import React from 'react'
import Text from './Text'
import {useState, useEffect} from 'react'
import aboutService from '../api/about.service'

function Info() {
  const [eventData, setEventData] = useState([]);

  const getAllEventFromStore = async () => {
    try {
        const data = await aboutService.getAllEvents()
        let arr = []
        data.forEach((doc) => {
            arr.push({...doc.data(), id: doc.id})
        })
        setEventData(arr)
    } catch (err) {
        console.log(err);
    }
}

useEffect(() => {
  getAllEventFromStore()
}, [])

  return (
    <div >
    <div className=' p-4 mt-6 bg-purple-200 '>
      <div className='justify-center items-center mt-6'>
        {/* <h1 className='text-3xl font-extrabold flex justify-center items-center text-gray-800'>The Leocare Organization</h1> */}
        <h1 className=' flex justify-center items-center text-3xl text-center mt-2 text-gray-600 font-extrabold'>
          The Leocare Foundation
        </h1>
        <h3 className=' flex flex-row justify-center items-center text-center mt-2 text-gray-600'>
        {
        eventData.slice(0, 1)?.map((data) => {
        return(
          <div className='flex flex-row'>{data?.about}</div>
          )
          })
        }
        </h3>
      </div>
      <div className=' mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 '>
        <div className=' col-span-1 justify-center items-center flex h-35'>
        {
          eventData.slice(0, 1)?.map((data) => {
        return(
          <div className='flex flex-row'><Text
            title='Mission'
            body={data?.mission}
          /></div>
          )
          })
        }
        </div>
        <div className='col-span-1  justify-center items-center flex h-35'>
        {
          eventData.slice(0, 1)?.map((data) => {
        return(
          <div className='flex flex-row'><Text
            title='Vision'
            body={data?.vision}
          /></div>
          )
          })
        }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Info

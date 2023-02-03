import React from 'react'
import Blog from '../Components/Blog'
import { useState, useEffect } from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai'

import docsService from '../api/docs.service'

function Docs() {
  const [eventData, setEventData] = useState([]);
  const getAllEventFromStore = async () => {
    try {
        const data = await docsService.getAllEvents()
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
    <div className=' text-center p-10 text-4xl text-gray-700 flex flex-col justify-center items-center'>
      Financial Documents of Leocare Foundation
      <div >

      { eventData?<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">{
        eventData?.map((data) => {
        return(
          <div className='text-md justify-center items-center flex py-8 gap-8 p-16'>

          <div className='text-sm flex flex-col shadow-xl p-5 justify-center items-center rounded-lg'>
            
            <a target='_blank' className='hover:scale-90 text-lg rounded-lg w-36 h-10 bg-purple-500 text-white text-center flex justify-center items-center hover:bg-purple-700' href={data?.url}>
                <AiOutlineInfoCircle className='m-1' />
                  View pdf</a>
            <div className='text-lg p-3'>{data?.content}</div>
          </div>
          
        </div>
        )
      }) 
      }</div>:
      <div><h4>No Events to Display</h4></div>
        }

      
      </div>
    </div>
  )
}

export default Docs

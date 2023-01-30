import React from 'react'
import Blog from '../Components/Blog';
import b from '../Components/images/b.png'
import { useState, useEffect } from 'react'

import environmentService from '../api/environment.service'


function Env() {
  const [eventData, setEventData] = useState([]);
  const getAllEventFromStore = async () => {
    try {
        const data = await environmentService.getAllEvents()
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
    <div className='my-4 mb-16'>
    <div className='p-6 text-3xl text-gray-700 flex flex-col justify-center items-center'>
    Our Impact On the Environment
    </div>
      
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

      {eventData?.map((data) => {
        return(
          <div className='justify-center items-center flex py-8'>
        <Blog
          title={data?.heading}
          imageUrl={data?.url}
          body={data?.content}
          date={data?.date}
        />
      </div>
        )
        
      }) 
      }
      
    </div>


    </div>
  )
}

export default Env;

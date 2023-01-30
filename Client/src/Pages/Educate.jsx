import React from 'react'
import Blogs from '../Components/Blogs';
import Blog from '../Components/Blog';
import img from '../Components/images/kid.png'
import { useState, useEffect } from 'react'

import educateService from '../api/educate.service'

function Educate() {

  const [eventData, setEventData] = useState([]);

  const getAllEventFromStore = async () => {
    try {
        const data = await educateService.getAllEvents()
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
    <div>
      <div className='p-6 text-4xl text-gray-700 flex flex-col justify-center items-center'>
        Educate a Child
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
      }) }

      
      </div>

      <div className='my-24 shadow-xl grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
        <div className='grid place-items-center bg-white font-serif text-center text-gray-700'>
          <div className='text-4xl lg:text-5xl p-4'>Contact Information</div>
          <div className='text-2xl grid place-items-center'>
            <div className='p-2'>Mobile: <br></br> +91 9398695177 / 9550001512 </div>
            <div className=''><br />Email: <br />support@leocare.org</div>
          </div>
          <div className='text-sm font-sans p-4'> © 2022 Leocare</div>
        </div>
        <div className='text-center'>
        <img src={img} className=' w-full'></img>
        </div>
      </div>


    </div>
  )
}

export default Educate;
//9398695177
//9550001512 Email: leocarefoundation@gmail.com
import React from 'react'
import Blogs from '../Components/Blogs';
import Blog from '../Components/Blog';
import img from '../Components/images/kid.png'
import { useState, useEffect } from 'react'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import AnchorLink from "react-anchor-link-smooth-scroll";

import elderlyService from '../api/elderlycare.service'

function ElderlyCare() {

  const [eventData, setEventData] = useState([]);

  const getAllEventFromStore = async () => {
    try {
      const data = await elderlyService.getAllEvents()
      let arr = []
      data.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id })
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
        Elderly Care
      </div>
      <div >

        {eventData ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">{
          eventData?.map((data) => {
            return (
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
        }</div> :
          <div><h4>No Events to Display</h4></div>
        }

      </div>
      
      

    </div>
  )
}

export default ElderlyCare;
//9398695177
//9550001512 Email: leocarefoundation@gmail.com
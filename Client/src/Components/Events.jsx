import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import img1 from './images/children.jpeg'
import img2 from './images/env.jpeg'
import img3 from './images/healthcamp2.jpeg'
import img4 from './images/healthcamp.jpeg'
import { useState, useEffect } from 'react'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
// import { useForm } from 'react-hook-form'
import FormInputComponent from './FormInputComponent'
import FormTextInput from '../Components/FormTextInput'
import { auth, storage, db } from '../firebaseConfig'
import { v4 } from 'uuid'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

import eventsService from '../api/events.service'

function Events() {
  const [image, setImage] = useState(null);
  const [eventData, setEventData] = useState([]);

  const getAllEventFromStore = async () => {
    try {
      const data = await eventsService.getAllEvents()
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
    console.log(eventData)
    getAllEventFromStore()
  }, [])

  return (


    <div className='my-16 p-4 grid sm:grid-cols-1 lg:grid-cols-2'>
      <div className=''>

        <div className=' text-center text-4xl text-gray-700 font-extrabold p-4 '>Upcoming Events</div>

        {/* 1st card */}
        {console.log(eventData)}
        {
           eventData?.map((data, key) => {
              return(
                <div key={key} className='text-center lg:text-left grid sm:grid-cols-1 lg:grid-cols-2 p-8 '>
                <div className='mx-auto'>
                  <img className='h-36' src={data?.url}></img>
                </div>
                <div className='grid p-2 '>
                  <div className='text-md'>{data?.heading}</div>
                  <div className='text-sm 
                    '>{data?.date}
                    </div>
                  <div className='text-sm text-gray-500'>{data?.content}</div>
                  <AnchorLink href="#contactus" className='text-blue-500 hover:text-blue-700'>Contact Us</AnchorLink>
                </div>
  
              </div>
              )})
        }

        {/* end of cards section */}

      </div>


      {/* second section */}
      <div>
        <div className='text-4xl text-gray-700 font-extrabold p-4 text-left'>Educate a Child</div>
        <div className='bg-gray-100 m-2 pt-2 mt-10 '>
          <div className='grid sm:grid-cols-1 lg:grid-cols-2 m-10'>
            <div className=''>
              <img src={img1} className='h-80' ></img></div>
            <div className='grid place-items-center'>
              <div className='text-2xl mt-4 p-1 text-center'>
                <div>Sponsor Your Child </div>
                <div className='text-sm'>Change their Lives</div>
              </div>

              <div className='text-gray-600 p-6 text-center mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur.
              </div>

            </div>

          </div>
          <div className='text-center text-lg my-2 p-2 pb-6 '>
            <div className='my-1'>If you want to know more </div>
            <button className='mx-auto grid place-items-center rounded-md bg-blue-500 text-white w-36 h-10 text-xl'><a href='/educate'>Read More</a></button>
          </div>

        </div>
      </div>
    </div>
  )

}

export default Events

import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import img1 from './images/children.jpeg'
import img2 from './images/env.jpeg'
import img3 from './images/healthcamp2.jpeg'
import img4 from './images/healthcamp.jpeg'
import { useState, useEffect } from 'react'
import eventsService from '../api/events.service'
import volunteerService from '../api/volunteer.service'


function Events() {
  const [image, setImage] = useState(null);
  const [eventData, setEventData] = useState([]);
  const [eduData, setEduData] = useState([]);
  const [VolunteerData, setVolunteerData] = useState([]);

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


  const getAllEventFromStore2 = async () => {
    try {
      const data = await volunteerService.getAllVolunteer()
      let arr = []
      data.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id })
      })
      setVolunteerData(arr)
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getAllEventFromStore();
    getAllEventFromStore2();
  }, [])

  return (


    <div className='my-8 mt-16 grid sm:grid-cols-1 lg:grid-cols-2'>
      <div className=''>

        <div className=' text-center text-4xl text-gray-700 font-extrabold py-4 '><a href='/events'>Upcoming Events</a></div>

        {/* 1st card */}
        {/* {console.log(eventData)} */}
        {eventData ? <div>{eventData.slice(0, 3)?.map((data, key) => {
          return (
            <div key={key} className='text-center lg:text-left grid sm:grid-cols-1 lg:grid-cols-2 p-6 '>
              <div className='flex justify-center items-center'>
                <img className='h-36' src={data?.url}></img>
              </div>
              <div className='grid p-2 '>
                <div className='text-md'>{data?.heading}</div>
                <div className='text-sm 
                    '>{data?.date}
                </div>
                <div className='text-sm text-gray-500'>{data?.content}</div>
                <a href="/events" className='text-blue-500 hover:text-blue-700'>Read More</a>
              </div>

            </div>
          )
        })}</div> :
          <div><h4>No Events to show, Please wait</h4></div>
        }

        {/* end of cards section */}

      </div>


      {/* second section */}
      {/* {console.log(eduData)} */}
      <div>
        <div className='text-4xl text-gray-700 font-extrabold p-4 text-center lg:text-left'>Volunteer For A Greater Cause</div>
        <div className='bg-gray-100 shadow-lg pt-2 mt-10 mx-6'>
          {/* <div className='grid sm:grid-cols-1 lg:grid-cols-2 m-10'> */}
          {VolunteerData ? <div>{VolunteerData.slice(0, 1)?.map((data, key) => {
            return (
              <div className='flex flex-col lg:flex-row items-center justify-center py-4' key={key}>
                
                  <div><img src={data?.url} className='h-80' ></img></div>
                  <div className='grid place-items-center w-72'>
                    <div className='text-2xl mt-4 p-1 text-center'>
                      <div>{data?.heading} </div>
                    
                    <div className='text-xl'>Change their Lives</div>
                  </div>

                  <div className='text-gray-600 p-4 text-center mb-10'>
                    {data?.content}
                  </div>
                </div>
              </div>
            )

          })}</div> :
            <div><h4>No Events to display</h4></div>


          }
          {/* <div className=''>
              <img src={img1} className='h-80' ></img></div>
            <div className='grid place-items-center'>
              <div className='text-2xl mt-4 p-1 text-center'>
                <div>Sponsor Your Child </div>
                <div className='text-sm'>Change their Lives</div>
              </div>

              <div className='text-gray-600 p-6 text-center mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur.
              </div>

            </div> */}

          {/* </div> */}
          <div className='text-center text-lg my-2 p-2 pb-6 '>
            <div className='p-1 my-1 text-gray-700 text-xl'>Sign Up for our program using the link below </div>
            <div className='flex items-center justify-center'>
              <button className='mt-4 grid place-items-center rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-gradient-to-r text-white w-36 h-10 text-xl'><a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSe7N5x_2RHfwKiDIQeOS73F5yvHc0n_z1E0aT12Nk03HZ55-Q/viewform'>Volunteer</a></button></div>
          </div>

        </div>
      </div>
    </div>
  )

}

export default Events

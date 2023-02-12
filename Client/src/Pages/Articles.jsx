import React from 'react'
import { useState, useEffect } from 'react'
import FormInputComponent from '../Components/FormInputComponent'
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
import newsService from '../api/news.service'
import img1 from './images2/news1.jpeg';
import img2 from './images2/news2.jpeg';
import img3 from './images2/news3.jpeg';
import img4 from './images2/news4.jpeg';
import img5 from './images2/news5.jpeg';
import img6 from './images2/news6.jpeg';
import img7 from './images2/news7.jpeg';
import img8 from './images2/news8.jpeg';

function Articles() {
  const [eventData, setEventData] = useState([]);

  const getAllEventFromStore = async () => {
    try {
      const data = await newsService.getAllEvents()
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
      <div className='p-6 text-4xl text-gray-700 flex flex-col text-center justify-center items-center'>

        Leocare in News
      </div>

      <div className='flex flex-col items-center justify-center'>
        <div >

          {
            eventData ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>{
              eventData?.map((data) => {
                return (
                  <div className='p-4 m-8 justify-center  items-center'>
                    <img className='w-96 p-4' src={data?.url}></img>
                    <div className='my-4 p-4 rounded-lg shadow-lg hover:shadow-2xl text-gray-500'>
                      <div className='text-center text-xl text-black '>{data?.heading}</div>
                      <div className='text-center'>{data?.content}</div>
                    </div>
                  </div>
                )
              })
            }</div> :
              <div><h4>No Events to Display</h4></div>
          }

        </div>
      </div>

    </div>
  )
}

export default Articles

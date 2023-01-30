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
import envHomeService from '../api/envHome.service'
import volunteerService from '../api/volunteer.service'
import skillhomeService from '../api/skillhome.service'

import Card from './Card'
import img1 from "./images/envv.jpg";
import img2 from "./images/skill.jpg";
import imgv from './images/volunteer.jpeg';
import img3 from "./images/kid.png";

function Cards() {
  const [eventData, setEventData] = useState([]);
  const [VolunteerData, setVolunteerData] = useState([]);
  const [SkillData, setSkillData] = useState([]);

  const getAllEventFromStore = async () => {
    try {
        const data = await envHomeService.getAllEvents()
        let arr = []
        data.forEach((doc) => {
            arr.push({...doc.data(), id: doc.id})
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
          arr.push({...doc.data(), id: doc.id})
      })
      setVolunteerData(arr)
  } catch (err) {
      console.log(err);
  }
}

const getAllEventFromStore3 = async () => {
  try {
      const data = await skillhomeService.getAllSkill()
      let arr = []
      data.forEach((doc) => {
          arr.push({...doc.data(), id: doc.id})
      })
      setSkillData(arr)
  } catch (err) {
      console.log(err);
  }
}

  useEffect(() => {
    getAllEventFromStore()
    getAllEventFromStore2()
    getAllEventFromStore3()
  }, [])

  return (
    <div id='cards'>
    <div className='text-primary font-semibold lg:text-[2rem] text-[1.4rem] my-8 text-center'>
                Journey to change the world starts here
                </div>
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      
     { eventData?.map((data) => {
      return (
        <div className='justify-center items-center flex'>
        <Card
          link={'env'}
          title='Environment'
          imageUrl={data?.url}
          body={data?.content}
        />
        </div>
       )
       })
      }
      { VolunteerData?.map((data) => {
      return (
        <div className='justify-center items-center flex'>
        <Card
          link=''
          title='Volunteer'
          imageUrl={data?.url}
          body={data?.content}
        />
        </div>
       )
       })
      }
      { SkillData?.map((data) => {
      return (
        <div className='justify-center items-center flex'>
        <Card
          link={'training'}
          title='Women&apos;s Skill Development'
          imageUrl={data?.url}
          body={data?.content}
        />
        </div>
       )
       })
      }
      
      
    </div>
    </div>
  )
}

export default Cards

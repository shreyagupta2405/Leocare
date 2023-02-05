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
import eduHomeService from '../api/eduHome.service'
import elderHomeService from '../api/elderHome.service'
import empowerHomeService from '../api/empowerHome.service'

import Card from './Card'
import img1 from "./images/envv.jpg";
import img2 from "./images/skill.jpg";
import imgv from './images/volunteer.jpeg';
import img3 from "./images/kid.png";

function Cards() {
  const [eventData, setEventData] = useState([]);
  const [VolunteerData, setVolunteerData] = useState([]);
  const [eduData, setEduData] = useState([]);
  const [SkillData, setSkillData] = useState([]);
  const [ElderData, setElderData] = useState([]);
  const [empowerData, setEmpowerData] = useState([]);

  const getAllEventFromStore = async () => {
    try {
      const data = await envHomeService.getAllEvents()
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
      const data = await eduHomeService.getAllEdu()
      let arr = []
      data.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id })
      })
      setEduData(arr)
    } catch (err) {
      console.log(err);
    }
  }

  const getAllEventFromStore3 = async () => {
    try {
      const data = await skillhomeService.getAllSkill()
      let arr = []
      data.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id })
      })
      setSkillData(arr)
    } catch (err) {
      console.log(err);
    }
  }
  const getAllEventFromStore4 = async () => {
    try {
      const data = await elderHomeService.getAllElders()
      let arr = []
      data.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id })
      })
      setElderData(arr)
    } catch (err) {
      console.log(err);
    }
  }
  const getAllEventFromStore5 = async () => {
    try {
      const data = await empowerHomeService.getAllEmpower()
      let arr = []
      data.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id })
      })
      setEmpowerData(arr)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllEventFromStore()
    getAllEventFromStore2()
    getAllEventFromStore3()
    getAllEventFromStore4()
    getAllEventFromStore5()
  }, [])

  return (
    <div id='cards'>
      <div className='text-gray-700 font-semibold lg:text-[2rem] text-[1.4rem] my-6 text-center'>
        Our Impact
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {empowerData ? <div>{empowerData.slice(0, 1)?.map((data) => {
          return (
            <div className='justify-center items-center flex'>
              <Card
                link={'empowerment'}
                title='Women Empowerment'
                imageUrl={data?.url}
                body={data?.content}
              />
            </div>
          )
        })}</div> :
          <div><h4>No Events to Display</h4></div>

        }
        {eduData ? <div>{eduData.slice(0, 1)?.map((data) => {
          return (
            <div className='justify-center items-center flex'>
              <Card
                link={'educate'}
                title='Child Education'
                target=''
                imageUrl={data?.url}
                body={data?.content}
              />
            </div>
          )
        })}</div> :
          <div><h4>No Events to Display</h4></div>

        }
        {SkillData ? <div>{SkillData.slice(0, 1)?.map((data) => {
          return (
            <div className='justify-center items-center flex'>
              <Card
                link={'training'}
                title='Skill Development'
                imageUrl={data?.url}
                body={data?.content}
              />
            </div>
          )
        })}</div> :
          <div><h4>No Events to Display</h4></div>

        }
      </div>

      <div className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:gap-8 lg:gap-0'>
        {ElderData ? <div>{ElderData.slice(0, 1)?.map((data) => {
          return (
            <div className='justify-center items-center flex'>
              <Card
                link={'elderlyCare'}
                title='Elderly Care'
                imageUrl={data?.url}
                body={data?.content}
              />
            </div>
          )
        })}</div> :
          <div><h4>No Events to Display</h4></div>
        }
        {eventData ? <div>{eventData.slice(0, 1)?.map((data) => {
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
        })}</div> :
          <div><h4>No Events to Display</h4></div>

        }
        
        <div>
        </div>

      </div>
    </div>
  )
}

export default Cards

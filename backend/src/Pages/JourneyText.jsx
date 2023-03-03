
import React from 'react'
import { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import FormInputComponent from '../Components/FormInputComponent'
import FormTextInput from '../Components/FormTextInput'

import journeyService2 from '../api/journey.service2'


function JourneyText() {
    const [image, setImage] = useState(null);
    const [eventData, setEventData] = useState([]);


    const validationSchema = yup.object().shape({
        heading: yup.string().required("Required Field"),
        content: yup.string().required(),
        
    });
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const addEventToStore = async (data, url) => {
        try {
            await journeyService2.addEvent(
                {
                    "content": data?.content,
                    "heading": data?.heading,
                }
            );

        } catch (err) {
            console.log(err);
        }
    }
    const onSubmit = async (data) => {
        addEventToStore(data)

    }
    
    const getAllEventFromStore = async () => {
        try {
            const data = await journeyService2.getAllEvents()
            let arr = []
            data.forEach((doc) => {
                arr.push({...doc.data(), id: doc.id})
            })
            setEventData(arr)
        } catch (err) {
            console.log(err);
        }
    }
    const deleteEvent = async (id) => {
        await journeyService2.deleteEvents(id);
        getAllEventFromStore();
    }
    useEffect(() => {
        getAllEventFromStore()
    }, [])

    
  return (
    <div class="lg:flex">
            <div class="lg:w-1/2 xl:max-w-screen-sm ">
                <div class="mt-2 px-2 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">

                    <div class="mt-2 bg-highlightBlue border border-borderColor p-4 rounded-lg">
                        <h2 class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-4xl
                    xl:text-bold ">Journey Text</h2>
                        <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
                        <FormInputComponent
                                label='Heading'
                                type='text'
                                name='heading'
                                placeholder='Enter the Heading'
                                control={control}
                                error={errors?.heading?.message}
                                required
                            />
                            <FormInputComponent
                                label='Content'
                                type='text'
                                name='content'
                                placeholder='Enter the Heading'
                                control={control}
                                error={errors?.content?.message}
                                required
                            />
                            
                            
                        </form>

                        <div class="mt-10">
                            <button type='submit' form='hook-form' class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg bg-white">
                                Submit
                            </button>
                        </div>
                    </div>

                    
                </div>

            </div>
            <div className='text-black text-center grid place-items-center p-4 w-1/2'>

                {
                    eventData &&
                    eventData.map((data) => {
                        console.log(data)
                        return (
                            <div className='p-2 m-4 w-5/6 outline-double'>
                                
                                <div className='flex justify-center items-center'>
                                    <h1 className='text-2xl font-bold'>{data?.heading}</h1>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className='text-xl'>{data?.date}</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className='text-xl'>{data?.content}</p>
                                </div>
                                <div className='m-2'>
                                {/* <button className='rounded-lg mx-2 bg-gray text-white w-20 h-8'>Edit</button> */}
                                <button className='rounded-lg mx-2 bg-red text-white w-20 h-8' onClick={(e) => deleteEvent(data?.id)}>Delete</button>
                                </div>
                                
                            </div>
                        )
                    })

                }
            </div>
        </div>
            
  )
}

export default JourneyText;

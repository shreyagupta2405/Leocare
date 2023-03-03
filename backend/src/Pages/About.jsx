import React from 'react'
import { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
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
import aboutService from '../api/about.service'


function About() {
    const [eventData, setEventData] = useState([]);
    const [bookId, setBookId, reset] = useState("");
    const [edit, setEdit] = useState(false);
    const [editImage, setEditImage] = useState(null);
    const [editId, setEditId] = useState(null);

    const validationSchema = yup.object().shape({
        about: yup.string(),
        mission:yup.string(),
        vision: yup.string()
    });
    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const addEventToStore = async (data, url) => {
        try {
            await aboutService.addEvent(
                {
                    "about": data?.about,
                    "mission" : data?.mission,
                    "vision": data?.vision
                }
            );
            getAllEventFromStore();
            reset();

        } catch (err) {
            console.log(err);
            setEditId(null);
            setEdit(false);
            reset();
            setEditImage(null);
        }
    }
    const updateEventToStore = async (data, url) => {
        console.log("editId", data)

        try {
            await aboutService.updateEvent(
                editId,
                {
                    "about": data?.about,
                    "mission" : data?.mission,
                    "vision": data?.vision
                },
            );
            setEditId(null);
            setEdit(false);
            setEditImage(null);
            reset();
        } catch (err) {
            console.log(err);
            setEditId(null);
            setEdit(false);
            setEditImage(null);
        }
    }
    const onSubmit = async (data) => {
        addEventToStore(data)   
    }
    
    const getAllEventFromStore = async () => {
        try {
            const data = await aboutService.getAllEvents()
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
        await aboutService.deleteEvents(id);
        getAllEventFromStore();
    }
    const editHandler = async (id) => {
        setEdit(true);
        setEditId(id);
        const docSnap = await aboutService.getEvent(id);
        setValue('content', docSnap.data().content);
    };
    useEffect(() => {
        getAllEventFromStore()
    }, [])

    
  return (
    <div class="lg:flex">
            <div class="lg:w-1/2 xl:max-w-screen-sm ">
                <div class="mt-2 px-2 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">

                    <div class="mt-2 bg-highlightBlue border border-borderColor p-4 rounded-lg">
                        <h2 class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-2xl
                    xl:text-bold ">About Section</h2>
                        <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
                            
                            
                            <FormTextInput
                                label='About'
                                type='text'
                                name='about'
                                placeholder='Enter About'
                                control={control}
                                error={errors?.content?.message}
                                required
                            />
                            <FormTextInput
                                label='Mission'
                                type='text'
                                name='mission'
                                placeholder='Enter Mission'
                                control={control}
                                error={errors?.content?.message}
                                required
                            />
                            <FormTextInput
                                label='Vision'
                                type='text'
                                name='vision'
                                placeholder='Enter Vision'
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
                                </div>
                                <div className='flex justify-center items-center p-4'>
                                    <p className='text-xl rounded-lg shadow-md p-4'>
                                    <div className='font-bold'>About</div>
                                    {data?.about}</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className='text-xl rounded-lg shadow-md p-4'>
                                    <div className='font-bold'>Mission</div>
                                    {data?.mission}</p>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className='text-xl rounded-lg shadow-md p-4'>
                                    <div className='font-bold'>Vision</div>
                                    {data?.vision}</p>
                                </div>
                                <div className='m-2 pt-4'>
                                {/* <button className='rounded-lg mx-2 bg-gray text-white w-20 h-8' onClick={() => { editHandler(data?.id) }}>Edit</button> */}
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

export default About;

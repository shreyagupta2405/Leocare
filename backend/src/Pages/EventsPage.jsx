import React from 'react'
import { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
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
import { toast } from "react-toastify";
import { toastArray } from '../Components/Toast'
import environmentService from '../api/environment.service'
import eventsPageService from '../api/eventspage.service'


function Environment() {
    const [image, setImage] = useState(null);
    const [eventData, setEventData] = useState([]);
    const [bookId, setBookId, reset] = useState("");
    const [edit, setEdit] = useState(false);
    const [editImage, setEditImage] = useState(null);
    const [editId, setEditId] = useState(null);


    const validationSchema = yup.object().shape({
        heading: yup.string().required("Required Field"),
        content: yup.string().required(),
        postDate: yup.string(),
    });
    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const addEventToStore = async (data, url) => {
        try {
            await eventsPageService.addEvent(
                {
                    "heading": data?.heading,
                    "content": data?.content,
                    "date": data?.postDate,
                    "url": url,
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
            await eventsPageService.updateEvent(
                editId,
                {
                    "heading" : data?.heading,
                    "url": url,
                    "content": data?.content,
                    "date": data?.date,
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
        if (edit) {
            if (image) {
                const imageRef = ref(storage, `images/${"1" + v4()}`);
                uploadBytes(imageRef, image).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        updateEventToStore(data, url)
                    }).catch((error) => {
                        console.log(error)
                        toast.error("Can't upload", toastArray);
                    });
                });
                setEditId(null);
                setEdit(false);
                setEditImage(null);
            } else {
                updateEventToStore(data, editImage);
                setEditId(null);
                setEdit(false);
                setEditImage(null);
            }
        } else {
            if (image) {
                const imageRef = ref(storage, `images/${"1" + v4()}`);
                uploadBytes(imageRef, image).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        addEventToStore(data, url)
                    }).catch((error) => {
                        console.log(error)
                        toast.error("Can't upload", toastArray);

                    });
                });
            }
            else {
                console.log("Please select an image")
                toast.error("Please select an image", toastArray);
            }
        }
    }
    
    const getAllEventFromStore = async () => {
        try {
            const data = await eventsPageService.getAllEvents()
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
        await eventsPageService.deleteEvents(id);
        getAllEventFromStore();
    }
    const editHandler = async (id) => {
        setEdit(true);
        setEditId(id);
        const docSnap = await eventsPageService.getEvent(id);
        setValue('content', docSnap.data().content);
        setValue('heading', docSnap.data().heading);
        setValue('date', docSnap.data().date);
        setEditImage(docSnap.data().url);
    };
    useEffect(() => {
        getAllEventFromStore()
    }, [])

    
  return (
    <div class="lg:flex">
            <div class="lg:w-1/2 xl:max-w-screen-sm ">
                <div class="mt-2 px-2 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">

                    <div class="mt-2 bg-highlightBlue border border-borderColor p-4 rounded-lg">
                        <h2 class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-4xl
                    xl:text-bold ">Upcoming Events</h2>
                        <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
                            <input type="file"
                                className=' w-full border-2 bg-white rounded-lg p-2 mt-4'
                                onChange={(event) => {
                                    if (event.target.files[0]) {
                                        setImage(event.target.files[0]);
                                    }
                                }} />
                                {editImage && (
                                <img src={editImage} alt="Edit" className="mt-4 w-full" />
                            )}
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
                                label='Date'
                                type='date'
                                name='postDate'
                                placeholder='Enter the Date'
                                control={control}
                                error={errors?.postDate?.message}
                                required
                            />
                            <FormTextInput
                                label='Content'
                                type='text'
                                name='content'
                                placeholder='Enter the Content'
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
                                    <img className='h-36
                                    ' src={data?.url
                                        } />
                                </div>
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
                                <button className='rounded-lg mx-2 bg-gray text-white w-20 h-8' onClick={() => { editHandler(data?.id) }}>Edit</button>
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

export default Environment;

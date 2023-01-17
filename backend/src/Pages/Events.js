import React from 'react'
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
import eventsService from '../api/events.service'
import { async } from '@firebase/util'
function Events() {
    const [image, setImage] = React.useState(null)
    const getTodayDate = () => {
        var date = new Date();

        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        var today = year + "-" + month + "-" + day;
        return today;
    }

    const validationSchema = yup.object().shape({
        heading: yup.string().required("Required Field"),
        content: yup.string().min(20).required(),
        // email: yup.string().email('Invalid Email').required("Required Field"),
        postDate: yup.string(),
        // image: yup.mixed().required('File is required'),
        //password: yup.string().required("Required Field").min(6)
    });
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = async (data) => {
        console.log(data)
        if (image) {
            let link;
            const imageRef = ref(storage, `images/${"1" + v4()}`);
            uploadBytes(imageRef, image).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    link = url;
                    
                }).catch((error) => {
                    console.log(error)

                });
            });
            try {
                await eventsService.addEvent(
                    {
                        "heading": data?.heading,
                        "content": data?.content,
                        "date": "data?.date",
                        "url": "link",
                        "timeStamp": new Date()
                    }
                );

            } catch (err) {
                console.log(err);
            }

        }
        else {
            console.log("Please select an image")
            toast.error("Please select an image", toastArray);
        }

    }
    return (
        <div class="lg:flex">
            <div class="lg:w-1/2 xl:max-w-screen-sm ">
                <div class="mt-2 px-2 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">

                    <div class="mt-2 bg-highlightBlue border border-borderColor p-4 rounded-lg">
                        <h2 class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-4xl
                    xl:text-bold ">Events</h2>
                        <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
                            <input type="file"
                                className=' w-full border-2 bg-white rounded-lg p-2 mt-4'
                                onChange={(event) => {
                                    if (event.target.files[0]) {
                                        setImage(event.target.files[0]);
                                    }
                                }} />
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
                <div className='p-2 m-4 w-5/6 outline-double'>
                    <div className='flex justify-center items-center'>
                        <img className='h-36' ></img></div>
                    <div className='p-1 '>Health Care & Wellness Camp</div>
                    <div className='p-1'>02/01/2023</div>
                    <div className='p-1  grid place-items-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. </div>
                </div>


                <div className='p-2 w-5/6 outline-double'>
                    <div className='flex justify-center items-center'>
                        <img className='h-36' ></img></div>
                    <div className='p-1 '>Health Care & Wellness Camp</div>
                    <div className='p-1'>02/01/2023</div>
                    <div className='p-1  grid place-items-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</div>
                </div>



            </div>

        </div>
    )
}

export default Events
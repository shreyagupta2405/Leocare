import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import FormInputComponent from '../Components/FormInputComponent'
import FormTextInput from '../Components/FormTextInput'
import { auth } from '../firebaseConfig'
import im from './images/img1.jpg';


function Events() {
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
        date: yup.string(),
        image: yup.mixed().required('File is required'),
        //password: yup.string().required("Required Field").min(6)
    });
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (data) => {
        console.log(data)
        auth.signInWithEmailAndPassword(data.email, data.password).then((userCredential) => {
            console.log("userCredential")
        }
        ).catch((error) => {
            console.log(error, "error")

        })
    }
    return (
        <div class="lg:flex">
            <div class="lg:w-1/2 xl:max-w-screen-sm">
                <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                    <h2 class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-4xl
                    xl:text-bold">Events</h2>
                    <div class="mt-12">
                        <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
                        {console.log(errors)}
                            <FormInputComponent
                                label='Image'
                                type='file'
                                name='image'
                                placeholder=''
                                control={control}
                                error={errors?.image?.message}
                                required
                            />
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
                                name='heading'
                                placeholder='Enter the Date'
                                control={control}
                                error={errors?.date?.message}
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
                                shadow-lg">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='text-black text-center grid place-items-center p-4 w-1/2'>
            <div className='p-2 m-4 w-5/6 outline-double'>
                <div className='flex justify-center items-center'>
                <img className='h-36' src={im}></img></div>
                <div className='p-1 '>Health Care & Wellness Camp</div>
                <div className='p-1'>02/01/2023</div>
                <div className='p-1  grid place-items-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. </div>
            </div>


            <div className='p-2 w-5/6 outline-double'>
                <div className='flex justify-center items-center'>
                <img className='h-36' src={im}></img></div>
                <div className='p-1 '>Health Care & Wellness Camp</div>
                <div className='p-1'>02/01/2023</div>
                <div className='p-1  grid place-items-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</div>
            </div>



            </div>
            
        </div>
    )
}

export default Events
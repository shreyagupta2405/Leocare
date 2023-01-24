import React, {useState, useRef} from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import FormInputComponent from '../Components/FormInputComponent'
import { auth, db, storage } from '../firebaseConfig'
import FormTextInput from '../Components/FormTextInput'
import { getDownloadURL } from 'firebase/storage'
function SignIn() {

    const validationSchema = yup.object().shape({
      content: yup.string().min(10).required(),
    });
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const [image, setImage] = useState(null);
    const msgRef = useRef(null)

    const onImageChange = (e) => {
      e.persist();
      const URL = e.target.files[0];
    }

    const onSubmitHandler  = (e) => {
      e.preventDefault();
        console.log("submitted");
        db.collection('env').add({
          content: msgRef.current.value,
        }).then(doc=>{
          if(image){
            const storageRef = storage.ref();
            var uploadTask = storageRef.child(`env/${doc.id}`).putString(image, 'data_url');

            setImage(null)
            uploadTask.on('state_changed',
            null,
            (error) => {
                console.log(error)
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().
              then((downloadURL) => {
                db.collection('env').doc(doc.id).set({
                  image:downloadURL
                },{merge:true})
              })
            });
          }
        })
        
    }
    const addImage = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        if(e.target.files[0]){
          reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
          setImage(readerEvent.target.result)
        }
    }
    return (
        <div class="lg:flex">
            <div class="lg:w-1/2 xl:max-w-screen-sm">
                
                <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                    
                    <div class="mt-12">
                    <h2 class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-4xl
                    xl:text-bold ">Environment/Home</h2>
                        <form id="hook-form" onSubmit={onSubmitHandler} >
                            <input type="file" onChange={addImage} className=' w-full border-2 bg-white rounded-lg p-2 mt-4' />
                            <FormTextInput
                                label='Content'
                                type='text'
                                name='content'
                                placeholder='Enter your Content'
                                control={control}
                                error={errors?.password?.message}
                                required
                            />
                            <input type='text' ref={msgRef} placeholder='Enter your Content' className=' w-full border-2 bg-white rounded-lg p-2 mt-4' />
                            
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
            <div className='w-96  m-36'>
            {image && (
                <img src={image} onClick={() =>setImage(null)}></img>
                  )}
            </div>
            
        </div>
    )
}

export default SignIn
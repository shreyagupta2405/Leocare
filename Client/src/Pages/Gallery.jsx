import React from 'react'
import img from '../Components/images/children.jpeg';
import galleryService from '../api/gallery.service'
import { useState, useEffect } from 'react'

function Gallery() {
    const [eventData, setEventData] = useState([]);

    const getAllEventFromStore = async () => {
        try {
            const data = await galleryService.getAllEvents()
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
                Leocare Image Gallery
            </div>
            {eventData ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 px-10 lg:px-20  items-center justify-center'>{eventData?.map((data, key) => {
                        return (
                            
                            <img src={data?.url} className="w-96 p-4 shadow-2xl hover:scale-105" />
                                
                        )
                    })}</div> :
                        <div><h4>No Events to show, Please wait</h4></div>
                    }
            
        </div>
   
  )
}

export default Gallery

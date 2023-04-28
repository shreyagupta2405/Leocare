import React from 'react'
import { useState, useEffect } from 'react'
import img from '../Components/images/team2.png'
import president from '../Components/images/president.jpeg'
import teamService from '../api/teampage.service'

function TeamsPage() {
    const [image, setImage] = useState(null);
    const [eventData, setEventData] = useState([]);

    const getAllEventFromStore = async () => {
        try {
            const data = await teamService.getAllEvents()
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
            <div className='p-6 text-4xl text-gray-700 flex flex-col justify-center items-center'>Meet Our Team</div>

            <div className=' '>


                {eventData ? <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{
                    eventData?.map((data) => {
                        return (
                            <div className='w-full justify-center items-center flex py-8 '>

                                <div className='bg-gray-100 p-4 drop-shadow-xl w-72 h-[31rem] overflow-scroll'>
                                    <div className='justify-center items-center flex '> <img src={data?.url} className='rounded-full w-48 h-48 border-solid border-4' ></img> </div>
                                    <div className='justify-center items-center grid grid-row text-center'>
                                        <div className='font-bold text-xl'>{data?.name}</div>
                                        <div>{data?.heading}</div>
                                        <div>{data?.designation}</div>
                                        <div className='px-4 py-2'>{data?.content}</div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }</div> :
                    <div><h4>No Events to Display</h4></div>
                }

            </div>
        </div>
    )
}

export default TeamsPage

import React from 'react'
import children from './images/children.jpeg'
import journeyService1 from '../api/journey.service1'
import journeyService2 from '../api/journey.service2'
import { useState, useEffect } from 'react'

function Journey() {
    const [image, setImage] = useState(null);
    const [eventData, setEventData] = useState([]);

    const [journeyData, setJourneyData] = useState([]);

    const getAllEventFromStore = async () => {
        try {
            const data = await journeyService1.getAllEvents()
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
            const data = await journeyService2.getAllText()
            let arr = []
            data.forEach((doc) => {
                arr.push({ ...doc.data(), id: doc.id })
            })
            setJourneyData(arr)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllEventFromStore()
        getAllEventFromStore2()
    }, [])


    return (
        <div >
            <div className='justify-center items-center mt-6'>
                {journeyData ? <div>{journeyData.slice(0, 1)?.map((data, key) => {
                    return (
                        <h1 className=' flex justify-center items-center text-3xl text-center mt-2 p-4 font-extrabold'>
                            {data?.heading}
                        </h1>
                    )
                })}</div> :
                    <div><h4>No Events to show, Please wait</h4></div>
                }


                <div className=' mx-auto py-12 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 '>
                <div className='w-full col-span-1 justify-around shadow-lg rounded-lg items-center grid h-35  p-8 '>
                    {eventData ? <div>{eventData.slice(0, 2)?.map((data, key) => {
                        return (
                            
                            <img src={data?.url} className="w-[200px] h-[200px] rounded-lg" />
                                
                        )
                    })}</div> :
                        <div><h4>No Events to show, Please wait</h4></div>
                    }
                    </div>
                    {/* <div className='w-full col-span-1 justify-around shadow-lg rounded-lg items-center flex h-35  p-8'>

                        <img src={children} className="w-[200px] h-[200px] rounded-lg" />
                        <img src={children} className="w-[200px] h-[200px] rounded-lg" />

                    </div> */}



                    <div className='col-span-1 rounded-lg shadow-lg justify-center items-center text-center text-lg p-4 flex h-35 text-black'>
                    {journeyData ? <div>{journeyData.slice(0, 1)?.map((data, key) => {
                    return (
                        <div className=' '>
                            {data?.content}
                        </div>
                    )
                })}</div> :
                    <div><h4>No Events to show, Please wait</h4></div>
                }
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journey

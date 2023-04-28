import React from 'react'
import img from "./images/team1.jpg";
import img2 from './images/team2.png'
// import president from './images/president.jpeg'
import president from './images/teamCEO.jpeg'
import vp from './images/team2vp.jpeg'
import vicepresident from './images/vicepresident.jpeg'
import { useState, useEffect } from 'react'

import teamService from '../api/team.service'

function Team() {
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
        <div id='team' className='bg-purple-100 block justify-center'>
            <div className='text-primary font-semibold lg:text-[2rem] 
        text-[1.4rem]  text-center mt-6'> <a href='/team'>Meet the Team</a>
            </div>

            <div className='text-center  text-lg'>Meet the team responsible for bringing enlightenment to so many lives</div>

            <div className='pt-2 px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='justify-center pt-6 '>
                    <div className='flex justify-center '>
                        <img id='team' className='mx-auto w-36 h-36 rounded-full' src={president}></img>
                    </div>
                    <div className='text-center font-extrabold' >
                        <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            UDP Latha<br></br>
                            U Durga Padma Latha

                        </h3> <br></br>
                        <h3 className='text-center text-gray-500 dark:text-gray-400'>
                            Founder || President <br></br>
                            Planning and Execution <br></br>
                        </h3>
                    </div>
                    
                </div>

                <div className='justify-center pt-6 '>
                    <div className='flex justify-center'>
                        <img id='team' className=' w-36 h-36 rounded-full' src={vp}></img>
                    </div>
                    <div className='text-center font-extrabold' >
                        <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                        Viswa Jyothi<br></br>
                            

                        </h3> <br></br>
                        <h3 className='text-center text-gray-500 dark:text-gray-400'>
                            Vice President<br></br>
                            Implementation <br></br>
                        </h3>
                    </div>
                </div>
            </div>

            {eventData ? <div className="justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 mx-20 ">{
                eventData?.map((data) => {
                    return (
                        <div className='justify-center block p-4'>
                            <div className='flex justify-center'>
                                <img id='team' className='mx-auto  w-36 h-36 rounded-full' src={data.url}></img>
                            </div>
                            <div className='text-center font-extrabold' >
                                <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                                    {data.name} <br></br>

                                </h3> <br></br>
                                <h3 className='text-center text-gray-500 dark:text-gray-400'>
                                    {data.heading} <br></br>
                                    {data.designation}<br></br>
                                </h3>
                            </div>
                        </div>
                    )
                })
            }</div> :
                <div><h4>No Events to Display</h4></div>
            }




        </div>
    );
}

export default Team;

// function team() {
//     return (
//     <div className='bg-purple-200 block justify-center my-8'>
//         <div className='bg-purple-200 text-primary font-semibold lg:text-[2rem] text-[1.4rem] my-16 text-center'> Meet the Team </div>

//         <div className='justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
//             <div className='justify-center block'>
//                 <div className='flex justify-center'>
//                     <img className='mx-auto mb-4 w-36 h-36 rounded-full' src={img}></img> </div>
//                     <div className='text-center font-extrabold' >
//                     U D P LATHA Durga Padma Latha <br></br>
//                     President <br> </br>
//                     Founder | CEO </div>
//                 </div> 
//                 <div className='justify-center items-center block'> 
//                     <div className='flex justify-center' >
//                      <img className='mx-auto mb-4 w-36 h-36 rounded-full' src={img}> </img>
//                 </div>
//                 <div className='text-center font-extrabold'>
//                 Viswa Jyothi <br> </br> 
//                 Vice President <br> </br> 
//                 | Compliance | 
//                 </div> 
//             </div>
//         </div> 
//     </div>
//     );
// }

// export default team;

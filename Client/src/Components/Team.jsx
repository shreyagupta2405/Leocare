import React from 'react'
import img from "./images/team1.jpg";
import img2 from './images/team2.png'
import './team.css'

function team() {
    return (
        <div className='bg-purple-100 block justify-center'>
            <div className='text-primary font-semibold lg:text-[2rem] 
        text-[1.4rem]  text-center mt-6'> Meet the Team
            </div>

            <div className='text-center  text-lg'>Meet the team responsible for bringing enlightenment to so many lives</div>
            <div className='p-2'>
            <div className='justify-center block p-4'>
                    <div className='flex justify-center'>
                        <img id='team' className='mx-auto mb-4 w-36 h-36' src={img}></img>
                    </div>
                    <div className='text-center font-extrabold' >
                        <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            Latha <br></br>
                            U Durga Padma Latha
                        </h3> <br></br>
                        <h3 className='text-center text-gray-500 dark:text-gray-400'>
                            President <br></br>
                            Founder | CEO <br></br>
                        </h3>
                    </div>
                </div>
            </div>


            


            <div className='justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 mb-12 mx-20'>

                <div className='justify-center block p-4'>
                    <div className='flex justify-center'>
                        <img id='team' className='mx-auto mb-4 w-36 h-36' src={img}></img>
                    </div>
                    <div className='text-center font-extrabold' >
                        <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            Latha <br></br>
                            U Durga Padma Latha
                        </h3> <br></br>
                        <h3 className='text-center text-gray-500 dark:text-gray-400'>
                            President <br></br>
                            Founder | CEO <br></br>
                        </h3>
                    </div>
                </div>

                <div className='justify-center block p-4'>
                    <div className='flex justify-center'>
                        <img id='team' className='mx-auto mb-4 w-36 h-36 ' src={img2}></img>
                    </div>
                    <div className='text-center font-extrabold' >
                        <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            Viswa Jyothi
                        </h3> <br></br>
                        <h3 className='text-center text-gray-500 dark:text-gray-400'>
                            Vice President <br></br>
                            | Compliance | <br></br>
                        </h3>
                    </div>
                </div>
                <div className='justify-center block p-4'>
                    <div className='flex justify-center'>
                        <img id='team' className='mx-auto mb-4 w-36 h-36' src={img2}></img>
                    </div>
                    <div className='text-center font-extrabold' >
                        <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            Viswa Jyothi
                        </h3> <br></br>
                        <h3 className='text-center text-gray-500 dark:text-gray-400'>
                            Vice President <br></br>
                            | Compliance | <br></br>
                        </h3>
                    </div>
                </div>
                <div className='justify-center block p-4'>
                    <div className='flex justify-center'>
                        <img id='team' className='mx-auto mb-4 w-36 h-36' src={img}></img>
                    </div>
                    <div className='text-center font-extrabold' >
                        <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                            Latha <br></br>
                            U Durga Padma Latha
                        </h3> <br></br>
                        <h3 className='text-center text-gray-500 dark:text-gray-400'>
                            President <br></br>
                            Founder | CEO <br></br>
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default team;

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

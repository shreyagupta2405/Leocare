import React, { useEffect, useState } from 'react'
import { HospitalBlueIcon, HospitalWhiteIcon } from '../Components/Icons'
import Cards from "../Components/Cards";
import Blogs from "../Components/Blogs";
import Stats from "../Components/Stats";
function Home() {

    const [isShownCard1, setIsShownCard1] = useState(false);

    return (
        <div>
            <div className="container mt-16 flex flex-col mx-auto p-4">

                <div className='flex flex-row items-center justify-center gap-10 my-4'>
                    <div className='text-primary font-semibold text-[2rem]'>
                        Show you care, Change their world
                    </div>
                    <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        DONATE
                    </button>

                </div>


                <div id="carouselExampleCaptions" className="carousel slide relative w-full " data-bs-ride="carousel">
                    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner relative w-full overflow-hidden">
                        <div className="carousel-item active relative float-left w-full">
                            <img
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                                className="block w-full rounded-lg"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                                className="block w-full  rounded-lg"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                                className="block w-full rounded-lg"
                                alt="..."
                            />
                            <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-xl">Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className='text-center text-primary font-semibold text-[2rem] my-16'>
                    Journey to change the world starts here
                </div>

                <div className='flex flex-row gap-4 justify-center '>

                    <div
                        onMouseEnter={() => setIsShownCard1(true)}
                        onMouseLeave={() => setIsShownCard1(false)}
                        class={`flex justify-center rounded-lg ${isShownCard1 ? "bg-primary": "bg-white"}`}>
                        <div className={` block p-6 rounded-lg shadow-lg `}>
                            <div className={`${isShownCard1 ? "bg-white" :"bg-primary"} p-4 rounded-lg shadow-xl w-[5rem]`}>
                                {isShownCard1 ? <HospitalBlueIcon /> : <HospitalWhiteIcon  />}
                            </div>

                            <p class={`${isShownCard1 ? "text-white": "text-primary"} text-base mb-4  mt-4`}>
                                Educate a Child
                            </p>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div>
                <div className='mt-20 text-center text-primary font-semibold text-[2rem] my-16'>
                    Our Impact
                </div>
                <Cards />
                <div className='mt-20 text-center text-primary font-semibold text-[2rem] my-16'>
                    Blog Posts
                </div>
            <Blogs />
            <Stats />
            </div>
            
        </div>
        
    )
}

export default Home
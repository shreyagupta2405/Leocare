import React, { useEffect, useState } from 'react'
import { HospitalBlueIcon, HospitalWhiteIcon } from '../Components/Icons'
import Cards from "../Components/Cards";
import Blogs from "../Components/Blogs";
import Stats from "../Components/Stats";
function Home() {

    const [isShownCard1, setIsShownCard1] = useState(false);

    return (
        <div>
            <div className="container mt-8 flex flex-col mx-auto p-4">

                <div className='flex flex-row items-center justify-center gap-10 my-4'>
                    <div className='text-primary font-semibold lg:text-[2rem] text-[1.4rem]'>
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

                <div className='text-primary font-semibold lg:text-[2rem] text-[1.4rem] my-16 text-center'>

                    Journey to change the world starts here
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">

                    <div
                        onMouseEnter={() => setIsShownCard1(true)}
                        onMouseLeave={() => setIsShownCard1(false)}
                        class={`flex justify-center rounded-lg `}>
                        <div className={` block p-6 rounded-lg shadow-lg ${isShownCard1 ? "bg-primary" : "bg-white"}`}>
                            <div className={`${isShownCard1 ? "bg-white" : "bg-primary"} p-4 rounded-lg shadow-xl w-[5rem]`}>
                                {isShownCard1 ? <HospitalBlueIcon /> : <HospitalWhiteIcon />}
                            </div>

                            <p class={`${isShownCard1 ? "text-white" : "text-primary"} text-base mb-4  mt-4`}>
                                Educate a Child
                            </p>
                        </div>
                    </div>

                    <div
                        onMouseEnter={() => setIsShownCard1(true)}
                        onMouseLeave={() => setIsShownCard1(false)}
                        class={`flex justify-center rounded-lg `}>
                        <div className={` block p-6 rounded-lg shadow-lg ${isShownCard1 ? "bg-primary" : "bg-white"}`}>
                            <div className={`${isShownCard1 ? "bg-white" : "bg-primary"} p-4 rounded-lg shadow-xl w-[5rem]`}>
                                {isShownCard1 ? <HospitalBlueIcon /> : <HospitalWhiteIcon />}
                            </div>

                            <p class={`${isShownCard1 ? "text-white" : "text-primary"} text-base mb-4  mt-4`}>
                                Educate a Child
                            </p>
                        </div>
                    </div>

                    <div
                        onMouseEnter={() => setIsShownCard1(true)}
                        onMouseLeave={() => setIsShownCard1(false)}
                        class={`flex justify-center rounded-lg`}>
                        <div className={` block p-6 rounded-lg shadow-lg ${isShownCard1 ? "bg-primary" : "bg-white"}`}>
                            <div className={`${isShownCard1 ? "bg-white" : "bg-primary"} p-4 rounded-lg shadow-xl w-[5rem]`}>
                                {isShownCard1 ? <HospitalBlueIcon /> : <HospitalWhiteIcon />}
                            </div>

                            <p class={`${isShownCard1 ? "text-white" : "text-primary"} text-base mb-4  mt-4`}>
                                Educate a Child
                            </p>
                        </div>
                    </div>

                </div>


                <div className='text-primary font-semibold lg:text-[2rem] text-[1.4rem] my-16 text-center'>
                    Our Impact
                </div>
                <Cards />
                <div className='text-primary font-semibold lg:text-[2rem] text-[1.4rem] my-16 text-center'>
                    Blog Posts
                </div>
                <Blogs />
                {/* <Stats /> */}
            </div>

        </div>

    )
}

export default Home
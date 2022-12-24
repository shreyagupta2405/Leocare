import React, { useEffect, useState } from 'react'
import Cards from "../Components/Cards";
import Blogs from "../Components/Blogs";
import Stats from "../Components/Stats";
import Team from '../Components/Team';
import Info from '../Components/Info';
import Donate from '../Components/Donate';
import Events from '../Components/Events';
import Testimonial from '../Components/Testimonial';
import h1 from "../Components/images/home1.jpg";
import h2 from "../Components/images/home2.jpg";
import h3 from "../Components/images/home3.png";

function Home() {

    const [isShownCard1, setIsShownCard1] = useState(false);

    return (
        <div>
            <div className="  flex flex-col  ">
                <div>
                    <div id="carouselExampleCaptions" className=" carousel slide relative w-full " data-bs-ride="carousel">
                        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center  mb-4">
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
                                    src={h1}
                                    className="block rounded-lg w-full h-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-4xl">Show you care, change their world</h5>
                                    
                                </div>
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src={h2}
                                    className="block rounded-lg w-full h-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-4xl">Show you care, change their world</h5>
                                </div>
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src={h3}
                                    className="block rounded-lg w-full h-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-4xl">Show you care, change their world</h5>
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
                </div>


                <div className='py-8 flex flex-col justify-center items-center'>
                <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold text-2xl rounded-lg px-5 py-2.5 text-center 
                w-40 ">
                        DONATE
                    </button>
                    <Donate />
                </div>



                <Info />
                <Events />
                <Cards />
                {/* <Testimonial /> */}
                <Stats />
                <Team />

            </div>
        </div>

    )
}

export default Home
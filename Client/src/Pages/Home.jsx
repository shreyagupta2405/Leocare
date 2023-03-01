import React, { useEffect, useState } from 'react'
import Cards from "../Components/Cards";
import Blogs from "../Components/Blogs";
import Stats from "../Components/Stats";
import Journey from '../Components/Journey';
import Team from '../Components/Team';
import Info from '../Components/Info';
import Events from '../Components/Events';
import scan from '../Components/images/scan.jpeg'
import img from '../Components/images/news.jpg'
import h1 from "../Components/images/home1.jpg";
import h2 from "../Components/images/home2.jpg";
import h3 from "../Components/images/home3.png";
import h4 from "../Components/images/home4.jpeg";
import h5 from "../Components/images/home5.jpeg";
import h6 from "../Components/images/home6.jpeg";
import h7 from "../Components/images/home7.jpeg";
import h8 from "../Components/images/home8.jpeg";
import h9 from "../Components/images/home9.jpeg";
import h10 from "../Components/images/home10.jpeg";
import h11 from "../Components/images/home11.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import bannerService from '../api/banner.service'


function Home() {

    const [isShownCard1, setIsShownCard1] = useState(false);
    const [image, setImage] = useState(null);
    const [eventData, setEventData] = useState([]);

    const getAllEventFromStore = async () => {
        try {
            const data = await bannerService.getAllEvents()
            let arr = []
            data.forEach((doc) => {
                arr.push({...doc.data(), id: doc.id})
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
            <div className="flex flex-col">
                <div>
                    <div id="carouselExampleCaptions" className=" carousel slide relative w-full " data-bs-ride="carousel">
                        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center mb-4">
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
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="3"
                                aria-label="Slide 4"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="4"
                                aria-label="Slide 5"
                            ></button>

                        </div>

                        


                        <div className="carousel-inner relative w-full overflow-hidden">
                        
                        
                            <div className="carousel-item active relative float-left w-full">
                                <img
                                    src={h6}
                                    className="block rounded-lg w-full h-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-2xl text-white font-serif">Show you care, change their world</h5>

                                </div>
                            </div>


                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src={h7}
                                    className="block rounded-lg w-full h-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-2xl text-white font-serif">Show you care, change their world</h5>
                                </div>
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src={h11}
                                    className="block rounded-lg w-full h-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-2xl text-white font-serif">Show you care, change their world</h5>
                                </div>
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src={h4}
                                    className="block rounded-lg w-full h-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-2xl text-white font-serif">Show you care, change their world</h5>
                                </div>
                            </div>
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src={h10}
                                    className="block rounded-lg w-full h-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                <h5 className="text-2xl text-white font-serif">Show you care, change their world</h5>
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


                <div className='py-8 flex flex-row gap-8 justify-center items-center'>

                    <button id='info' type="button" className="mt-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold text-2xl rounded-lg px-5 py-2.5 text-center 
                w-40 ">
                        <a href='https://pages.razorpay.com/leocarefoundation' target="_blank">DONATE</a>
                    </button>
                    <button type='button' className='mt-4 shadow-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg px-5 py-3 lg:px-4 lg:py-2.5 hover:bg-blue-700 text-xl lg:text-2xl '><AnchorLink href='#footer'>SCAN & PAY</AnchorLink></button>


                </div>

                <Info />
                <Journey />
                <Cards />
                <Stats />
                <Team />
                <Events />
                <div class=" flex justify-center items-center container  pt-4 ">
                    <div className="lg:pl-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
                        <div class=" max-w-md mt-12">
                            <strong
                                class="block text-center text-lg font-medium text-gray-900 sm:text-3xl"
                            >
                                Want us to email you with the latest blockbuster news?
                            </strong>

                            <form class="mt-6">
                                <div class="relative max-w-lg">
                                    <label class="sr-only" for="email"> Email </label>

                                    <input
                                        class="w-full rounded-full border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium"
                                        id="email"
                                        type="email"
                                        placeholder="john@gmail.com"
                                    />

                                    <button
                                        class="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                                        type="button"
                                    >
                                        Subscribe
                                    </button>

                                </div>

                            </form>
                            <div className=' flex flex-col items-center'>
                                <img className='w-80' src={scan}></img>
                            </div>
                        </div>

                        <div class="lg:pl-36 justify-self-center  bg-slate-900  text-black  text-center mt-14">

                            <div className='text-3xl font-serif p-2'><a href='/articles'>News Articles</a></div>
                            <img src={img} className='h-96 m-4'></img>
                            <button className='text-xl m-4 p-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white w-36'><a href='/articles'> Read More</a></button>
                            <button type="button" className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center ">
                                <a href='https://pages.razorpay.com/leocarefoundation' target="_blank">DONATE</a>
                            </button>
                        </div>

                    </div>


                </div>

            </div>
        </div>

    )
}

export default Home
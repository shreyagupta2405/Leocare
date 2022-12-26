import React from 'react'
import img from "./images/news.jpg"
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function Footer() {
    return (
        <footer id='footer' aria-label="Site Footer" class="bg-white">
            <div>
                <div class="mx-auto container  pt-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
                        <div class="mx-auto max-w-md mt-12">
                            <strong
                                class="block text-center text-xl font-medium text-gray-900 sm:text-3xl"
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
                            <div className='p-4 flex flex-col items-center'>
                                <button type="button" className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center ">
        <a href='https://pages.razorpay.com/leocarefoundation' target="_blank">DONATE</a> 
        </button>
                                </div>
                        </div>

                        <div class=" justify-center justify-self-center  bg-slate-900  text-black  text-center">

                          <div className='text-3xl font-serif'>News Articles</div>
                           <img src={img} className='h-96'></img>
                           <button className='text-xl m-4 p-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white w-36'><a href='/articles'> Read More</a></button>
                        </div>

                    </div>


                </div>

                <div class=" mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    <div class="mx-auto max-w-sm lg:max-w-none mt-24">
                        <p class="mt-4 lg:ml-24 text-center text-gray-500 lg:text-left lg:text-lg">
                        Keep up with our events on social media <br></br>
                        leocarefoundation@gmail.com
                        </p>

                        <div class="mt-6 lg:ml-24 flex justify-center gap-6 lg:justify-start">
                            <a
                                className="flex justify-center items-center text-gray-700 transition hover:text-gray-700/75"
                                href="https://www.facebook.com/leocarefoundation"
                                target="_blank"
                                rel="noreferrer"
                            >
                             <BsFacebook size={25}/>
                             </a>
                                
                            <a
                                className="flex justify-center items-center text-gray-700 transition hover:text-gray-700/75"
                                href="https://www.linkedin.com/in/udpl72/"
                                target="_blank"
                                rel="noreferrer"
                            >
                             <BsLinkedin size={25}/> 
                            </a>
                            
                            <a
                                className="flex justify-center items-center text-gray-700 transition hover:text-gray-700/75"
                                href="https://www.instagram.com/leocarefoundation/"
                                target="_blank"
                                rel="noreferrer"
                            >
                             <BsInstagram size={25}/> 
                            </a>
                            
                            <a
                                className="flex justify-center items-center text-gray-700 transition hover:text-gray-700/75"
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                             <BsTwitter size={25}/> 
                            </a>
                            

                            
                            
                        </div>
                    </div>

                    <div
                        class="mt-24 grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
                    >
                        

                        <div>
                            <strong class="text-center font-medium text-gray-900"> Contact </strong>

                            <nav
                                aria-label="Footer About Nav"
                                class="mt-6 flex flex-col space-y-1"
                            >
                                <a class=" text-gray-700 transition hover:text-gray-700/75" href="/">
                                Plot 28, Libra avenue, Nadergul,
                                </a>
                                <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                                Hyderabad, Telangana. 501510
                                </a>
                            </nav>
                        </div>

                        <div>
                            <strong class="font-medium text-gray-900"> Mobile </strong>

                            <nav
                                aria-label="Footer Support Nav"
                                class="mt-6 flex flex-col space-y-1"
                            >
                                <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                                9398695177
                                </a>

                                <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                                9550001512
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div class="mt-16 border-t border-gray-100 pt-8">
                    <p class="text-center text-xs leading-relaxed text-gray-500">
                        © 2022 Leocare . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
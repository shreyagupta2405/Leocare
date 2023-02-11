import React from 'react'
import img from "./images/news.jpg"
import scan from './images/scan.jpeg'
import Docs from '../Pages/Docs'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsFillTelephonePlusFill} from 'react-icons/bs'
import {GrDocument} from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import { AiFillFilePdf } from 'react-icons/ai'

function Footer() {
    return (
        <footer id='footer' aria-label="Site Footer" class="bg-white">
            <div>
                <div class="mx-auto container  pt-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
                        <div class="mx-auto max-w-md mt-12">
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
                                {/* <button type="button" className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center ">
        <a href='https://pages.razorpay.com/leocarefoundation' target="_blank">DONATE</a> 
        </button> */}
                                <img className='w-80' src={scan}></img>
                                </div>
                        </div>

                        <div class=" justify-center justify-self-center  bg-slate-900  text-black  text-center mt-14">

                          <div className='text-3xl font-serif p-2'>News Articles</div>
                           <img src={img} className='h-96 m-4'></img>
                           <button className='text-xl m-4 p-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white w-36'><a href='/articles'> Read More</a></button>
                           <button type="button" className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center ">
        <a href='https://pages.razorpay.com/leocarefoundation' target="_blank">DONATE</a> 
        </button>
                        </div>

                    </div>


                </div>

                <div id='contactus' class=" mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    <div class="mx-auto max-w-sm lg:max-w-none mt-24">
                        <p class="mt-4 lg:ml-24 text-center text-gray-500 lg:text-left lg:text-lg">
                        Keep up with our events on social media <br></br>
                        <div className='flex flex-row gap-2'><MdEmail className='mt-1' size={23}/>support@leocare.org</div>
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
                                href="https://wa.me/9550001512"
                                target="_blank"
                                rel="noreferrer">
                                <IoLogoWhatsapp size={29}/>
                            </a>
                            <a
                                className="flex justify-center items-center text-gray-700 transition hover:text-gray-700/75"
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                             <BsYoutube className='mt-1' size={30}/> 
                            </a>
                            <a
                            className="flex justify-center items-center text-gray-700 transition hover:text-gray-800/75"
                                href="/docs"
                                target=""
                                rel="noreferrer">
                             <AiFillFilePdf className='mt-1' size={27}/>
                            </a>

                            
                            
                        </div>
                    </div>

                    <div
                        class="mt-24 grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
                    >
                        

                        <div>
                            <strong class="items-center justify-center flex flex-row gap-2 text-lg text-gray-900 mt-4">
                            <AiFillHome size={24}/> Contact </strong>

                            <nav
                                aria-label="Footer About Nav"
                                class="mt-2 flex flex-col space-y-1"
                            >
                                <a class="text-center text-gray-700 transition hover:text-gray-700/75" href="/">
                                Plot 28, Libra avenue, Nadergul, Hyderabad,
                                </a>
                                <a class="text-center text-gray-700 transition hover:text-gray-700/75" href="/">
                                 Telangana, India. 501510
                                </a>
                            </nav>
                        </div>

                        <div>
                            <strong class="flex flex-row items-center justify-center gap-2 text-lg text-gray-900 mt-4">
                            <BsFillTelephonePlusFill className='mt-1' size={22} /> Mobile </strong>

                            <nav
                                aria-label="Footer Support Nav"
                                class="mt-6 flex flex-col space-y-1"
                            >
                                <div class="items-center justify-center flex text-gray-700 transition hover:text-gray-700/75" href="/">
                                +91 9398695177
                                </div>

                                <div class="items-center justify-center flex text-gray-700 transition hover:text-gray-700/75" href="/">
                                +91 9550001512
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                <div class="mt-16 border-t border-gray-100 pt-8">
                    <p class="text-center text-xs leading-relaxed text-gray-500 gap-4 flex flex-row justify-center items-center">
                        <div>© 2022 Leocare Foundation</div> <a href='https://drive.google.com/file/d/1Km8Xd1OWWAE6gLLDSDmXljXUpxNeDn6J/view' target='_blank'>Privacy Policy</a> <div>All rights reserved.</div>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
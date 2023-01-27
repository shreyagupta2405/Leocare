import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function Footer() {
    return (
        <footer id='footer' aria-label="Site Footer" class="bg-white">
            <div>
                <div class="  grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    <div class="mx-auto max-w-sm lg:max-w-none mt-24">
                        <p class=" lg:ml-24 text-center text-gray-500 lg:text-left lg:text-lg">
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

                <div class=" border-gray-100 pt-8">
                    <p class="text-center text-xs leading-relaxed text-gray-500">
                        © 2022 Leocare . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
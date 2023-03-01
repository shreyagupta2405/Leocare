import React from 'react'
import img from "./images/news.jpg"
import scan from '../Components/images/scan.jpeg'
import Docs from '../Pages/Docs'
import { BsLinkedin } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillHome } from 'react-icons/ai'
import { BsFillTelephonePlusFill } from 'react-icons/bs'
import { GrDocument } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'
import { AiFillFilePdf } from 'react-icons/ai'
import { IoMdContact } from 'react-icons/io'

function Footer() {
    return (
        <footer id='footer' aria-label="Site Footer" class="bg-white">
            <div className=''>
                

                <div id='contactus' class=" mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    <div class="max-w-sm lg:max-w-none mt-24 px-16">
                        <p class=" mt-4 lg:ml-24 text-center text-gray-500 lg:text-left lg:text-lg ">
                            <div className='text-center'>Keep up with our events on social media </div>
                            <div className='flex flex-row gap-2 text-center justify-center items-center'><MdEmail className='mt-1' size={23} />support@leocare.org</div>
                            <div className='text-black items-center justify-center mt-3 font-extrabold flex flex-row'><IoMdContact className=' text-gray-700 transition hover:text-gray-700/75' size={20}/> Contact</div>
                        </p>

                        
                        <div class="mt-1 lg:ml-24 flex  gap-6 justify-center items-center">
                        
                            <a
                                className="flex justify-center items-center text-gray-700 transition hover:text-gray-700/75"
                                href="https://www.facebook.com/leocarefoundation"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsFacebook size={25} />
                            </a>

                            <a
                                className="flex justify-center items-center text-gray-700 transition hover:text-gray-700/75"
                                href="https://www.linkedin.com/in/udpl72/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsLinkedin size={25} />
                            </a>

                            <a
                                className="flex justify-center items-center text-gray-700 transition hover:text-gray-700/75"
                                href="https://www.instagram.com/leocarefoundation/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsInstagram size={25} />
                            </a>

                            <a
                                className="flex justify-center items-center text-gray-700 transition hover:text-gray-700/75"
                                href="https://wa.me/9550001512"
                                target="_blank"
                                rel="noreferrer">
                                <IoLogoWhatsapp size={29} />
                            </a>
                            <a
                                className="flex justify-center items-center text-gray-700 transition hover:text-gray-700/75"
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsYoutube className='mt-1' size={30} />
                            </a>
                            <a
                                className="flex justify-center items-center text-gray-700 transition hover:text-gray-800/75"
                                href="/docs"
                                target=""
                                rel="noreferrer">
                                <AiFillFilePdf className='mt-1' size={27} />
                            </a>



                        </div>
                    </div>

                    <div
                        class="mt-24 grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
                    >


                        <div>
                            <strong class="items-center justify-center flex flex-row gap-2 text-lg text-gray-900 mt-4">
                                <AiFillHome size={24} /> Location </strong>

                            <nav
                                aria-label="Footer About Nav"
                                class="mt-2 flex flex-col space-y-1"
                            >
                                <div class="text-center text-gray-700 transition " >
                                    Libra avenue, Nadergul, Hyderabad,
                                </div>
                                <div class="text-center text-gray-700 transition " >
                                    Telangana, India. 501510
                                </div>
                            </nav>
                        </div>

                        <div>
                            <strong class="flex flex-row items-center justify-center gap-2 text-lg text-gray-900 mt-4">
                                <BsFillTelephonePlusFill className='mt-1' size={22} /> Mobile </strong>

                            <nav
                                aria-label="Footer Support Nav"
                                class="mt-6 flex flex-col space-y-1"
                            >
                                <div class="items-center justify-center flex text-gray-700 transition ">
                                    +91 9398695177
                                </div>

                                <div class="items-center justify-center flex text-gray-700 transition ">
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
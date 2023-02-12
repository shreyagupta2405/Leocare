import React from 'react'
import im from "./images/logo.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import MenuItem from './MenuItem';


function MoveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}


function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (

        <nav className="sticky top-0 z-50 bg-white border-gray-200 sm:px-4 py-3 rounded dark:bg-gray-900 drop-shadow-lg ">
            <div className=" flex flex-wrap items-center justify-between  ">

                <a className="flex items-center">
                    <img src={im} className="h-13 w-14 mr-2 " />
                    <h1 className="text-primary font-bold text-[1.4rem] lg:text-[2rem]">Leocare Foundation</h1>
                </a>
                {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button> */}
                <div onClick={handleNav} className="block md:hidden bg-white p-2">
                    {nav ? (<AiOutlineClose size={20} className="cursor-pointer" />) : (<AiOutlineMenu size={20} className="cursor-pointer" />)}
                </div>
                <div
                    className={nav ? 'fixed h-[100vh] left-0 top-0 w-[70%] border-r bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] '}>
                    <ul className=' p-4 bg-white'>
                        <li>
                            <a href="/" className="hover:scale-105 block py-2 pl-3 pr-4 text-white bg-blue-700 rounded  md:text-blue-700 md:p-0 dark:text-white text-center" aria-current="page">Home</a>
                        </li>
                        <li>
                            <div className="top-16 text-right">
                                <Menu as="div" className=" text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center rounded-md py-2 text-sm font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                            About
                                            <ChevronDownIcon
                                                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            {active ? (
                                                                <MoveActiveIcon
                                                                    className="mr-2 h-5 w-5 "
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <MoveInactiveIcon
                                                                    className="mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}

                                                            <div className="top-16  text-right">



                                                                <Menu as="div" className=" text-left">
                                                                    <div>
                                                                        <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 p-2">
                                                                            What We Do
                                                                            <ChevronDownIcon
                                                                                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                                                            // aria-hidden="true"
                                                                            />
                                                                        </Menu.Button>
                                                                    </div>
                                                                    <Transition
                                                                        as={Fragment}
                                                                        enter="transition ease-out duration-100"
                                                                        enterFrom="transform opacity-0 scale-95"
                                                                        enterTo="transform opacity-100 scale-100"
                                                                        leave="transition ease-in duration-75"
                                                                        leaveFrom="transform opacity-100 scale-100"
                                                                        leaveTo="transform opacity-0 scale-95"
                                                                    >
                                                                        <Menu.Items className="absolute  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                            <div className="px-1 py-1 ">
                                                                                <MenuItem
                                                                                    title='Women Empowerment'
                                                                                    href='/empowerment'
                                                                                />
                                                                                <MenuItem
                                                                                    title='Educate'
                                                                                    href='/educate'
                                                                                />
                                                                                <MenuItem
                                                                                    title='Skill Development'
                                                                                    href='/training'
                                                                                />
                                                                                <MenuItem
                                                                                    title='Elderly Care'
                                                                                    href='/elderlyCare'
                                                                                />
                                                                                <MenuItem
                                                                                    title='Environment'
                                                                                    href='/env'
                                                                                />

                                                                            </div>


                                                                        </Menu.Items>
                                                                    </Transition>
                                                                </Menu>
                                                            </div>
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <MenuItem
                                                
                                                    title='Team'
                                                    href='/team'
                                                />

                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            {active ? (
                                                                <MoveActiveIcon
                                                                    className="mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <MoveInactiveIcon
                                                                    className="mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                            <AnchorLink href="#contactus" className="hover:scale-105 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-black">Contact Us</AnchorLink>
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>


                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </li>
                        <li>
                            <div className="top-16  text-right">
                                <Menu as="div" className=" text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center rounded-md py-2 text-sm font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                            Ways To Help
                                            <ChevronDownIcon
                                                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <MenuItem
                                                    title='Volunteer'
                                                    href='https://docs.google.com/forms/d/e/1FAIpQLSe7N5x_2RHfwKiDIQeOS73F5yvHc0n_z1E0aT12Nk03HZ55-Q/viewform'
                                                    target='_blank'
                                                />
                                                <MenuItem
                                                    title='Donate'
                                                    href='https://pages.razorpay.com/leocarefoundation'
                                                    target='_blank'
                                                />

                                            </div>

                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </li>
                        <li>
                            <a href="/articles" className="text-black hover:scale-105 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-center">News</a>
                        </li>

                        <li>
                            <a href="/events" className="hover:scale-105 block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-center">Events</a>
                        </li>
                        <li>
                        <a href="https://pages.razorpay.com/leocarefoundation" className="hover:scale-105 block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-center" target='_blank'>Donate</a>                          
                        </li>

                    </ul>
                </div>


                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
                        <li>
                            <a href="/" className="hover:scale-105 block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>

                        <li>
                            <div className="top-16 text-right">
                                <Menu as="div" className=" text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center rounded-md py-2 text-sm font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                            About
                                            <ChevronDownIcon
                                                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            {active ? (
                                                                <MoveActiveIcon
                                                                    className="mr-2 h-5 w-5 "
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <MoveInactiveIcon
                                                                    className="mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}

                                                            <div className="top-16  text-right">



                                                                <Menu as="div" className=" text-left">
                                                                    <div>
                                                                        <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                                                            What We Do
                                                                            <ChevronDownIcon
                                                                                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                                                            // aria-hidden="true"
                                                                            />
                                                                        </Menu.Button>
                                                                    </div>
                                                                    <Transition
                                                                        as={Fragment}
                                                                        enter="transition ease-out duration-100"
                                                                        enterFrom="transform opacity-0 scale-95"
                                                                        enterTo="transform opacity-100 scale-100"
                                                                        leave="transition ease-in duration-75"
                                                                        leaveFrom="transform opacity-100 scale-100"
                                                                        leaveTo="transform opacity-0 scale-95"
                                                                    >
                                                                        <Menu.Items className="absolute left-56  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                            <div className="px-1 py-1 ">
                                                                                <MenuItem
                                                                                    title='Women Empowerment'
                                                                                    href='/empowerment'
                                                                                />
                                                                                <MenuItem
                                                                                    title='Educate'
                                                                                    href='/educate'
                                                                                />
                                                                                <MenuItem
                                                                                    title='Skill Development'
                                                                                    href='/training'
                                                                                />
                                                                                <MenuItem
                                                                                    title='Elderly Care'
                                                                                    href='/elderlyCare'
                                                                                />
                                                                                <MenuItem
                                                                                    title='Environment'
                                                                                    href='/env'
                                                                                />

                                                                            </div>


                                                                        </Menu.Items>
                                                                    </Transition>
                                                                </Menu>
                                                            </div>
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                                <MenuItem
                                                    title='Team'
                                                    href='/team'
                                                />

                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                        >
                                                            {active ? (
                                                                <MoveActiveIcon
                                                                    className="mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <MoveInactiveIcon
                                                                    className="mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                            <AnchorLink href="#contactus" className="hover:scale-105 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</AnchorLink>
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </div>


                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </li>
                        <li>
                            <div className="top-16  text-right">
                                <Menu as="div" className=" text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center rounded-md py-2 text-sm font-medium text-black  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                            Ways To Help
                                            <ChevronDownIcon
                                                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                <MenuItem
                                                    title='Volunteer'
                                                    href='https://docs.google.com/forms/d/e/1FAIpQLSe7N5x_2RHfwKiDIQeOS73F5yvHc0n_z1E0aT12Nk03HZ55-Q/viewform'
                                                    target='_blank'
                                                />
                                                <MenuItem
                                                    title='Donate'
                                                    href='https://pages.razorpay.com/leocarefoundation'
                                                    target='_blank'
                                                />

                                            </div>

                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </li>


                        <li>
                            <a href="/articles" className="text-black hover:scale-105 block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">News</a>
                        </li>

                        <li>
                            <a href="/events" className="hover:scale-105 block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events</a>
                        </li>
                        <li>
                            <button type="button" className="hover:scale-105 float-right text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-small rounded-lg text-sm px-5 py-2 text-center ">
                                <a href='https://pages.razorpay.com/leocarefoundation' target="_blank">DONATE</a>
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar
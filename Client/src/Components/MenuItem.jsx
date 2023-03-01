import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

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

function MenuItem({title, href, target}) {
    return (
        <div>
            <Menu.Item>
                {({ active }) => (
                    <button
                        className={`${active ? 'bg-violet-500 ' : 'text-gray-900'
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
                        <a className='hover:scale-105 block py-2 pl-3 pr-4  rounded md:border-0 hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark dark:hover:bg-gray-700 ' target={target} href={href}>{title}</a>
                    </button>
                )}
            </Menu.Item>
        </div>
    )
}

export default MenuItem

import React from 'react'
import children from './images/children.jpeg'

function Journey() {
    return (
        <div className='flex'>
            <div className='p-8'>
                {/* <div className='flex py-24 px-8 gap-8'>
                    <img className='h-64 w-64' src={children}></img>
                    <img className='h-64 w-64' src={children} ></img>
                </div> */}
            </div>
            <div className='p-8 flex flex-row'>
                <div className='font-bold text-xl p-4'>The journey to change the world starts with one step.</div>
                <div className='p-4'>Sadly, not every one is in a positive environment. The Leocare Foundation is committed to helping the most vulnerable women, children and elderly by providing them with protection, education, and support.</div>
                <div className='p-4'>We are committed to transforming their lives because we know that it will change the world we live in.</div>
            </div>
        </div>
    )
}

export default Journey

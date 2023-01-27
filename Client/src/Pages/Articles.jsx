import React from 'react'
import img1 from './images2/news1.jpeg';
import img2 from './images2/news2.jpeg';
import img3 from './images2/news3.jpeg';
import img4 from './images2/news4.jpeg';
import img5 from './images2/news5.jpeg';
import img6 from './images2/news6.jpeg';
import img7 from './images2/news7.jpeg';
import img8 from './images2/news8.jpeg';

function Articles() {
  return (
    <div>
      <div className='p-6 text-4xl text-gray-700 flex flex-col text-center justify-center items-center'>

        Leocare in News
      </div>

      <div className='flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
          <div className='p-4 m-8 justify-center items-center'>
            <img className='w-96 p-4' src={img7}></img>
            <div className='my-4 p-4 rounded-lg shadow-lg hover:shadow-2xl text-gray-500'>
            <div className='text-center text-xl text-black '>Description</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </div>
          </div>
          <div className='p-4 m-8 justify-center items-center'>
          <img className='w-96 p-4' src={img8}></img>
            <div className='my-4 p-4 rounded-lg shadow-lg hover:shadow-2xl text-gray-500'>
            <div className='text-center text-xl text-black '>Description</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </div>
          </div>
          <div className='p-4 m-8 justify-center items-center'>
          <img className='w-96 p-4' src={img2}></img>
            <div className='my-4 p-4 rounded-lg shadow-lg hover:shadow-2xl text-gray-500'>
            <div className='text-center text-xl text-black '>Description</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </div>
          </div>
          <div className='p-4 m-8 justify-center items-center'>
          <img className='w-96 p-4' src={img6}></img>
            <div className='my-4 p-4 rounded-lg shadow-lg hover:shadow-2xl text-gray-500'>
            <div className='text-center text-xl text-black '>Description</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </div>
          </div>
          <div className='p-4 m-8 justify-center items-center'>
          <img className='w-96 p-4' src={img1}></img>
            <div className='my-4 p-4 rounded-lg shadow-lg hover:shadow-2xl text-gray-500'>
            <div className='text-center text-xl text-black '>Description</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </div>
          </div>
          <div className='p-4 m-8 justify-center items-center'>
          <img className='w-96 p-4' src={img4}></img>
            <div className='my-4 p-4 rounded-lg shadow-lg hover:shadow-2xl text-gray-500'>
            <div className='text-center text-xl text-black '>Description</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </div>
          </div>
          <div className='p-4 m-8 justify-center items-center'>
          <img className='w-96 p-4' src={img3}></img>
            <div className='my-4 p-4 rounded-lg shadow-lg hover:shadow-2xl text-gray-500'>
            <div className='text-center text-xl text-black '>Description</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </div>
          </div>
          <div className='p-4 m-8 justify-center items-center'>
          <img className='w-96 p-4' src={img5}></img>
            <div className='my-4 p-4 rounded-lg shadow-lg hover:shadow-2xl text-gray-500'>
            <div className='text-center text-xl text-black '>Description</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </div>
          </div>
          
          
          


        </div>
      </div>

    </div>
  )
}

export default Articles

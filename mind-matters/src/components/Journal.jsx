import React from 'react'
import {Link} from "react-router-dom"

const Journal = () => {
  return (
    <>
      <div className="">
      <h1 className='text-4xl text-center ... emotions'>My Journal </h1>
      <div className="flex justify-center items-center">

        <div className="bg-neutral-200 h-56 w-10/12 rounded-md drop-shadow-xl mt-10">
          <div className='p-14'>
          <h3 className='text-2xl'>What is my Journal?</h3>
         <p className='text-lg pt-6'>Your journal is a secure space where you can arrange your ideas, filter through your emotions, and spot trends. It's a location where you can vent about your day.</p>
         </div>
         </div>
         
    </div>
    <div className='grid grid-cols-2'>
      <div>
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group">
                          <span class="bg-red-200 px-24 py-6 rounded mt-0 ml-80">
                          <Link to="/Addnew">
                            <h6 className='text-xl'>New Entry</h6>
                            <p className='text-sm'>Start a new entry today</p>
                            </Link>
                          </span>
                      </button>
         </div>
       <div>
       <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group">
                          <span class="bg-red-200 px-24 py-6 rounded">
                          <Link to="/Archive">
                            <h6 className='text-xl'>Archive</h6>
                            <p className='text-sm'>Access your journal archive</p>
                            </Link>
                          </span>
                      </button>
       </div>
       </div>
      </div>
    </>
  );
}

export default Journal
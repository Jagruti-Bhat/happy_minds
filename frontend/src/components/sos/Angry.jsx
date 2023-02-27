import React from 'react'
import {Link} from "react-router-dom"
import SOSitem from '../SOSitem'

const Angry = () => {
  return(
    <><div className='flex justify-center mx-16 mt-16'>
     
        <div className="bg-red-50 h-6/12 w-6/12 mb-20 rounded-md transform transition duration-500 hover:scale-110">
        <div className='flex justify-center mt-8 heading text-2xl'>ANGRY</div>
        <img className='mx-60 mt-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZD2QZWSmN2l35jKH1qF0XfpYCL-XVtNQfZw&usqp=CAU" alt="" />
           <div className='p-12'>Anger is a natural emotion that arises in response to perceived threats or challenges, and it can manifest in a variety of ways, from mild annoyance to intense rage. Anger can be a healthy and necessary emotion in certain situations, such as when it motivates us to take action against injustice or mistreatment. However, it can also be destructive and harmful if not managed effectively.</div>
        </div>
      </div>
      <div className='grid grid-cols-2 mb-16'>
      <div>
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group mt-0">
                          <span class="bg-red-200 px-24 py-6 rounded mt-0 ml-80">
                          <Link to="">
                            <h6 className='text-xl'>Why do i feel this way</h6>
                            </Link>
                          </span>
                      </button>
         </div>
       <div>
       <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group">
                          <span class="bg-red-200 px-24 py-6 rounded">
                          <Link to="">
                            <h6 className='text-xl'>Why have i felt  this way in the past</h6>
                            </Link>
                          </span>
                      </button>
       </div>
       </div>
      <div>
      <SOSitem mood="angry" />
    </div></>
  )
}

export default Angry

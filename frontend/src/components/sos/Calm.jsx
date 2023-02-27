import React from 'react'
import SOSitem from '../SOSitem'
const Calm = () => {
  return (
    <><div className='flex justify-center mx-16 mt-16'>
     
        <div className="bg-blue-50 h-6/12 w-6/12 mb-20 rounded-md transform transition duration-500 hover:scale-110">
        <div className='flex justify-center mt-8 heading text-2xl'>CALM</div>
        <img className='ml-60 mt-10 h-60' src="https://img.freepik.com/premium-vector/man-is-doing-yoga-lotus-position-vector-cartoon_508021-547.jpg?w=2000" alt="" />
           <div className='p-12'>Calmness is a state of being that involves a sense of tranquility, peacefulness, and relaxation. It is the opposite of agitation, anxiety, and stress. Calmness can be beneficial in many aspects of life, as it promotes a sense of well-being and helps us to be more present and focused in the moment.

There are many strategies for achieving calmness, such as practicing mindfulness, deep breathing, meditation, yoga, and other relaxation techniques. These methods can help to reduce stress and anxiety, promote feelings of relaxation and peacefulness, and improve overall mental and physical health.</div>
        </div>
      </div>
      <div className='grid grid-cols-2 mb-16'>
      <div>
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group mt-0">
                          <span class="bg-red-200 px-24 py-6 rounded mt-0 ml-80">
                            <h6 className='text-xl'>Why do i feel this way</h6>
                          </span>
                      </button>
         </div>
       <div>
       <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group">
                          <span class="bg-red-200 px-24 py-6 rounded">
                            <h6 className='text-xl'>Why have i felt  this way in the past</h6>
                          </span>
                      </button>
       </div>
       </div>
      <div>
      <SOSitem mood="calm" />
    </div></>
  )
}

export default Calm

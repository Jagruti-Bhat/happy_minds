import React from 'react'
import SOSitem from '../SOSitem'
const sad = () => {
  return (
    <><div className='flex justify-center mx-16 mt-16'>
     
        <div className="bg-orange-50 h-6/12 w-6/12 mb-20 rounded-md transform transition duration-500 hover:scale-110">
        <div className='flex justify-center mt-8 heading text-2xl'>SAD</div>
        <img className='mx-60 mt-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dQoaOM_4r1rPt6fhnbHMPfq4cOqLW0aIqA&usqp=CAU" alt="" />
           <div className='p-12'>Feeling sad is a natural and normal part of the human experience. It can be caused by a variety of factors, such as a loss, a change in circumstances, or stress. While sadness is a difficult emotion to experience, there are strategies we can use to manage and cope with our feelings.

The first step in managing sadness is to acknowledge and accept our emotions. It's important to give ourselves permission to feel sad, and not try to suppress or ignore these feelings. Once we've acknowledged our emotions, we can begin to process them and move forward.

One effective strategy for managing feelings of sadness is self-care. Engaging in activities that promote our physical and emotional well-being, such as exercise, getting enough sleep, or engaging in a hobby we enjoy, can help us to feel more relaxed and improve our mood.</div>
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
      <div></div>
    <div>Sad 
        <SOSitem mood="sad" />
    </div></>
  )
}

export default sad

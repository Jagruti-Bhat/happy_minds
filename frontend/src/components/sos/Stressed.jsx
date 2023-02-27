import React,{useState} from 'react'
import SOSitem from '../SOSitem'
import GetSOS from './GetSOS';

const Stressed = () => {
  const [createSOS,setCreateSOS] = useState(false);
  const [show,setShow] = useState(false)
  const handleSOS=()=>{
    setCreateSOS(true)
  }
  const handleSOSArchieve=()=>{
    setShow(true)
  }
  return (
    <><div className='flex justify-center mx-14 mt-16'>
     
        <div className="bg-green-50 h-6/12 w-6/12 mb-20 rounded-md transform transition duration-500 hover:scale-110">
        <div className='flex justify-center mt-8 heading text-2xl'>STRESS</div>
        <img className='mx-60 mt-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtn3b1FJC7mHs5KTsuCR5yqkQJwI-K81JgDw&usqp=CAU" alt="" />
           <div className='p-12'>Feeling stressed is a common experience for many people. Stress can be caused by a variety of factors, such as work or school-related pressures, financial concerns, relationship problems, or health issues. When we feel stressed, our bodies release stress hormones, such as cortisol and adrenaline, which can cause physical symptoms such as a rapid heartbeat, sweaty palms, and tense muscles.

One of the primary causes of stress is our perception of a situation. For example, a task that one person may find enjoyable and manageable, another person may find overwhelming and stressful. Our individual beliefs, values, and coping skills can all impact how we perceive and respond to stress.

Another common cause of stress is a lack of control over a situation. When we feel like we don't have control over our circumstances, it can create a sense of helplessness and increase our stress levels. For example, being stuck in traffic or waiting for important test results can be stressful because we have little control over the situation.</div>
        </div>
      </div>
      <div className='grid grid-cols-2 mb-16'>
      <div>
    <button onClick={handleSOS} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group mt-0">
                          <span class="bg-red-200 px-24 py-6 rounded mt-0 ml-80">
                            <h6 className='text-xl'>Why do i feel this way</h6>
                          </span>
                      </button>
         </div>
       <div>
       <button onClick={handleSOSArchieve} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group">
                          <span class="bg-red-200 px-24 py-6 rounded">
                            <h6 className='text-xl'>Why have i felt  this way in the past</h6>
                          </span>
                      </button>
       </div>
       </div>
      <div></div>
    <div>Stressed
    {createSOS && <SOSitem mood="stressed" />}
        {show&&  <GetSOS mood="stressed" visible={true}/>}
    </div></>
  )
}

export default Stressed

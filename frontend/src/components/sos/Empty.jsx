import React,{useState} from 'react'
import SOSitem from '../SOSitem'
import GetSOS from './GetSOS';

const Empty = () => {
  const [createSOS,setCreateSOS] = useState(false);
  const [show,setShow] = useState(false)
  const handleSOS=()=>{
    setCreateSOS(true)
  }
  const handleSOSArchieve=()=>{
    setShow(true)
  }
  return (
    <><div className='flex justify-center mx-16 mt-16'>
     
        <div className="bg-purple-50 h-6/12 w-6/12 mb-20 rounded-md transform transition duration-500 hover:scale-110">
        <div className='flex justify-center mt-8 heading text-2xl'>EMPTY</div>
        <img className='mx-60 mt-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMG-gJVwsUHER7ch792Nt5g61Wkyu3mdjaw&usqp=CAU" alt="" />
           <div className='p-12'>Feeling empty is a subjective experience that can be difficult to describe, but it's a feeling that many people can relate to. It's a sense of feeling alone, disconnected, and unfulfilled, as if something important is missing from our lives. In this essay, we will explore some of the common causes of feeling empty, as well as strategies for coping with this feeling.

One of the most common causes of feeling empty is loss or grief. Losing a loved one, a job, a relationship, or something else that was important can leave a person feeling empty and alone. It's natural to grieve these losses, and it's important to allow ourselves to feel and process our emotions during this time. However, if these feelings persist for an extended period of time and interfere with daily life, it may be a sign of depression, which requires professional help.</div>
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
    <div>  {createSOS && <SOSitem mood="empty" />}
        {show&&  <GetSOS mood="empty" visible={true}/>}
    </div></>
  )
}

export default Empty





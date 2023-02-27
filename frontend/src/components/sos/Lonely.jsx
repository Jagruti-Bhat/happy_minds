import React,{useState} from 'react'
import SOSitem from '../SOSitem'
import GetSOS from './GetSOS';
const Lonely = () => {
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
     
        <div className="bg-slate-300 h-6/12 w-6/12 mb-20 rounded-md transform transition duration-500 hover:scale-110">
        <div className='flex justify-center mt-8 heading text-2xl'>LONELY</div>
        <img className='mx-60 mt-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZyNDo2mRj1CdWj6K-1kkfeXjS8euWLwHuA&usqp=CAU" alt="" />
           <div className='p-12'>Feeling lonely is a common human experience that can be caused by a variety of factors. It's important to understand what loneliness is and why we feel it in order to effectively address and cope with these feelings.

Loneliness is not the same as being alone. It's a subjective feeling of disconnection or isolation, even when we are surrounded by others. It can be caused by a lack of social connections, social anxiety, mental health issues, unfulfilling relationships, or a lack of purpose or direction in life.

One common cause of loneliness is a lack of social connections. This can occur if we've recently moved to a new area, experienced a loss of a loved one, or are going through a difficult time in our lives. It's important to actively seek out opportunities to connect with others, such as by joining a club or group that aligns with our interests or hobbies, or by volunteering in our community.</div>
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
    <div> {createSOS && <SOSitem mood="lonely" />}
        {show&&  <GetSOS mood="lonely" visible={true}/>}
    </div></>
  )
}

export default Lonely

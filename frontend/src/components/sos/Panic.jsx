import React,{useState} from 'react'
import SOSitem from '../SOSitem'
import GetSOS from './GetSOS';
const Panic = () => {
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
     
        <div className="bg-red-50 h-6/12 w-6/12 mb-20 rounded-md transform transition duration-500 hover:scale-110">
        <div className='flex justify-center mt-8 heading text-2xl'>PANIC</div>
        <img className='mx-60 mt-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oIyVQU4ZlpsdC1ryw-Eyv-5C1xLTcAFJzQ&usqp=CAU" alt="" />
           <div className='p-12'>Feeling panic can be a distressing and overwhelming experience that can have a significant impact on our mental and physical well-being. Panic attacks are often characterized by intense feelings of fear, anxiety, and a sense of impending doom, along with physical symptoms such as a rapid heartbeat, shortness of breath, and sweating.

There are a variety of factors that can contribute to feelings of panic, including stress, anxiety, trauma, or other mental health issues. It's important to understand that feeling panic is a normal human experience and that there are strategies that can help us to manage and cope with these feelings.

One effective strategy for managing feelings of panic is deep breathing. This involves taking slow, deep breaths in through the nose and out through the mouth, which can help to slow down our breathing and reduce feelings of anxiety and panic. Additionally, practicing mindfulness can help us to focus on being present in the moment, which can help to ground us and reduce feelings of panic and anxiety.</div>
        </div>
      </div>
      <div className='grid grid-cols-2 mb-16'>
      <div>
    <button onClick={handleSOS}
    class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group mt-0">
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
    <div>
        {createSOS && <SOSitem mood="panic" />}
        {show&&  <GetSOS mood="panic" visible={true}/>}
    </div></>
  )
}

export default Panic

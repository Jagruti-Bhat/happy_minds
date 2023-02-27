import React,{useState} from 'react'
import SOSitem from '../SOSitem'
import GetSOS from './GetSOS';
const Happy = () => {
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
     
        <div className="bg-yellow-50 h-6/12 w-6/12 mb-20 rounded-md transform transition duration-500 hover:scale-110">
        <div className='flex justify-center mt-8 heading text-2xl'>HAPPY</div>
        <img className='mx-60 mt-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjTTHeWCpLPWLgWF_w8_VK-C4UOUc5JV16g&usqp=CAU" alt="" />
           <div className='p-12'>Happiness is a positive emotion that is characterized by feelings of joy, contentment, and satisfaction. It is a state of mind that can be influenced by many different factors, including social, psychological, and environmental factors.

There are many benefits to experiencing happiness. It can improve our overall well-being and health, boost our immune system, and enhance our relationships and social connections. Happiness can also improve our productivity and creativity, and help us to cope with stress and adversity.

There are many different strategies that can help to promote happiness. These strategies can include engaging in activities that we enjoy, spending time with loved ones, practicing gratitude, and practicing mindfulness and meditation. Engaging in physical exercise, getting enough sleep, and maintaining a healthy diet can also help to improve our overall well-being and promote feelings of happiness.</div>
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
    <div>{createSOS && <SOSitem mood="happy" />}
        {show&&  <GetSOS mood="happy" visible={true}/>}
    </div></>
  )
}

export default Happy

import React,{useState} from 'react'
import Axios from "axios"

const SOSitem = ({mood}) => {
    const [input,setInput] = useState({});
    const [sinput,setSInput] = useState({});
    const url ="http://localhost:4000/api/v1/user/sosAdd"
    // const [arr,setArr]=useState([]);
    const handleChange = (event)=>{
        const name =event.target.name
        const value = event.target.value 
        setInput((values)=>({...values,[name]:value}))
        // setArr([sinput])
        setInput((values)=>({...values,["thoughts"]:sinput}))
        setInput((values)=>({...values,["emotion"]:mood}))
    }
    const sHandleChange =(event)=>{
        const name = event.target.name 
        const value = event.target.value
        setSInput((values)=>({...values,[name]:value}))
       
    }

    let config={
      headers:{
        Authorization: "Bearer "+localStorage.getItem("login")
      }}
    const handleSubmit =(event)=>{
        event.preventDefault();
        
        Axios.post(url,input,config).then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
             <section className='text-center'>
             <section className='h-screen'>
                <div>
                <h2 className='before text-2xl'>Before</h2>
                <label className='text-justify-center meter-text'>
                    Let's start with gauging how {mood} you are.
                    Tap the feeling meter to reflect the intensity of
                    your feeling
                    <br></br>
                <input className='slider h-2 w-2'
                type="range"
                name="intensityB"
                onChange={handleChange}
                value={input.intensityB || ""} />
                <p className='number'>{input.intensityB}</p>
                </label>
                </div>
                </section>
               
               <section className='h-screen'>
                
                   <label className='identify text-md'>
                    What physical sensations do you feel when you feel {mood}
                   <br></br>
                   <input className='input-class1 h-2/5 w-2/5 border-2 rounded'
                    type="text"
                    placeholder='Enter physical sensations'
                    name="physicalSensations"
                    value={sinput.physicalSensations || ""}
                    onChange={sHandleChange}
                     /><br></br>
                   </label>
                     <input className='input-class1 h-2/5 w-2/5 border-2 rounded'
                     type="text"
                     placeholder='Enter physical sensations'
                     name="exercise"
                     value={sinput.exercise || ""}
                     onChange={sHandleChange}
                      /><br></br>
                      </section>
                      <section className='h-screen'>
                     <label className='identify text-md '>
                        Let's try to identify a more specific feeling
                     <br></br>
                     <input className='input-class2 h-2/5 w-2/5 border-2 rounded'
                      type="text"
                      name="specifiedFeeling"
                      placeholder='Enter specific feeling'
                      value= {sinput.specifiedFeeling || ""}
                      onChange={sHandleChange} />
                     </label><br></br>
                     </section>
                     <section className='h-screen'>
                     <label className='identify text-md'>What was your trigger event or situation
                        that made you feel stressed?<br></br>
                     <input className='input-class3 h-2/5 w-2/5 border-2 rounded'
                      type="text"
                      name="triggerEvent"
                      placeholder='Enter trigger event'
                      value ={sinput.triggerEvent || ""}
                      onChange={sHandleChange} />
                     </label>
                     </section>
                
                <section className='h-screen'>
                <div >
                   <label className='identify text-md'>
                    List 3 things that you are grateful for :<br></br>
                   <input className='input-class4 h-2/5 w-2/5 border-2 rounded'
                    type="text"
                    name="grateful"
                    placeholder='You are grateful for'
                    value={input.grateful || ""}
                    onChange={handleChange} />
                   </label>
                </div>
                </section>
                <div>
                
                <label><h2 className='after text-2xl'>After</h2>
                    How are you feeling?
                    <br></br>
                <input className='slider'
                type="range"
                name="intensityE"
                onChange={handleChange}
                value={input.intensityBE || ""} />
                <p className='number'>{input.intensityE}</p>
                </label>
                </div>
                            </section>
            <div className="flex justify-center items-center mt-8 pb-8">
                <button className="bg-blue-500 rounded-md h-10 w-16" type="submit"> Submit </button>
              </div>
              
            {/* <input type="submit" /> */}

        </form>
        
    </div>
  )
}

export default SOSitem
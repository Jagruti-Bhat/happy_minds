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
             <section>
                <div>
                <label>
                    Let's start with gauging how {mood} you are.
                    Tap the feeling meter to reflect the intensity of
                    your feeling
                <input
                type="range"
                name="intensityB"
                onChange={handleChange}
                value={input.intensityB || ""} />
                <p>{input.intensityB}</p>
                </label>
                </div>
               
                <div>
                   <label>
                    What physical sensations do you feel when you feel {mood}
                   <input
                    type="text"
                    name="physicalSensations"
                    value={sinput.physicalSensations || ""}
                    onChange={sHandleChange}
                     />
                   </label>
                     <input
                     type="text"
                     name="exercise"
                     value={sinput.exercise || ""}
                     onChange={sHandleChange}
                      />
                     <label>
                        Let's try to identify a more specific feeling
                     <input
                      type="text"
                      name="specifiedFeeling"
                      value= {sinput.specifiedFeeling || ""}
                      onChange={sHandleChange} />
                     </label>
                     <label>what was your trigger event or situation
                        that made you feel stressed?
                     <input
                      type="text"
                      name="triggerEvent"
                      value ={sinput.triggerEvent || ""}
                      onChange={sHandleChange} />
                     </label>
                </div>
                <div>
                   <label>
                    List 3 things that you are grateful for :
                   <input
                    type="text"
                    name="grateful"
                    value={input.grateful || ""}
                    onChange={handleChange} />
                   </label>
                </div>
                <div>
                <label>
                    How are you feeling?
                <input
                type="range"
                name="intensityE"
                onChange={handleChange}
                value={input.intensityBE || ""} />
                <p>{input.intensityE}</p>
                </label>
                </div>
            </section>
            <input type="submit" />

        </form>
        
    </div>
  )
}

export default SOSitem
import React,{useState} from 'react'

const SOSitem = () => {
    const [input,setInput] = useState({})
    const handleChange = (event)=>{
        const name =event.target.name
        const value = event.target.value 
        setInput((values)=>({...values,[name]:value}))
    }
  return (
    <div>
        <form>
             <section>
                <div>
                <input
                type="range"
                name="intensityB"
                onChange={handleChange}
                value={input.intensityB || ""} />
                <p>{input.intensityB}</p>
                </div>
                <div>
                <input
                type="range"
                name="intensityE"
                onChange={handleChange}
                value={input.intensityBE || ""} />
                <p>{input.intensityE}</p>
                </div>
                <div>
                    <input
                    type="text"
                    name="physicalSensations"
                     />
                </div>
                <div>
                    <input
                    type="text"
                    name="grateful"
                    value={input.grateful || ""}
                    onChange={handleChange} />
                </div>
            </section>

        </form>
        
    </div>
  )
}

export default SOSitem
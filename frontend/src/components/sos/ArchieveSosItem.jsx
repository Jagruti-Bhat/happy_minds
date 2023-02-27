import React,{useState} from 'react'

const ArchieveSosItem = ({date,emotion,intensityB,intensityE,thoughts,key}) => {
    const [show,setShow]=useState(false)
    const handleData=()=>{
        setShow(true)
    }
  return (
    <div>
        <div>
            <p>{date}</p>
            <button key={ key}onClick={handleData}>History</button>
            {show &&
            <div>
                emotion:{emotion}
                intensityB:{intensityB}
                intensityE:{intensityE}
                <p>{thoughts.physicalSensations}
                {thoughts.triggerEvent}</p>
            </div>}
        </div>
    </div>
  )
}

export default ArchieveSosItem
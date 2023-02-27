import React,{useState,useEffect} from 'react'
import Axios from "axios"
import ArchieveSosItem from './ArchieveSosItem'

const GetSOS = () => {
    const [data,setData] =useState()
   const x =()=>{
    const url="http://localhost:4000/api/v1/user/getAllSOS"
    let config={
        headers:{
          Authorization: "Bearer "+localStorage.getItem("login")
        }}
        const emotion={
            emotion:"angry"
        }
    Axios.post(url,emotion,config)
    .then((response)=>{
        console.log(response)
       
        setData(response.data)
      
    }).then(console.log(data.data[0]))
    .catch((error)=>[
        console.log(error)
    ])
   }
  return (
    <div>
        <button onClick={x}>get sos</button>
      <div>
      {data? data.map((e)=>{
       return (
       <ArchieveSosItem
       date={e.date}
       emotion={e.emotion}
       intensityB={e.intensityB}
       intensityE={e.intensityE}
       thoughts={e.thoughts}
       key={e._id}
        />
     );}) : <p></p>}
      </div>
    </div>
    
  )
}

export default GetSOS
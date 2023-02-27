import React,{useState,useEffect} from 'react'
import Axios from "axios"

const GetSOS = () => {
    const [data,setData] =useState()
   const x =()=>{
    const url="http://localhost:4000/api/v1/user/getAllSOS"
    let config={
        headers:{
          Authorization: "Bearer "+localStorage.getItem("login")
        }}
    Axios.get(url,config,{
        emotion:'angry'
    })
    .then((response)=>{
        console.log(response)
        setData(response)
    })
    .catch((error)=>[
        console.log(error)
    ])
   }
  return (
    <div>GetSOS
        <button onClick={x}>hhr</button>
    </div>
    
  )
}

export default GetSOS
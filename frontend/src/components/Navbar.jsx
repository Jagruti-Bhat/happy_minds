import React,{useContext,useState} from 'react'
import {UserContext} from "../context/UserContext"
import Axios from "axios"

const Navbar = () => {
  const data = useContext(UserContext)
  // console.log(data.token)
  const isLoggedIn = data.isLoggedIn
  // const setIsLoggedIn = data.setIsLoggedIn
  const handleLogout=()=>{
    const url = "http://localhost:4000/api/v1/user/logout"
    let config={
      headers:{
        Authorization: "Bearer "+localStorage.getItem("login")
      }}
    Axios.get(url,config)
    .then((response)=>{
      localStorage.removeItem('login')
      // setIsLoggedIn(false)
    })
    .catch((error)=>(console.log(error)))

  }
  return (
    <nav className="flex justify-center space-x-4 bg-gradient-to-b from-sky-400	 ...">
      <a href="/" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
  <a href="/Journal" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">My Journal</a>
  <a href="/Session" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Book a session</a>
  <a href="/Resources" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Resources</a>
  {/* {data.token} */}
  {/* {!isLoggedIn &&
  <a href="/Login" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Login</a> } */}
  {/* {isLoggedIn && 
    <button onClick={handleLogout}
    className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Logout</button>} */}
</nav>
  )
}

export default Navbar

import React,{useContext,useState} from "react";
import Axios from 'axios'
import { UserContext } from '../context/UserContext';
import {useNavigate} from "react-router-dom";


const Register = () => {
    const data = useContext(UserContext)
    const navigate = useNavigate();
    const url ="http://localhost:4000/api/v1/user/signup"
    const [input,setInputs]=useState({});
    const handleChange=(event)=>{
        event.preventDefault();
        const name =event.target.name;
        const value = event.target.value;
        setInputs((values)=>({...values,[name]:value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        Axios.post(url,input)
        .then((res)=>{
            data.setIsLoggedIn(true)
            localStorage.setItem('login',res.data.token)
            data.setToken(res.data.token)
        })
        .then(()=>{
            if(data.setIsLoggedIn){
                navigate("/home")
            }
        })
        .catch((error)=>console.log(error))
        // console.log(input)
    }
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center m-8">
          <p className="text-4xl text-red lg:text-6xl my-8 heading">
            HAPPY MINDS
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-blue-200 h-auto w-96 rounded-md">
          <h2 className="flex justify-center items-center heading text-3xl mt-6">REGISTER</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center items-center mt-10 h-1.5">
                <input
                className="h-8 rounded-md"
                type="text"
                placeholder=" Enter your Name"
                onChange={handleChange}
                name="name"
                value={input.name || ""}
                size="30"/>
              </div>
              <div className="flex justify-center items-center mt-16 h-1.5">
                <input
                className="h-8 rounded-md"
                type="email"
                placeholder=" Enter your Email"
                name="email"
                value={input.email ||""}
                onChange={handleChange}
                size="30" />
              </div>
              <div className="flex justify-center items-center mt-14">
                <input
                className="h-8 rounded-md"
                type="password"
                name="password"
                value={input.password || ""}
                onChange={handleChange}
                placeholder=" Enter your Password"
                size="30"/>
              </div>
              <div className="flex justify-center items-center mt-10">
                <input
                className="h-8 rounded-md"
                type="tel"
                id="phone"
                onChange={handleChange}
                placeholder=" Phone Number"
                name="phone"
                value={input.phone || ""}
                size="30"
                maxlength="10"
                minlength="2"/>
              </div>
              <div className="flex justify-center items-center mt-8 pb-8">
                <button className="bg-blue-500 rounded-md h-10 w-16" type="submit"> Submit </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
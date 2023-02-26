import React from 'react'
import {Link} from "react-router-dom"
import feelings from "../images/feelings.jpg";

const Addnew = () => {
  return (
    <>
    <div>
    <div className="text-5xl flex justify-center items-center mb-0 mt-10">
      <div>
      <h1 className="addnew">My Journal : New Entry!!</h1>
      </div>   
    </div>
      <div className="grid grid-cols-3 mt-0">
        <div className="w-96 h-96">
          <img className="ml-24" src={feelings} alt="" />
        </div>
        <div>
          <div className="text-lg">
            <div className="drop-shadow-xl ml-14">
              <textarea placeholder="Express your feelings!!" id="story" name="story" rows="10" cols="100"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to="/Journal">Done</Link></button>
      </div>
      </div>
    </>
  );
};

export default Addnew;
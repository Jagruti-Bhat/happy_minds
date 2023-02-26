import React from 'react'
import {Link} from "react-router-dom"

const Fixsleep = () => {
  return (
    <><div className='flex justify-center items-center mt-12'>
        <h3 className='addnew text-4xl'>BED TIME STORIES</h3>
        </div>
        <div className='grid grid-cols-3'>
        <div className="p-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-52">
            <Link to="/story1">An Angel in Disguise</Link></button>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/story2">The boy who cried wolf</Link></button>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-52">
            <Link to="/story3">A Carrot An Egg and The Coffee-Beans</Link></button>
      </div>
        </div>
        <div className='grid grid-cols-3'>
        <div className="p-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-52">
            <Link to="/story4">A Powerful Story</Link></button>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/story5">Ali Baba and Forty Thieves</Link></button>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-52">
            <Link to="/story6">A Wise Deer and A Cowardly Tiger</Link></button>
      </div>
        </div>
        </>
  )
}

export default Fixsleep
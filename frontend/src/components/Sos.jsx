import React from 'react'
import {Link} from "react-router-dom"
import angry from "../images/angry.jpg"
import empty from "../images/empty.jpg"
import lonely from "../images/lonely.jpg"
import panic from "../images/panic.png"
import sad from "../images/sad.jpg"
import stressed from "../images/stressed.png"


const Sos = () => {
  return (
   <div>
    <h1 className='text-4xl text-center	 ... emotions'>Learn more about Emotions: </h1>
    <div className='sos-class ' >
    
    <p className='tracking-wide text-justify text-lg	'>SOS I feel is a tool for those davs when vou experience an overwhelming negative or uneasy emotion such as anxiety, panic attack, sadness etc.
Please click on the feeling you would like to address today.

SOS I Feel exercises are meant to help you break down this large overwhelming feeling and understand why you feel the way you feel and offer possible solutions to feel better.
SOS I feel uses specific interventions within our control as human beings to self-regulate through self-awareness. When practised regularly, these interventions override unhelpful brain conditions and rewire the brain to in a happier and more fulfilling mindset by modifying the actual neural network of brain cells.
SOS I Feel is based on the principles of CBT, Mindfulness - DBT, reflective therapy, REBT & affirmation Therapy.</p>
   </div>
   <div class="flex justify-center">
  <div
    class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
    <h5
      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      NOTE:
    </h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
     If you are experiencing suicidal thoughts please contact a suicide prevent helpline. Scroll to the bottom of the page for resources. If the negative emotion persists, please reach out to a professional. This program is not a substitute for professional counselling.</p>

   
    
  </div>
</div>


<><div className="grid grid-cols-3 gap-3">
          <div class="flex justify-center emoji-card">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg emotions-emoji" src={angry} alt="" />
                  <div class="p-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Feeling Angry
                      </h5>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          I'm feeling angry today.
                      </p>
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          <Link to="/sos/angry">Explore</Link>
                          </span>
                      </button>
                  </div>
              </div>
          </div>
          <div class="flex justify-center emoji-card">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg emotions-emoji" src={stressed} alt="" />
                  <div class="p-6">
                      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Feeling Stressed
                      </h5>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          I'm feeling very stressed today.
                      </p>
                      <p hidden>.</p>
                      <Link to="/sos/stressed" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Explore
                          </span>
                      </Link>
                  </div>
              </div>
          </div>
          <div class="flex justify-center emoji-card">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg emotions-emoji" src={sad} alt="" />
                  <div class="p-6">
                      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Feeling sad
                      </h5>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          I'm feeling sad today.
                      </p>
                      <Link  to="/sos/sad" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Explore
                          </span>
                      </Link>
                  </div>
              </div>
          </div>
      </div><div className="grid grid-cols-3 gap-3">
              <div class="flex justify-center emoji-card">
                  <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                      <img class="rounded-t-lg emotions-emoji" src={empty} alt="" />
                      <div class="p-6">
                          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              Feeling empty
                          </h5>
                          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                              I'm feeling empty today
                          </p>
                          <Link to="/sos/empty" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                  Explore
                              </span>
                          </Link>
                      </div>
                  </div>
              </div>
              <div class="flex justify-center emoji-card">
                  <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                      <img class="rounded-t-lg emotions-emoji" src={lonely} alt="" />
                      <div class="p-6">
                          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              Feeling lonely
                          </h5>
                          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                              I'm feeling lonely today
                          </p>
                          <p hidden>.</p>
                          <Link to="/sos/lonely" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                  Explore
                              </span>
                          </Link>
                      </div>
                  </div>
              </div>
              <div class="flex justify-center emoji-card">
                  <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                      <img class="rounded-t-lg emotions-emoji" src={panic} alt="" />
                      <div class="p-6">
                          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              Panic Attack
                          </h5>
                          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                              I'm having a panic attack.
                          </p>
                          <Link to="panic" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                  Explore
                              </span>
                          </Link>
                      </div>
                  </div>
              </div>
          </div></>

   </div>

   
  );
}

export default Sos
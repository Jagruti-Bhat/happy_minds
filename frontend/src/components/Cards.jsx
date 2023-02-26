import React from "react";
import sos from "../images/sos.jpg";
import journal from "../images/journal.jpg";
import session from "../images/session.jpg";
import community from "../images/community.jpg";
import sleep from "../images/sleep.jpg";
import resources from "../images/resources.jpg";
import {Link} from "react-router-dom"


const Cards = () => {
  return (
    <><div className="grid grid-cols-3 gap-3">
          <div class="flex justify-center">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg" src={sos} alt="" />
                  <div class="p-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          SOS: I Feel
                      </h5>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          Emotional First Aid Tools to handle difficult emotions.
                      </p>
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          <Link to="/Sos">Explore</Link>
                          </span>
                      </button>
                  </div>
              </div>
          </div>
          <div class="flex justify-center">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg" src={journal} alt="" />
                  <div class="p-6">
                      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          My Journal
                      </h5>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          Journal your difficult and beautiful emotions and document your day!
                      </p>
                      <p hidden>.</p>
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              <Link to="/Journal">Explore</Link>
                          </span>
                      </button>
                  </div>
              </div>
          </div>
          <div class="flex justify-center">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg" src={session} alt="" />
                  <div class="p-6">
                      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Happiness Coach
                      </h5>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          Schedule therapy sessions with qualified psychologists.
                      </p>
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Explore
                          </span>
                      </button>
                  </div>
              </div>
          </div>
      </div><div className="grid grid-cols-3 gap-3">
              <div class="flex justify-center">
                  <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                      <img class="rounded-t-lg" src={community} alt="" />
                      <div class="p-6">
                          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              Happiness Community
                          </h5>
                          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                              Join one of our communities to express your emotions in a group!
                          </p>
                          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                  <Link to="/Communities">Explore</Link>
                              </span>
                          </button>
                      </div>
                  </div>
              </div>
              <div class="flex justify-center">
                  <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                      <img class="rounded-t-lg" src={sleep} alt="" />
                      <div class="p-6">
                          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              Fixing Sleep cycles
                          </h5>
                          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                              Track your sleep cycles and fix them for better health
                          </p>
                          <p hidden>.</p>
                          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              <Link to="/Fixsleep">Explore</Link>
                              </span>
                          </button>
                      </div>
                  </div>
              </div>
              <div class="flex justify-center">
                  <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                      <img class="rounded-t-lg" src={resources} alt="" />
                      <div class="p-6">
                          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              Educational Resources
                          </h5>
                          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                              Our resources provide awareness on the various mental health issues.
                          </p>
                          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                  <Link to="/Resources">Explore</Link>
                              </span>
                          </button>
                      </div>
                  </div>
              </div>
          </div></>


    
  );
};

export default Cards;

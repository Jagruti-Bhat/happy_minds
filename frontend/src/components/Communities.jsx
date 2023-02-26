import React from "react";
import anxiety from "../images/anxiety.jpg"
import depression from "../images/depression.jpg"
import grief from "../images/grief.jpg"
import ocd from "../images/ocd.jpg"
import stress from "../images/stress.jpg"
import toxic from "../images/toxic.jpg"

const Communities = () => {
  return (
    <div>
      <h1 className="text-4xl text-center	 ... emotions">
        Join our Happiness Community!{" "}
      </h1>
      <div className="sos-class ">
        <p className="tracking-wide text-center text-lg	">
          Happiness Community is a safe pace to anonymously share your theoughts
          and experiences with a community of wellness speakers.
        </p>
      </div>

      <><div className="grid grid-cols-3 gap-3">
          <div class="flex justify-center emoji-card">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg emotions-emoji" src={anxiety} alt="" />
                  <div class="p-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Anxiety
                      </h5>
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Join the community
                          </span>
                      </button>
                  </div>
              </div>
          </div>
          <div class="flex justify-center emoji-card">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg emotions-emoji" src={stress} alt="" />
                  <div class="p-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Stress
                      </h5>
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Join the community
                          </span>
                      </button>
                  </div>
              </div>
          </div>
          <div class="flex justify-center emoji-card">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg emotions-emoji" src={ocd} alt="" />
                  <div class="p-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          OCD
                      </h5>
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Join the community
                          </span>
                      </button>
                  </div>
              </div>
          </div>
      </div><div className="grid grid-cols-3 gap-3">
      <div class="flex justify-center emoji-card">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg emotions-emoji" src={toxic} alt="" />
                  <div class="p-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Toxic Relationships
                      </h5>
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Join the community
                          </span>
                      </button>
                  </div>
              </div>
          </div>
          <div class="flex justify-center emoji-card">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg emotions-emoji" src={depression} alt="" />
                  <div class="p-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Depression
                      </h5>
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Join the community
                          </span>
                      </button>
                  </div>
              </div>
          </div>
          <div class="flex justify-center emoji-card">
              <div class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <img class="rounded-t-lg emotions-emoji" src={grief} alt="" />
                  <div class="p-6">
                  <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          Grief & Loss
                      </h5>
                      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Join the community
                          </span>
                      </button>
                  </div>
              </div>
          </div>
          </div></>
    </div>
  );
};

export default Communities;

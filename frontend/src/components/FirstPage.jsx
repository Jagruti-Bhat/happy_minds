import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center m-8">
          <p className="text-4xl text-red lg:text-6xl my-8 heading">
            HAPPY MINDS
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-blue-200 h-96 w-96 rounded-md">
          <h2 className="flex justify-center items-center heading text-3xl mt-6">LOGIN</h2>
            <form>
              <div className="flex justify-center items-center mt-14 h-1.5">
                <input
                  className="h-8 rounded-md"
                  type="email"
                  placeholder=" Enter your Email"
                  size="30"
                />
              </div>

              <div className="flex justify-center items-center mt-14">
                <input
                  className="h-8 rounded-md"
                  type="password"
                  placeholder=" Enter your Password"
                  size="30"
                />
              </div>
              <div className="flex justify-center items-center mt-8  ">
                <button
                  className="bg-blue-500 rounded-md h-10 w-16"
                  type="submit"
                >
                  Submit
                </button>
              </div>

              <div className="text-l flex justify-center items-center mt-8 underline underline-offset-4">
                <Link to="/Register">Dont have an account? Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
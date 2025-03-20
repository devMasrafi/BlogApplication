import React, { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-ascient flex flex-col items-center justify-center rounded-lg p-6 shadow-lg lg:flex-row">
        {/* Left Side - Image */}
        <div className="flex items-center justify-center p-6 lg:w-1/2">
          <img
            className="bg-primary rounded-lg object-cover lg:h-[26rem] lg:w-[30rem] transition-transform duration-150  "
            src={isSignUp ? "/welcome.gif" : "/login.gif"}
            alt="welcome animation"
          />
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col items-center p-6 lg:w-1/2">
          {/* Buttons */}
          <div className="mb-6 flex w-full justify-center gap-2">
            <button
              className={`w-1/2 rounded-lg border py-2 text-lg font-medium capitalize ${
                isSignUp ? "bg-blue-500 text-white" : "bg-white border-gray-400"
              }`}
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
            <button
              className={`w-1/2 rounded-lg border py-2 text-lg font-medium capitalize ${
                !isSignUp ? "bg-blue-500 text-white" : "bg-white border-gray-400"
              }`}
              onClick={() => setIsSignUp(false)}
            >
              Login
            </button>
          </div>

          {/* Form */}
          <div className="w-full transition-transform duration-300 ease-in-out">
            <form className="flex flex-col gap-y-4">
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-primary rounded-md border p-3 outline-none"
                />
              )}
              <input
                type="text"
                placeholder="Email"
                className="bg-primary rounded-md border p-3 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-primary rounded-md border p-3 outline-none"
              />
              {isSignUp && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-primary rounded-md border p-3 outline-none"
                />
              )}
              <button className="mt-5 rounded-md border border-gray-400 bg-white py-3 text-xl font-medium capitalize">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

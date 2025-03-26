import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-ascient flex h-[35rem] items-center justify-center">
      <div className="bg-primary container mx-auto flex h-[20rem] items-center justify-around rounded-2xl p-10 shadow-lg">
        {/* Left Side - Text */}
        <div className="">
          <h2 className="text-7xl font-bold">Join</h2>
          <p className="text-secondary mt-2 text-3xl">Our News Letter</p>
        </div>

        {/* Right Side - Form */}
        <div className="flex w-[20rem] flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border-secondary rounded-md border px-4 py-2 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-secondary rounded-md border px-4 py-2 outline-none"
          />
          <div>
            <button className="border-secondary hover:bg-secondary hover:text-primary cursor-pointer rounded-md border-1 px-6 py-2 hover:border-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

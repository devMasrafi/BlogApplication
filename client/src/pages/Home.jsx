import React from "react";
import ScrollToTop from "../components/scrollToTop";
import ButtonComponents from "../components/ButtonComponents";
import FeaturePosts from "../components/FeaturePosts";

const Home = () => {
  return (
    <main className="">
      <ScrollToTop />
      {/* banner section */}
      <section className="relative mx-auto lg:container lg:mt-[8rem] lg:h-[60rem]">
        <div className="lg:w-[60rem]">
          <h1 className="font-outfit font-semibold lg:text-7xl">
            Discover Your Lifestyle, Embrace the Journey
          </h1>
          <p className="font-assistant lg:w-[22rem] lg:pt-3 lg:text-lg lg:tracking-wide">
            Welcome to D Live Hub, your ultimate destination for all things
            lifestyle. Dive into a world of inspiration, tips, and engaging
            content that enriches your daily life.
          </p>
          <div className="lg:mt-6 lg:space-x-4">
            <ButtonComponents className="lg:bg-secondary text-primary hover:bg-primary hover:text-secondary hover:border-secondary border-secondary border-1 capitalize hover:border-1">
              explore
            </ButtonComponents>
            <ButtonComponents className="hover:bg-secondary hover:text-primary hover:border-secondary capitalize hover:border-1 lg:border-1">
              join
            </ButtonComponents>
          </div>
        </div>
        {/* Right Content (Image) */}
        <div className="absolute top-[13rem] left-[30rem]">
          <div className="relative">
            <img
              className="rounded-lg object-cover shadow-lg lg:h-[500px] lg:w-[900px]"
              src="../../simpleimg.jpg"
              alt="banner img"
            />
            <div className="bg-primary absolute bottom-4 left-4 rounded-md p-3 shadow-md">
              <h2 className="font-semibold">Pemuteran Beach</h2>
              <p className="text-sm">Someone's Name</p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <FeaturePosts />
      </section>
    </main>
  );
};

export default Home;

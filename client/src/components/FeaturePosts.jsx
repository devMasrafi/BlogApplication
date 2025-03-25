import React, { useState } from "react";

const FeaturePosts = () => {
  // Define the default image and hover images
  const [currentImage, setCurrentImage] = useState("../../beach-image.jpg");

  const posts = [
    {
      title: "Plan Your 3 Day Trip To One Of The Best Locations",
      date: "28 Dec, 2024",
      image: "../../beach-image.jpg",
    },
    {
      title: "Daily Healthy Food That You Should Have",
      date: "14 Jan, 2025",
      image: "../../healty-foods.jpg",
    },
    {
      title: "Best Food Location Close To Bay Area",
      date: "25 Jan, 2025",
      image: "../../food-location.jpg",
    },
  ];

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-8 text-center">
          <p className="text-md font-assistant">Explore</p>
          <h2 className="font-outfit text-2xl font-bold">Our Feature Posts</h2>
        </div>

        {/* Feature Post Section */}
        <div className="relative mx-auto w-full max-w-5xl">
          <img
            src={currentImage}
            alt="Feature Post"
            className="-z-10 h-[500px] w-full rounded-lg object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 flex items-start rounded-lg p-6">
            <h3 className="text-primary max-w-md text-2xl font-semibold lg:text-3xl">
              Permutan Beach, Places You Need To Visit At Least Once
            </h3>
          </div>

          {/* blog post links */}
          <div className="z-500 absolute flex justify-between w-full items-center bottom-0 left-0 bg-ascient/20 ">
            {posts.map((post, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-lg p-4 text-white"
                onMouseEnter={() => setCurrentImage(post.image)}
                onMouseLeave={() => setCurrentImage("/images/main-image.jpg")}
              >
                <p className="text-sm">{post.title}</p>
                <div className="mt-2 flex items-center justify-between">
                  <button className="bg-black px-3 py-1 text-xs">
                    CHECK BLOG
                  </button>
                  <span className="text-xs">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePosts;

import React, { useEffect, useState } from "react";

const FeaturePosts = () => {
  const [currentImage, setCurrentImage] = useState("/beach-image.jpg");
  const [currentImageTitle, setCurrentImageTitle] = useState(
    "The Best You Have Ever Seen",
  );

  const posts = [
    {
      title: "Plan Your 3 Day Trip To One Of The Best Locations",
      date: "28 Dec, 2024",
      image: "/beach-image.jpg",
    },
    {
      title: "Daily Healthy Food That You Should Have",
      date: "14 Jan, 2025",
      image: "/healty-foods.jpg",
    },
    {
      title: "Best Food Location Close To Bay Area",
      date: "25 Jan, 2025",
      image: "/food-location.jpg",
    },
  ];

  useEffect(() => {
    posts.forEach((post) => {
      const img = new Image();
      img.src = post.image;
    });
  }, []);

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-8 text-center">
          <p className="text-md font-assistant text-xl lg:pb-4">Explore</p>
          <h2 className="font-outfit text-4xl font-bold">Our Feature Posts</h2>
        </div>

        {/* Feature Post Section */}
        <div className="relative mx-auto w-full max-w-7xl">
          <img
            src={currentImage}
            alt="Feature Post"
            className="-z-10 rounded-lg object-cover transition-all duration-300 lg:h-[550px] lg:w-[85rem]"
          />
          <div className="absolute inset-0 flex items-start rounded-lg p-6">
            <h3 className="text-primary max-w-md text-2xl font-semibold lg:text-3xl">
              {currentImageTitle}
            </h3>
          </div>

          {/* blog post links */}
          <div className="bg-ascient/20 absolute bottom-0 left-0 z-500 flex w-full items-center justify-between">
            {posts.map((post, index) => (
              <div
                key={index}
                className="text-primary cursor-pointer rounded-lg p-4 transition-all duration-300 ease-in-out"
                onMouseEnter={() => {
                  setCurrentImage(post.image);
                  setCurrentImageTitle(post.title);
                }}
                onMouseLeave={() => {
                  setCurrentImage(post.image);
                  setCurrentImageTitle(post.title);
                }}
              >
                <p className="text-sm">{post.title}</p>
                <div className="mt-2 flex items-center justify-between">
                  <button className="bg-secondary px-3 py-1 text-xs">
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

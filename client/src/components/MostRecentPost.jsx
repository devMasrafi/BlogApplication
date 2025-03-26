import React from "react";
import ButtonComponents from "./ButtonComponents";

const posts = [
  {
    id: 1,
    title: "Afternoon Park, And Event Near You",
    image: "/park-image.jpg",
  },
  {
    id: 2,
    title: "Daily Health Care Routine For Elders",
    image: "/healty-foods.jpg",
  },
];

const featuredPost = {
  title: "Live In NYC, Best Food Places Around You",
  image: "/food-location.jpg",
};

const RecentPosts = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="font-outfit mb-6 font-bold lg:text-5xl">
        Most Recent Posts
      </h2>

      {/* Featured Post */}
      <div className="flex gap-6">
        <div className="bg-secondary w-full rounded-xl lg:w-2/3">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="h-[400px] w-full rounded-lg object-cover"
          />
          <div className="bg-secondary text-primary p-3">
            <h3 className="font-assistant text-2xl font-semibold">
              {featuredPost.title}
            </h3>
          </div>
          <ButtonComponents className="text-secondary bg-primary my-5 ml-3 cursor-pointer px-5 py-3">
            View this post
          </ButtonComponents>
        </div>

        {/* Recent Posts */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col">
              <img
                src={post.image}
                alt={post.title}
                className="h-[150px] w-full rounded-lg object-cover"
              />
              <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
              <button className="border-secondary mt-2 cursor-pointer rounded-md border px-4 py-2">
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* More Posts Section */}
      <div className="mt-12 flex flex-col items-center">
        <h3 className="text-xl font-semibold">View More Of This Posts</h3>
        <button className="border-secondary mt-3 rounded-md border px-6 py-2">
          Explore
        </button>
      </div>
    </div>
  );
};

export default RecentPosts;

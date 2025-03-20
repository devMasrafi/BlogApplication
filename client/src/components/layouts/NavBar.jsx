import React from "react";
import { Link, Links } from "react-router";
import Header from "../Header";
import { RiCheckboxBlankLine, RiCheckboxBlankFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav>
      <Header />
      <div className="lg:border-secondary/20 lg:flex lg:items-center lg:justify-between lg:border-y-2">
        <Link to={"/login"}>
          <div className="flex items-center justify-center gap-x-3 lg:mx-4">
            <div>
              <img
                className="lg:h-[2rem] lg:w-[2.5rem] lg:rounded-full"
                src="../../../pexels-ron-lach-9604304.jpg"
                alt="profile image"
              />
            </div>
            <h3 className="text-md font-poppins font-semibold text-nowrap capitalize">
              login
            </h3>
          </div>
        </Link>
        <div className="lg:w-full">
          <ul className="font-poppins @container mx-auto flex justify-center px-3 py-3 font-medium capitalize lg:flex lg:space-x-8 lg:text-lg">
            <li>
              <Link to="/" className="group flex items-center">
                <span className="flex items-center pr-1">
                  {/* Show outline icon by default, fill icon on hover */}
                  <RiCheckboxBlankLine className="inline group-hover:hidden" />
                  <RiCheckboxBlankFill className="hidden group-hover:inline" />
                </span>
                home
              </Link>
            </li>
            <li>
              <Link to="/about" className="group flex items-center">
                <span className="flex items-center pr-1">
                  <RiCheckboxBlankLine className="inline group-hover:hidden" />
                  <RiCheckboxBlankFill className="hidden group-hover:inline" />
                </span>
                about us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="group flex items-center">
                <span className="flex items-center pr-1">
                  <RiCheckboxBlankLine className="inline group-hover:hidden" />
                  <RiCheckboxBlankFill className="hidden group-hover:inline" />
                </span>
                blog
              </Link>
            </li>
            <li>
              <Link to="/feature" className="group flex items-center">
                <span className="flex items-center pr-1">
                  <RiCheckboxBlankLine className="inline group-hover:hidden" />
                  <RiCheckboxBlankFill className="hidden group-hover:inline" />
                </span>
                feature
              </Link>
            </li>
            <li>
              <Link to="/videos" className="group flex items-center">
                <span className="flex items-center pr-1">
                  <RiCheckboxBlankLine className="inline group-hover:hidden" />
                  <RiCheckboxBlankFill className="hidden group-hover:inline" />
                </span>
                videos
              </Link>
            </li>
            <li>
              <Link to="/workwithothers" className="group flex items-center">
                <span className="flex items-center pr-1">
                  <RiCheckboxBlankLine className="inline group-hover:hidden" />
                  <RiCheckboxBlankFill className="hidden group-hover:inline" />
                </span>
                work with others
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:mr-4 lg:text-3xl">
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router";
import Header from "../Header";
import { RiCheckboxBlankLine, RiCheckboxBlankFill } from "react-icons/ri";

const NavBar = () => {
  return (
    <nav>
      <Header />
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
    </nav>
  );
};

export default NavBar;

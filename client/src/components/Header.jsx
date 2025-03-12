import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="lg:my-3 lg:ml-3 lg:flex lg:items-center lg:justify-between">
      <div className="lg:flex lg:space-x-2">
        <FaFacebook className="lg:text-2xl" />
        <FaInstagram className="lg:text-2xl" />
        <FaYoutube className="lg:text-2xl" />
      </div>
      <div className="lg:w-[8rem]">
        <img src="../../Logo.png" alt="site logo" />
      </div>
      <div>
        <button>contact</button>
      </div>
    </div>
  );
};

export default Header;

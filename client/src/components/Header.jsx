import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex space-x-2">
        <FaFacebook className="text-xl " />
        <FaInstagram className="text-xl " />
        <FaYoutube  className="text-xl "/>
      </div>
      <div>
        <h2 className="text-3xl font-medium italic">Logo</h2>
      </div>
      <div>
        <button>contact</button>
      </div>
    </div>
  );
};

export default Header;

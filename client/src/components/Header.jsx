import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import ButtonComponents from "./ButtonComponents";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="lg:my-3 lg:flex lg:items-center lg:justify-between">
      <div className="lg:ml-3 lg:flex lg:space-x-2">
        <CiYoutube className="lg:text-3xl" />
        <CiFacebook className="lg:text-3xl" />
        <CiInstagram className="lg:text-3xl" />
      </div>
      <div className="lg:w-[8rem]">
        <img src="../../Logo.png" alt="site logo" />
      </div>
      <div className="mr-3 cursor-pointer">
        <Link to={"/contact"}>
          <ButtonComponents
            className={`bg-secondary border-secondary hover:bg-primary hover:text-secondary hover:border-secondary border-2 text-xl text-white hover:border-2`}
          >
            contact
          </ButtonComponents>
        </Link>
      </div>
    </div>
  );
};

export default Header;

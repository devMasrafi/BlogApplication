import React from "react";
import { Link } from "react-router";
import { CiFacebook, CiYoutube, CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      name: "facebook",
      url: "https://facebook.com",
      icon: <CiFacebook />,
    },
    {
      id: 2,
      name: "youtube",
      url: "https://youtube.com",
      icon: <CiYoutube />,
    },
    {
      id: 3,
      name: "instagram",
      url: "https://instagram.com",
      icon: <CiInstagram />,
    },
    {
      id: 3,
      name: "x ( twitter )",
      url: "https://instagram.com",
      icon: <RiTwitterXFill />,
    },
  ];

  return (
    <section className="shadow-topside lg:my-[2rem] lg:flex lg:justify-around lg:px-3 lg:pt-[4rem]">
      <div className="">
        <div className="lg:border-secondary/30 border-b-2 lg:mb-3">
          <div>
            <img src="../../../Logo.png" alt="site logo" />
          </div>
          <div className="lg:py-[2rem]">
            <ul className="font-assistant font-medium capitalize lg:flex lg:space-x-4 lg:text-lg lg:tracking-wider">
              <li>
                <Link to={"/support"}>Support</Link>
              </li>
              <li>
                <Link to={"/termsandcondition"}>terms and service</Link>
              </li>
              <li>
                <Link to={"/lisence"}>Lisence</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="font-assistant capitalize lg:text-sm">
          &copy; all rights reserved || copyright 2025
        </p>
      </div>
      {/* usefull links */}
      <div >
        <h2 className="font-outfit capitalize lg:text-2xl lg:font-medium lg:tracking-wider">
          usefull links
        </h2>
        <ul className="font-assistant capitalize lg:text-lg lg:tracking-wider">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/about"}>about</Link>
          </li>
          <li>
            <Link to={"/contact"}>contact</Link>
          </li>
          <li>
            <Link to={"blog"}>blog</Link>
          </li>
          <li>
            <Link to={"/features"}>features</Link>
          </li>
          <li>
            <Link to={"videos"}>videos</Link>
          </li>
          <li>
            <Link to={"/workwithothers"}>workwithothers</Link>
          </li>
        </ul>
      </div>
      {/* social links */}
      <div>
        <h2 className="font-outfit capitalize lg:text-2xl lg:font-medium lg:tracking-wider">
          follow us on
        </h2>
        <ul className="lg:mt-3">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-assistant capitalize hover:text-blue-700 lg:flex lg:items-center lg:gap-x-2 lg:text-xl lg:tracking-wider"
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;

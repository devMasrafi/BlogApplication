import React, { useState, useEffect } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 rounded-full">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-secondary/70 rounded-full p-2 text-white"
        >
          <FaRegArrowAltCircleUp className="text-3xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;

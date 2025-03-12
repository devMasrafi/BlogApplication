import React from "react";

const ButtonComponents = ({ className = "", onClick, children }) => {
  const baseStyle = `px-6 py-1 font-poppins transition duration-300 corsor-pointer rounded-sm`;

  return (
    <button className={`${className} ${baseStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponents;

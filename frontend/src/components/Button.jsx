import React from "react";

const Button = ({ className, name }) => {
  return (
    <button className={`${className} px-5 py-2 rounded-full`}>{name}</button>
  );
};

export default Button;

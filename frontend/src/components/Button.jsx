import React from "react";

const Button = ({ className, name }) => {
  return (
    <button className={`${className} px-6 py-3 rounded-full`}>{name}</button>
  );
};

export default Button;

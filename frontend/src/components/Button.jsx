import React from "react";

const Button = ({ className, name }) => {
  return (
    <button className={`${className} rounded-2xl`}>{name}</button>
  );
};

export default Button;

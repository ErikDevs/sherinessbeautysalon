import React from "react";

const Button = ({ className, name, href }) => {
  return (
    <a href={href}>
      <button className={`${className} rounded-xl`}>{name}</button>
    </a>
  );
};

export default Button;

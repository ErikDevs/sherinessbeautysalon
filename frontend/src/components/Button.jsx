import React from "react";

const Button = ({ className, name, href }) => {
  return (
    <a href={href} target="_blank">
      <button className={`${className} rounded-xl p-5`}>{name}</button>
    </a>
  );
};

export default Button;

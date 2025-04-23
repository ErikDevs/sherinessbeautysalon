import React from "react";

const Button = ({ className, name, href }) => {
  return (
    <a href={href} target="_blank">
      <button className={`${className} w-full rounded-md px-5 text-sm py-2`}>
        {name}
      </button>
    </a>
  );
};

export default Button;

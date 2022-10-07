import React from "react";
import "./index.scss";

const Button = ({ className, label, type = "submit", onClick }) => {
  return (
    <button type={type} className={`${className} btn`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

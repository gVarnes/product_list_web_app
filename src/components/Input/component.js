import React from "react";
import "./index.scss";

const Input = ({ label, register, name, required }) => {
  return (
    <>
      <label className="form__input">
        {label}
        <input type="text" {...register(name)} required={required} />
      </label>
    </>
  );
};

export default Input;

import React from "react";
import "./index.scss";

import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button/component";

import { useDispatch } from "react-redux";
import { setAddProductModal } from "../../redux/slices/modalSlice";

export const inputFields = [
  { label: "Name", name: "name" },
  { label: "Image URL", name: "imageUrl" },
  { label: "Count", name: "count" },
  { label: "Width", name: "size.width" },
  { label: "Height", name: "size.height" },
  { label: "Weight", name: "weight" },
];

const AddingForm = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    dispatch(setAddProductModal(false));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__body">
        {inputFields.map((field) => (
          <Input
            label={field.label}
            name={field.name}
            register={register}
            key={field.name}
            required
          />
        ))}
      </div>
      <div className="form__buttons">
        <Button
          type="button"
          label="Cancel"
          className="form__button"
          onClick={() => dispatch(setAddProductModal(false))}
        />
        <Button label="Confirm" className="form__button" />
      </div>
    </form>
  );
};

export default AddingForm;

import React from "react";
import "./index.scss";

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import Input from "../Input";
import Button from "../Button";

import { useNavigate } from "react-router-dom";
import { setEditProductModal } from "../../redux/slices/modalSlice";
import { inputFields } from "../AddingForm/component";

//This function is needed for checking which field was modified
const dirtyValues = (dirtyFields, allValues) => {
  // NOTE: Recursive function.

  // If *any* item in an array was modified, the entire array must be submitted, because there's no
  // way to indicate "placeholders" for unchanged elements. `dirtyFields` is `true` for leaves.
  if (dirtyFields === true || Array.isArray(dirtyFields)) {
    return allValues;
  }

  // Here, we have an object.
  return Object.fromEntries(
    Object.keys(dirtyFields).map((key) => [
      key,
      dirtyValues(dirtyFields[key], allValues[key]),
    ])
  );
};

const EditingForm = ({ id }) => {
  const { product } = useSelector((state) => state.modal);
  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm({
    defaultValues: product,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(dirtyValues(dirtyFields, data)),
      headers: {
        "Content-type": "application/json",
      },
    });
    navigate("/");
    dispatch(setEditProductModal(false));
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
          />
        ))}
      </div>
      <div className="form__buttons">
        <Button type="button" label="Cancel" className="form__button" />
        <Button label="Confirm" className="form__button" />
      </div>
    </form>
  );
};

export default EditingForm;

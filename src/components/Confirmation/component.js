import React from "react";
import "./index.scss";
import Button from "../Button";

import { useDispatch, useSelector } from "react-redux";
import {
  setConfirmationModal,
  setProducts,
} from "../../redux/slices/modalSlice";

const Confirmation = () => {
  const { confirmationModal, products } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <>
      <p className="confirmation">Do you want to delete this post?</p>
      <div className="confirmation__buttons">
        <Button
          label="No"
          onClick={() => dispatch(setConfirmationModal({ isOpen: false }))}
        />
        <Button
          label="Yes"
          onClick={() => {
            deleteProduct(confirmationModal.id);
            dispatch(setConfirmationModal({ isOpen: false }));
            dispatch(
              setProducts(
                products.filter((item) => item.id !== confirmationModal.id)
              )
            );
          }}
        />
      </div>
    </>
  );
};

export default Confirmation;

import React from "react";

import Modal from "./../components/Modal";
import AddingForm from "./../components/AddingForm";
import EditingForm from "./../components/EditingForm";

import { useSelector, useDispatch } from "react-redux";
import {
  setAddProductModal,
  setConfirmationModal,
  setEditProductModal,
} from "./../redux/slices/modalSlice";
import Confirmation from "../components/Confirmation/component";

const Portal = () => {
  const { addProductModal, editProductModal, confirmationModal, currentId } =
    useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        isModalOpen={addProductModal}
        onClose={() => {
          dispatch(setAddProductModal(false));
        }}
      >
        <AddingForm />
      </Modal>
      <Modal
        isModalOpen={editProductModal}
        onClose={() => {
          dispatch(setEditProductModal(false));
        }}
      >
        <EditingForm id={currentId} />
      </Modal>
      <Modal
        isModalOpen={confirmationModal.isOpen}
        onClose={() => {
          dispatch(setConfirmationModal(false));
        }}
      >
        <Confirmation />
      </Modal>
    </>
  );
};

export default Portal;

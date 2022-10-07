import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addProductModal: false,
  editProductModal: false,
  confirmationModal: {
    isOpen: false,
    id: 0,
  },
  currentId: 0,
  products: [],
  product: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setAddProductModal: (state, action) => {
      state.addProductModal = action.payload;
    },
    setEditProductModal: (state, action) => {
      state.editProductModal = action.payload;
    },
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setConfirmationModal: (state, action) => {
      state.confirmationModal.isOpen = action.payload.isOpen;
      state.confirmationModal.id = action.payload.id;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  setAddProductModal,
  setEditProductModal,
  setCurrentId,
  setProduct,
  setConfirmationModal,
  setProducts,
} = modalSlice.actions;

export default modalSlice.reducer;

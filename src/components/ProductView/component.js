import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../Button";
import "./index.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentId,
  setEditProductModal,
  setProduct,
} from "../../redux/slices/modalSlice";

const ProductView = () => {
  const { id } = useParams();
  const { product } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((data) => data.json())
      .then((res) => dispatch(setProduct(res)));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(setCurrentId(product.id));
  }, [product, dispatch]);

  return (
    <>
      <Link to="/">
        <Button label="Go Back" />
      </Link>
      <div className="product">
        <div className="product__name">Id: {product.id}</div>
        <div className="product__name">Name: {product.name}</div>
        <div className="product__name">ImageURL: {product.imageUrl}</div>
        <div className="product__name">Count: {product.count}</div>
        <div className="product__name">Width: {product.size?.width}</div>
        <div className="product__name">Height: {product.size?.height}</div>
        <div className="product__name">Weight: {product.weight}</div>
      </div>
      <Button
        label="Edit"
        onClick={() => dispatch(setEditProductModal({ isOpen: true }))}
      />
    </>
  );
};

export default ProductView;

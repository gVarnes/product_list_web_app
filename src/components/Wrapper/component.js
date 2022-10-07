import React, { useEffect } from "react";
import Button from "../Button";
import "./index.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  setAddProductModal,
  setConfirmationModal,
  setProducts,
} from "../../redux/slices/modalSlice";

import { Link } from "react-router-dom";

const Wrapper = () => {
  const { products } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((res) =>
        dispatch(
          setProducts(
            [...res]
              .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
              .sort((a, b) =>
                a.count > b.count ? 1 : b.count > a.count ? -1 : 0
              )
          )
        )
      );
  }, [dispatch]);

  return (
    <>
      <div className="products">
        <ul className="products__list list">
          {products.map((item) => (
            <li className="list__item" key={item.id}>
              <Link to={`/${item.id}`}>
                <div className="list__item-name">{item.name}</div>
              </Link>
              <Button
                label="Remove"
                onClick={() =>
                  dispatch(setConfirmationModal({ isOpen: true, id: item.id }))
                }
              />
            </li>
          ))}
        </ul>
      </div>
      <Button
        label="Add"
        className="buttons__add"
        onClick={() => dispatch(setAddProductModal(true))}
      />
    </>
  );
};

export default Wrapper;

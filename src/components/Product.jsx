import React, { useContext } from "react";
import "./App.css"
import { StateContext } from "./App";
import { fetchAddToCart } from "../api/fetchAPICalls";
import { ACTIONS } from "../utils/constants";
import Status from './Status'


function Product() {
  const [state, dispatch] = useContext(StateContext);

  function handleAddToCart() {
    fetchAddToCart(state.activeProductData).then(({ cart }) => {
      dispatch({ type: ACTIONS.REPLACE_BAG, cart: cart });
    });
  }

  return (
    <div className="component-item">
      <div className="item-Image-container">
        <img className = "item-Image-properties" src={state.activeProductData.image} alt="product-image" />
      </div>
      <div >
        <div >
          <h2 >{state.activeProductData.name}</h2>
          <p className="item-description">{state.activeProductData.desc}</p>
          <h3 >${state.activeProductData.price}</h3>
          <button className=" add-to-bag-btn-submit" onClick={handleAddToCart}>
            Add To Bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

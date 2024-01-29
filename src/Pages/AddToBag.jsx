import React, { useContext } from "react";
import { ACTIONS } from "../utils/constants";
import { StateContext } from "../components/App";
import { fetchAddToCart } from "../api/fetchAPICalls";

function AddToCart({ product }) {
  const [state, dispatch] = useContext(StateContext);

  function handleClick(event) {
    event.stopPropagation();
    fetchAddToCart(product).then(({ cart }) => {
      dispatch({ type: ACTIONS.REPLACE_BAG, cart: cart });
    });
  }

  return (
    <div className="component__add__to__cart">
      <button className="button__add__to__cart add-to-bag-btn-submit" onClick={handleClick}>
        Add To Bag
      </button>
    </div>
  );
}

export default AddToCart;

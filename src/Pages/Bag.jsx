import React, { useContext } from "react";
import { ACTIONS } from "../utils/constants";
import { priceWithCommas } from "../utils/utils";
import { StateContext } from "../components/App";
import Checkout from "./Checkout";
import {
  fetchChangeQuantity,
  fetchClearCart,
  fetchRemoveFromCart,
} from "../api/fetchAPICalls";

function Cart() {
  const [state, dispatch] = useContext(StateContext);

  function handleChange(event, item) {
    const checked = event.target.checked;
    let checkoutItems;
    if (checked) checkoutItems = [...state.checkoutItems, item];
    else
      checkoutItems = [
        ...state.checkoutItems.filter((product) => product.name !== item.name),
      ];
    dispatch({ type: ACTIONS.REPLACE_CHECKOUT_ITEMS, checkoutItems });
  }

  function handleChangeQuantity(event, cartItem) {
    const quantity = event.target.value;
    fetchChangeQuantity(cartItem, quantity).then(({ cart }) => {
      dispatch({ type: ACTIONS.REPLACE_BAG, cart });
    });
  }

  function handleSelectAll() {
    if (state.checkoutItems.length === 0)
      dispatch({
        type: ACTIONS.REPLACE_CHECKOUT_ITEMS,
        checkoutItems: state.cart,
      });
    else dispatch({ type: ACTIONS.REPLACE_CHECKOUT_ITEMS, checkoutItems: [] });
  }

  function handleRemoveFromCart(cartItem, type) {
    fetchRemoveFromCart(cartItem, type).then(({ cart }) => {
      dispatch({
        type: ACTIONS.REPLACE_BAG,
        cart,
      });
    });
    if (state.checkoutItems.includes(cartItem)) {
      dispatch({
        type: ACTIONS.REPLACE_CHECKOUT_ITEMS,
        checkoutItems: state.checkoutItems.filter(
          (product) => product.name !== cartItem.name
        ),
      });
    }
  }

  function handleRemoveAll() {
    fetchClearCart().then(({ cart }) =>
      dispatch({
        type: ACTIONS.REPLACE_BAG,
        cart,
      })
    );
    dispatch({
      type: ACTIONS.REPLACE_CHECKOUT_ITEMS,
      checkoutItems: [],
    });
  }


  return (
    <>
      <div className="component-bag">
      <div className="bag-buttons">
          <button style={{ display: (state.cart.length === 0 && "none") || "block" }} className="checkout-select-all cart-btn-submit"  onClick={handleSelectAll}
          >
            {(state.checkoutItems.length !== state.cart.length && "Select") ||
              "Deselect"}{" "}
            All
          </button>
          <button style={{ display: (state.cart.length === 0 && "none") || "block" }}  className="checkout-remove-all cart-btn-submit"  onClick={handleRemoveAll}
          >  Remove All
          </button>
        </div>
      <Checkout />
        
        <div className="bag-array">
          {state.cart.map((item) => (
            <div className="bag-item-card" key={"cartItem" + Math.random()}>
              <div className="bag-checkbox-img">
                <input type="checkbox" className="bag-item-checkbox" onChange={(event) => handleChange(event, item)} checked={state.checkoutItems.includes(item)}
                />
                <img src="" alt="" className="bag-item-img" />
              </div>
              <h3 className="bag-item-name">{item.name}</h3>
              {/* <p className="bag-item-desc">
                {item.desc || ( <>  No Description Found  </>  )}
              </p> */}
              <div className = "img-btn-side">
              <img className = "properties-of-image" src={item.image} alt="product-card-image" />
               <button className="remove__from__bag btn-submit" onClick={() =>    handleRemoveFromCart(item, ACTIONS.REMOVE_ITEM)  }
                >
                  Remove From Bag
                </button>
              </div>
               
              <div className="bag__price__qty__controls">
                <input type="number" className="bag__item__qty" name=""  id=""  min={0}  defaultValue={item.quantity}  onChange={(event) => handleChangeQuantity(event, item)}
                />
                <h3 className="bag__item__price">  $  {priceWithCommas(  parseFloat(item.price * item.quantity).toFixed(2) )}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;

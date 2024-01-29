import React, { useContext, useState } from "react";
import { sumUpQuantities, sumUpPrice, priceWithCommas } from "../utils/utils";
import { StateContext } from "../components/App";
import { ACTIONS } from "../utils/constants";
import MessagePopUp from "../components/MessagePopUp";
import "../components/App.css"
import { fetchCheckout } from "../api/fetchAPICalls";

function Checkout() {
  const [state, dispatch] = useContext(StateContext);
  const [checkoutProcessing, setCheckoutProcessing] = useState(false);
  const [dialog, setDialog] = useState({
    show: false,
    content: "",
  });

  function handleCheckout() {
    if (state.checkoutItems.length > 0) {
      fetchCheckout(state.checkoutItems).then((response) => {
        setCheckoutProcessing(true);
        setTimeout(() => {
          dispatch({
            type: ACTIONS.REPLACE_BAG,
            cart: response.cart,
          });
          dispatch({ type: ACTIONS.REPLACE_CHECKOUT_ITEMS, checkoutItems: [] });
          setCheckoutProcessing(false);
          setDialog({ show: true, content: response.message });
        }, 2000);
      });
    } else
      setDialog({
        show: true,
        content:
          "Your Bag is empty!! Please add items to purchase!!",
      });
  }

  return (
    <>
      <div className="checked-item-details">
        <h4 className="checked-item-title">To Buy</h4>
        <div className="checked-items">
          <h4 >   Total Items :{sumUpQuantities(state.checkoutItems)}   </h4>
          <h2 className="checked-value">    Final Amount : $    {priceWithCommas(     parseFloat(sumUpPrice(state.checkoutItems)).toFixed(2)      )}   </h2>
          <button    disabled={checkoutProcessing}    className="btn-submit"  onClick={handleCheckout}     >
            {(checkoutProcessing && "Processing...") || "Buy Now"}
          </button>
        </div>
      </div>
      <MessagePopUp
        show={dialog.show}
        onClose={() => setDialog({ ...dialog, show: false })}
        content={dialog.content}
        className = "message-content"
      />
    </>
  );
}

export default Checkout;

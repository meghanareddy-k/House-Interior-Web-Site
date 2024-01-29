import React, { useContext, useEffect, useState } from "react";
import { COMPONENTS, ACTIONS } from "../utils/constants";
import "./App.css";
import { sumUpQuantities } from "../utils/utils";
import { StateContext } from "./App";

function Navbar() {
  const [state, dispatch] = useContext(StateContext);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    toggleComponentAndSearchInput();
  }, [searchInput]);

  function toggleComponentAndSearchInput() {
    dispatch({ type: ACTIONS.SET_SEARCH_INPUT, searchInput });
    dispatch({
      type: ACTIONS.SET_COMPONENT,
      activeComponent:
        (searchInput && COMPONENTS.PRODUCTS) || COMPONENTS.HOME,
    });
  }

  function handleChange(event) {
    const input = event.currentTarget.value;
    setSearchInput(input);
  }

  function handleClick(event, component) {
    event.preventDefault();
    dispatch({ type: ACTIONS.SET_COMPONENT, activeComponent: component });
  }

  function handleLogout() {
    dispatch({ type: ACTIONS.PENDING  });
    setTimeout(() => {
      dispatch({ type: ACTIONS.LOG_OUT });
    }, 2000);
    
  }

  return (
    <div className="dashboard-component">
      <div className="dashboard-left">
        <div className="dashboard-stack"> Heavenly Interior</div>
        <div
          className="dashboard-title"
          onClick={(event) => handleClick(event, COMPONENTS.CATEGORIES)}
        >
         
        </div>

        <div className="dashboard-links">
          <a className="dashboard-home-link effect-1" onClick={(event) => handleClick(event, COMPONENTS.HOME)}>Home</a>
          <a className="dashboard-categories-link" onClick={(event) => handleClick(event, COMPONENTS.CATEGORIES)} > Shop By Type
          </a>

        </div>
        <div className="dashboard-search">
          <input className="dashboard-searchbar" type="search" name="navbarsearch" onChange={handleChange} value={searchInput} placeholder="Search here"
          />
        </div>
      </div>

      <div className="to-logout">
        <button className="btn-submit-logout" onClick={handleLogout}>Logout</button>
      </div>

      <div
        className="dashboard-bag"
        onClick={(event) => handleClick(event, COMPONENTS.CART)}
      >
        Bag({sumUpQuantities(state.cart)})
      </div>
    </div>
  );
}

export default Navbar;

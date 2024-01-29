import React, { useContext, useEffect, useState } from "react";
import { products } from "../data/products";
import { getPaginationOffsets, getResultsBySearchInput } from "../utils/utils";
import { ACTIONS, LIMIT , COMPONENTS} from "../utils/constants";
import "./App.css"
import AddToCart from "../Pages/AddToBag";
import { StateContext } from "./App";

function Products() {
  const [state, dispatch] = useContext(StateContext);

  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(LIMIT);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    toggleResultsByCategoryOrSearchInput();
  }, [state.searchInput]);

  function toggleResultsByCategoryOrSearchInput() {
    if (state.searchInput) {
      const searchFilteredArray = getResultsBySearchInput(
        products,
        state.searchInput
      );
      dispatch({
        type: ACTIONS.SET_CATEGORY,
        activeCategory:
          (searchFilteredArray.length > 0 && searchFilteredArray[0].category) ||
          "",
      });
      setFilteredProducts(searchFilteredArray);
    } else
      setFilteredProducts(
        products
      );
  }

  function handlePagination(selection) {
    const values = getPaginationOffsets(selection, offset1, offset2);
    const { newOffset1, newOffset2 } = values;
    setOffset1(newOffset1);
    setOffset2(newOffset2);
  }

  function renderProductPage(data) {
    dispatch({
      type: ACTIONS.SET_COMPONENT,
      activeComponent: COMPONENTS.PRODUCT,
    });
    dispatch({ type: ACTIONS.ACTIVE_PRODUCT_DATA, activeProductData: data });
  }

  return (
    <div className="products-container">
      <div className="display-category">
        <h4 className="category-active">{}</h4>
      </div>
      <div className="products-array">
        {filteredProducts.map((data, index) => (
          <div className="card-of-product" onClick={(event) => renderProductPage(data)}>
            <img className = "properties-of-image" src={data.image} alt="product-card-image" />
            <h3 >{data.name}</h3>
            <h3 >{data.price}</h3>
            <AddToCart product={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
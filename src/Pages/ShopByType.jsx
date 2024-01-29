import React, { useContext, useEffect, useState } from "react";
import "../components/App.css"
import { ACTIONS, COMPONENTS, LIMIT } from "../utils/constants";
import { getPaginationOffsets } from "../utils/utils";
import { StateContext } from "../components/App";
import { fetchCategoriesData } from "../api/fetchAPICalls";

function Categories() {
  const [state, dispatch] = useContext(StateContext);
  const [categories, setCategories] = useState([]);

  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(LIMIT);
  useEffect(() => {
    fetchCategoriesData().then(({ categories }) => setCategories(categories));
  }, []);

  function handleClick(category) {
    dispatch({ type: ACTIONS.SET_CATEGORY, activeCategory: category });
    dispatch({
      type: ACTIONS.SET_COMPONENT,
      activeComponent: COMPONENTS.PRODUCTS,
    });
  }

  function handlePagination(selection) {
    const values = getPaginationOffsets(selection, offset1, offset2);
    const { newOffset1, newOffset2 } = values;
    setOffset1(newOffset1);
    setOffset2(newOffset2);
  }

  return (
    <div className="categories-unit">
      <ul className="array-of-categories">
        {categories.map((data, index) => (
          <li
            key={data.cat_id + Math.random()}
            className="component-category"
            onClick={() => handleClick(data.name)}
          >
            <div className="type-img">
              <img className = "properties-of-image" src={data.image} alt="category-image" />
            </div>
            <h3 >{data.name}</h3>
            <h3 >{data.count}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

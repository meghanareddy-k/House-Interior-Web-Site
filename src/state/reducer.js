import { ACTIONS, CLIENT } from "../utils/constants";

import { LOGIN_STATUS } from "../utils/constants";
export function loginAction(state, action) {
  return {
    ...state,
    error: "",
    loginStatus: LOGIN_STATUS.IS_LOGGED_IN,
    username: action.username,
  };
}

export function loginPendingAction(state, action) {
  return {
    ...state,
    error: "",
    loginStatus: LOGIN_STATUS.PENDING,
  };
}

export function replaceCartAction(state, action) {
  return {
    ...state,
    error: "",
    cart: action.cart,
  };
}

export function replaceCheckoutItemsAction(state, action) {
  return {
    ...state,
    error: "",
    checkoutItems: action.checkoutItems,
  };
}

export function replaceWishListAction(state, action) {
  return {
    ...state,
    error: "",
    wishList: action.wishList,
  };
}

export function logoutAction(state, action) {
  return {
    ...state,
    error: "",
    cart: [],
    loginStatus: LOGIN_STATUS.NOT_LOGGED_IN,
    username: "",
  };
}

export function reportErrorAction(state, action) {
  return {
    ...state,
    error: action.error || "ERROR",
  };
}

export function addToCartAction(state, action) {
  return {
    ...state,
    cart: [...state.cart, action.product],
    error: "",
  };
}

export function removeFromCartAction(state, action) {
  return {
    ...state,
    cart: state.cart.filter((product) => product.pid !== action.pid),
    error: "",
  };
}

export function setComponentAction(state, action) {
  return {
    ...state,
    activeComponent: action.activeComponent,
  };
}

export function setCategoryAction(state, action) {
  return {
    ...state,
    activeCategory: action.activeCategory,
  };
}

export function setSearchInputAction(state, action) {
  return {
    ...state,
    searchInput: action.searchInput,
  };
}

export function setActiveProductDataAction(state, action) {
  return {
    ...state,
    error: "",
    activeProductData: action.activeProductData,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOG_IN:
      return loginAction(state, action);
    case ACTIONS.PENDING:
      return loginPendingAction(state, action);
    case ACTIONS.REPLACE_BAG:
      return replaceCartAction(state, action);
    case ACTIONS.REPLACE_CHECKOUT_ITEMS:
      return replaceCheckoutItemsAction(state, action);
    case ACTIONS.LOG_OUT:
      return logoutAction(state, action);
    case ACTIONS.ADD_TO_BAG:
      return addToCartAction(state, action);
    case ACTIONS.REMOVE_FROM_BAG:
      return removeFromCartAction(state, action);
    case ACTIONS.REPORT_ERROR:
      return reportErrorAction(state, action);
    case ACTIONS.SET_COMPONENT:
      return setComponentAction(state, action);
    case ACTIONS.SET_CATEGORY:
      return setCategoryAction(state, action);
    case ACTIONS.SET_SEARCH_INPUT:
      return setSearchInputAction(state, action);
    case ACTIONS.REPLACE_WISHLIST:
      return replaceWishListAction(state, action);
    case ACTIONS.ACTIVE_PRODUCT_DATA:
      return setActiveProductDataAction(state, action);

    default:
      throw new Error({ error: CLIENT.UNKNOWN_ACTION, detail: action });
  }
}

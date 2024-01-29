export const LOGIN_STATUS = {
  PENDING: "pending",
  NOT_LOGGED_IN: "notLoggedIn",
  IS_LOGGED_IN: "loggedIn",
};

export const SERVER = {
  AUTH_MISSING: "auth-missing",
  AUTH_INSUFFICIENT: "auth-insufficient",
  REQUIRED_USERNAME: "required-username",
  REQUIRED_MESSAGE_INPUT: "required-message-input",
  TASK_MISSING: "noSuchId",
};

export const CLIENT = {
  NETWORK_ERROR: "networkError",
  NO_SESSION: "noSession",
  UNKNOWN_ACTION: "unknownAction",
};

export const MESSAGES = {
  [CLIENT.NETWORK_ERROR]:
    "Trouble connecting to the network.  Please try again",
  [SERVER.AUTH_INSUFFICIENT]:
    "Your username/password combination does not match any records, please try again.",
  [SERVER.REQUIRED_USERNAME]:
    "Please enter a valid (letters and/or numbers) username",
  [SERVER.REQUIRED_TASK]: "Please enter the task to do",
  [SERVER.REQUIRED_MESSAGE_INPUT]: "Please enter a valid message",
  default: "Something went wrong.  Please try again",
};

export const ACTIONS = {
  LOG_IN: "logIn",
  LOG_OUT: "logOut",
  PENDING: "pending",
  REPLACE_BAG: "replaceBag", //GET (For useEffect calls)
  REPLACE_CHECKOUT_ITEMS: "replaceCheckoutItems",
  REPLACE_WISHLIST: "replaceWishList",
  REPORT_ERROR: "reportError",
  ADD_TO_BAG: "addToBag", //POST (adding item to cart),
  REMOVE_FROM_BAG: "removeFromBag", //DELETE (removing item from cart)
  SET_COMPONENT: "setComponent",
  SET_CATEGORY: "setCategory",
  REDUCE_QUANTITY: "reduceQuantity",
  REMOVE_ITEM: "removeItem",
  SET_SEARCH_INPUT: "setSearchInput",
  ACTIVE_PRODUCT_DATA: "activeProductData",
};

export const COMPONENTS = {
  HOME: "home",
  CATEGORIES: "categories",
  PRODUCTS: "products",
  PRODUCT: "product",
  CART: "cart",
  CHECKOUT: "checkout",
};

export const CATEGORIES = {
  LIVING_ROOM: "Living Room",
  KITCHEN: "Kitchen",
  BEDROOM: "Bed Room",
  HOME_OFFICE: "Home Office",
  DINING_ROOM: 'Dining Room',
};

export const LIMIT = 3;

const CATEGORIES = {
  LIVING_ROOM: "Living Room",
  KITCHEN: "Kitchen",
  BEDROOM: "Bed Room",
  HOME_OFFICE: "Home Office",
  DINING_ROOM: 'Dining Room',
};

const ACTIONS = {
  LOG_IN: "logIn",
  LOG_OUT: "logOut",
  PENDING: "pending",
  REPLACE_BAG: "replaceBag", 
  REPLACE_CHECKOUT_ITEMS: "replaceCheckoutItems",
  REPLACE_WISHLIST: "replaceWishList",
  REPORT_ERROR: "reportError",
  ADD_TO_BAG: "addToBag", 
  REMOVE_FROM_BAG: "removeFromBag",
  SET_COMPONENT: "setComponent",
  SET_CATEGORY: "setCategory",
  REDUCE_QUANTITY: "reduceQuantity",
  REMOVE_ITEM: "removeItem",
  SET_SEARCH_INPUT: "setSearchInput",
};

const LIMIT = 3;

module.exports = {
  ACTIONS,
  CATEGORIES,
  LIMIT,
};

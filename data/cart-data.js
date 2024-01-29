const { ACTIONS } = require("../constants");

const bagData = {};

const bagFunctions = {};

bagFunctions.createBagForUser = function createBagForUser(username) {
  if (!bagData[username]) {
    bagData[username] = [];
  }
  return bagData[username];
};

bagFunctions.addToBag = function addToBag(product, username) {
  const cart = bagData[username];
  const cartProduct = cart.find((data) => data.name === product.name);
  if (cartProduct) {
    cartProduct.quantity = cartProduct.quantity + 1;
  } else
    cart.push({ ...product, quantity: (product && product.quantity) || 1 });
  return cart;
};

bagFunctions.removeFromBag = function removeFromBag(
  product,
  type,
  username
) {
  let cart = bagData[username];
  const cartProduct = cart.find((data) => data.name === product.name);
  if (type === ACTIONS.REDUCE_QUANTITY) {
    if (cartProduct && cartProduct.quantity > 1) {
      cartProduct.quantity = cartProduct.quantity - 1;
    } else cart = cart.filter((data) => data.name !== product.name);
  } else if (type === ACTIONS.REMOVE_ITEM)
    cart = cart.filter((data) => data.name !== product.name);
  return (bagData[username] = cart);
};

bagFunctions.getBagData = function getBagData(username) {
  return bagData[username];
};

bagFunctions.clearBag = function clearBag(username) {
  return (bagData[username] = []);
};

bagFunctions.replaceBag = function replaceBag(updatedCart = [], username) {
  return (bagData[username] = updatedCart);
};

bagFunctions.checkout = function checkout(checkoutItems, username) {
  let cart = bagData[username];
  let isCheckoutSuccessful = true;
  for (let index = 0; index < checkoutItems.length; index++) {
    const cartProduct = cart.find(
      (product) => product.name === checkoutItems[index].name
    );
    if (!cartProduct) {
      isCheckoutSuccessful = false;
      break;
    }
    cartProduct.quantity = cartProduct.quantity - checkoutItems[index].quantity;
    if (cartProduct.quantity <= 0)
      cart = this.removeFromBag(cartProduct, ACTIONS.REMOVE_ITEM, username);
  }
  bagData[username] = cart;
  return isCheckoutSuccessful;
};

bagFunctions.contains = function contains(product, username) {
  const cart = bagData[username];
  return JSON.stringify(cart).includes(JSON.stringify(product.name));
};

bagFunctions.hasValidCheckoutItems = function hasValidCheckoutItems(
  checkoutItems,
  username
) {
  let isValid = true;
  if (!checkoutItems) isValid = false;
  for (let index = 0; index < checkoutItems.length; index++) {
    if (!this.contains(checkoutItems[index], username)) {
      isValid = false;
      break;
    }
  }
  return isValid;
};

bagFunctions.hasValidCheckoutQuantities = function hasValidCheckoutQuantities(
  checkoutItems,
  username
) {
  const cart = bagData[username];
  let isValid = true;
  for (let index = 0; index < checkoutItems.length; index++) {
    const cartItem = cart.find(
      (product) => product.name === checkoutItems[index].name
    );
    if (!cartItem) {
      isValid = false;
      break;
    } else if (
      isNaN(checkoutItems[index].quantity) ||
      checkoutItems[index].quantity > cartItem.quantity
    ) {
      isValid = false;
      break;
    }
  }
  return isValid;
};

module.exports = {
  bagFunctions,
};

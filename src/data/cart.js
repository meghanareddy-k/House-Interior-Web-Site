// import { ACTIONS } from "../utils/constants";
// const bagData = {
//   cart: [],
// };

// export const bagFunctions = {};

// bagFunctions.addToBag = function addToBag(product) {
//   const cartProduct = bagData.cart.find((data) => data.name === product.name);
//   if (cartProduct) {
//     cartProduct.quantity = cartProduct.quantity + 1;
//   } else bagData.cart.push({ ...product, quantity: product.quantity || 1 });
// };

// bagFunctions.removeFromBag = function removeFromBag(product, type) {
//   const cartProduct = bagData.cart.find((data) => data.name === product.name);
//   if (type === ACTIONS.REDUCE_QUANTITY) {
//     if (cartProduct && cartProduct.quantity > 1) {
//       cartProduct.quantity = cartProduct.quantity - 1;
//     } else
//       bagData.cart = bagData.cart.filter(
//         (data) => data.name !== product.name
//       );
//   } else if (type === ACTIONS.REMOVE_ITEM)
//     bagData.cart = bagData.cart.filter((data) => data.name !== product.name);
// };

// bagFunctions.getBagData = function getBagData() {
//   return bagData.cart;
// };

// bagFunctions.clearBag = function clearBag() {
//   return (bagData.cart = []);
// };

// bagFunctions.replaceBag = function replaceBag(updatedCart = []) {
//   return (bagData.cart = updatedCart);
// };

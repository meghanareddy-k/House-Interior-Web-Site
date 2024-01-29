// import { ACTIONS } from "../utils/constants";
// const wishListData = {
//   wishList: [],
// };

// export const wishListFunctions = {};

// wishListFunctions.addToWishList = function addToWishList(product) {
//   const wishListProduct = wishListData.wishList.find(
//     (data) => data.name === product.name
//   );
//   if (wishListProduct) {
//     wishListProduct.quantity = wishListProduct.quantity + 1;
//   } else
//     wishListData.wishList.push({ ...product, quantity: product.quantity || 1 });

//   console.log(wishListData.wishList);
// };

// wishListFunctions.removeFromWishList = function removeFromWishList(
//   product,
//   type
// ) {
//   const wishListProduct = wishListData.wishList.find(
//     (data) => data.name === product.name
//   );
//   if (type === ACTIONS.REDUCE_QUANTITY) {
//     if (wishListProduct && wishListProduct.quantity > 1) {
//       wishListProduct.quantity = wishListProduct.quantity - 1;
//     } else
//       wishListData.wishList = wishListData.wishList.filter(
//         (data) => data.name !== product.name
//       );
//   } else if (type === ACTIONS.REMOVE_ITEM)
//     wishListData.wishList = wishListData.wishList.filter(
//       (data) => data.name !== product.name
//     );

//   console.log(wishListData.wishList);
// };

// wishListFunctions.getWishListData = function getWishListData() {
//   return wishListData.wishList;
// };

// wishListFunctions.clearWishList = function clearWishList() {
//   return (wishListData.wishList = []);
// };

// wishListFunctions.replaceWishList = function replaceWishList(
//   updatedWishList = []
// ) {
//   return (wishListData.wishList = updatedWishList);
// };

// wishListFunctions.removeMultipleItems = function removeMultipleItems(products) {
//   products.forEach((product) => {
//     this.removeFromWishList(product, ACTIONS.REMOVE_ITEM);
//   });

//   console.log(wishListData.wishList);
// };

const { bagFunctions } = require("../data/cart-data");
const { products } = require("../data/products-data");
const { categories } = require("../data/categories-data");
const { ACTIONS } = require("../constants");
const sessions = require("../sessions");
const users = require("../users");
const { isValidProduct,hasValidProducts } = require("../utils");

function serviceCalls(app) {
    /**Auth In */
  app.get("/api/v1/session", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (!sid || !users.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }
    res.json({
      username: username,
      cart: bagFunctions.getBagData(username),
    });
  });

  app.post("/api/v1/session", (req, res) => {
    const { username } = req.body;

    if (!users.isValid(username)) {
      res.status(400).json({ error: "required-username" });
      return;
    }

    if (username === "dog") {
      res.status(403).json({ error: "auth-insufficient" });
      return;
    }

    const sid = sessions.addSession(username);
    const existingUserData = users.getUserData(username);

    if (!existingUserData) {
      const newCart = bagFunctions.createBagForUser(username);
      users.addUserData(username, {
        username,
        cart: newCart,
      });
    }

    const userData = users.getUserData(username);

    res.cookie("sid", sid);
    res.json({
      userData,
    });
  });

  app.delete("/api/v1/session", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (sid) {
      res.clearCookie("sid");
    }

    if (username) {
      sessions.deleteSession(sid);
    }

    res.json({ username });
  });
  /**Auth Out */

  /**Data In */

  app.get("/api/v1/categories", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (!sid || !users.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }
    res.json({
      categories: categories,
    });
  });

  app.get("/api/v1/products", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (!sid || !users.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }
    res.json({
      products: products,
    });
  });

  /**Data Out */

  /**Cart In */

  app.get("/api/v1/cart", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (!sid || !users.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }
    const bagData = bagFunctions.getBagData(username);
    res.json({
      cart: bagData,
    });
  });

  app.put("/api/v1/cart/add-product", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (!sid || !users.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }
    const { product } = req.body;


    if (!product || !isValidProduct(product)) {
      res.status(400).json({ error: "invalid-product" });
      return;
    }

    const updatedCart = bagFunctions.addToBag(product, username);
    res.json({
      cart: updatedCart,
    });
  });

  app.patch("/api/v1/cart/increase-quantity", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (!sid || !users.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }
    const { product } = req.body;

    if (!product || !isValidProduct(product)) {
      res.status(400).json({ error: "invalid-product" });
      return;
    }

    const updatedCart = bagFunctions.addToBag(product, username);
    res.json({
      cart: updatedCart,
    });
  });

  app.patch("/api/v1/cart/decrease-quantity", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (!sid || !users.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }
    const { product, type } = req.body;

    if (!product || !isValidProduct(product)) {
      res.status(400).json({ error: "invalid-product" });
      return;
    }

    if (!type || type.trim() === "" || type !== ACTIONS.REDUCE_QUANTITY) {
      res.status(400).json({ error: "invalid-type" });
      return;
    }
    const updatedCart = bagFunctions.removeFromBag(product, type, username);
    res.json({
      cart: updatedCart,
    });
  });

  app.put("/api/v1/cart/remove-product", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (!sid || !users.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }
    const { product, type } = req.body;

    if (!product || !isValidProduct(product)) {
      res.status(400).json({ error: "invalid-product" });
      return;
    }

    if (!type || type.trim() === "" || type !== ACTIONS.REMOVE_ITEM) {
      res.status(400).json({ error: "invalid-type" });
      return;
    }
    const updatedCart = bagFunctions.removeFromBag(product, type, username);
    res.json({
      cart: updatedCart,
    });
  });

  app.delete("/api/v1/cart/clear-cart", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (!sid || !users.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }
    const updatedCart = bagFunctions.clearBag(username);
    res.json({
      cart: updatedCart,
    });
  });

  app.post("/api/v1/cart/checkout", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (!sid || !users.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }
    const { checkoutItems } = req.body;


    if (!bagFunctions.hasValidCheckoutItems(checkoutItems, username)) {
      res.status(400).json({ error: "invalid-checkout-item" });
      return;
    }

    if (!bagFunctions.hasValidCheckoutQuantities(checkoutItems, username)) {
      res.status(400).json({ error: "invalid-checkout-item-quantity" });
      return;
    }

    if (checkoutItems.length === 0) {
      res.status(400).json({ error: "no items to checkout" });
      return;
    }

    if (!bagFunctions.checkout(checkoutItems, username)) {
      res.status(400).json({ error: "unsuccessful-checkout" });
      return;
    }

    res.status(200).json({
      message: "Checkout Successful",
      cart: bagFunctions.getBagData(username),
    });
  });

  app.patch("/api/v1/cart/change-quantity", (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : "";
    if (!sid || !users.isValid(username)) {
      res.status(401).json({ error: "auth-missing" });
      return;
    }

    const { cartItem, quantity } = req.body;

    if (!cartItem || !isValidProduct(cartItem) || isNaN(parseInt(quantity))) {
      res.status(400).json({ error: "invalid-product" });
      return;
    }

    const cart = bagFunctions.getBagData(username);
    const cartProduct = cart.find((product) => product.name === cartItem.name);
    if (cartProduct) {
      if (quantity > cartProduct.quantity) {
        bagFunctions.addToBag(cartItem, username);
      } else if (quantity < cartProduct.quantity) {
        bagFunctions.removeFromBag(
          cartItem,
          ACTIONS.REDUCE_QUANTITY,
          username
        );
      }
    }
    res.json({
      cart: bagFunctions.getBagData(username),
    });
  });

  /**Cart Out */
  
}

module.exports = serviceCalls;

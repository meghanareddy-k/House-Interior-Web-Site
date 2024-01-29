/**Cart In*/

export function fetchCartData() {
    return fetch("/api/v1/cart", {
      method: "GET",
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  
  export function fetchAddToCart(product) {

  
    return fetch("/api/v1/cart/add-product", {
      method: "PUT",
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify({ product: { ...product } }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  
  export function fetchIncreaseQuantity(product) {
    return fetch(`/api/v1/cart/increase-quantity`, {
      method: "PATCH",
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify({ product }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  
  export function fetchDecreaseQuantity(product) {
    return fetch(`/api/v1/cart/decrease-quantity`, {
      method: "PATCH",
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify({ product, type: "reduceQuantity" }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  
  export function fetchChangeQuantity(cartItem, quantity) {
    return fetch(`/api/v1/cart/change-quantity`, {
      method: "PATCH",
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify({ cartItem, quantity }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  
  export function fetchRemoveFromCart(product, type) {
    return fetch(`/api/v1/cart/remove-product`, {
      method: "PUT",
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify({ product, type }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  
  export function fetchClearCart() {
    return fetch(`/api/v1/cart/clear-cart`, {
      method: "DELETE",
      headers: new Headers({
        "content-type": "application/json",
      }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  
  export function fetchCheckout(checkoutItems) {
    return fetch(`/api/v1/cart/checkout`, {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify({ checkoutItems }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  

/**Cart Out */

/**Data In */

export function fetchCategoriesData(offset1, offset2) {
    return fetch(`/api/v1/categories?offset1=${offset1}&offset2=${offset2}`, {
      method: "GET",
      headers: new Headers({
        "content-type": "application/json",
      }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  
  export function fetchSearchProductsData(searchInput) {
    return fetch(`/api/v1/products?searchInput=${searchInput}`, {
      method: "GET",
      headers: new Headers({
        "content-type": "application/json",
      }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  
  export function fetchProductsData() {
    return fetch("/api/v1/products", {
      method: "GET",
      headers: new Headers({
        "content-type": "application/json",
      }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  

/**Data Out */

/** Auth In */

export function fetchSession() {
    return fetch("/api/v1/session", {
      method: "GET",
      headers: new Headers({
        "content-type": "application/json",
      }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  
  export function fetchLogin(username) {
    return fetch("/api/v1/session", {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify({ username }),
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  
  export function fetchLogout() {
    return fetch("/api/v1/session", {
      method: "DELETE",
    })
      .catch(() => Promise.reject({ error: "networkError" }))
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response
          .json()
          .catch((error) => Promise.reject({ error }))
          .then((err) => Promise.reject(err));
      });
  }
  

/**Auth Out */


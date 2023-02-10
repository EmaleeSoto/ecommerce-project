import { createContext, useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  removeOneItemFromCart: () => {},
  deleteItemFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(
    localStorage.getItem("itemsInCart")
      ? JSON.parse(localStorage.getItem("itemsInCart"))
      : []
  );

  // [ { id: 1, quantity: 1+ } ]

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    return quantity === undefined ? 0 : quantity;
  }

  function addItemToCart(item) {
    const quantity = getProductQuantity(item.id);
    if (quantity === 0) {
      //product not in cart
      setCartProducts([
        ...cartProducts,
        {
          id: item.id,
          name: item.name,
          price: parseFloat(item.price),
          type: item.type,
          stripeId: item.stripe_id,
          quantity: 1,
        },
      ]);
    } else {
      //product is in cart
      setCartProducts(
        cartProducts.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product;
        })
      );
    }
  }

  useEffect(() => {
    localStorage.setItem("itemsInCart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function removeOneItemFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity == 1) {
      deleteItemFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) => {
          return product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product;
        })
      );
    }
  }

  function deleteItemFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      console.log(cartItem.price, " / ", cartItem.quantity);
      totalCost += cartItem.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeOneItemFromCart,
    deleteItemFromCart,
    getTotalCost,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

// FUNCTION CODE

// Context (cart, addToCart, removeCart)
// Provider -> gives React app access to all properties in the context component

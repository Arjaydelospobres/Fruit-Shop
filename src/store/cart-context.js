import { createContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  totalcartItems: 0,
  addCart: (cartFruit) => {},
  removeCart: (Fruitid) => {},
  itemsCart: (Fruitid) => {},
});

export function CartContextProvider(props) {
  const [userCart, setUserCart] = useState([]);

  function addCartHandler(cartFruit) {
    setUserCart((prevuserCart) => {
      return prevuserCart.concat(cartFruit);
    });
  }
  function removeCartHandler(Fruitid) {
    setUserCart((prevuserCart) => {
      return prevuserCart.filter((Fruit) => Fruit.id !== Fruitid);
    });
  }
  function itemCartHandler(Fruitid) {
    return userCart.some((Fruit) => Fruit.id === Fruitid);
  }
  const context = {
    cart: userCart,
    totalcartItems: userCart.length,
    addCart: addCartHandler,
    removeCart: removeCartHandler,
    itemsCart: itemCartHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;

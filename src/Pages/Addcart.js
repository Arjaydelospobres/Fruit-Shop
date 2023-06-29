import { useContext } from "react";

import CartContext from "../store/cart-context";
import Fruitlist from "../Component/Fruits/Fruitlist";

function Addcart() {
  const Contextctx = useContext(CartContext);

  let content;
  if (Contextctx.totalcartItems === 0) {
    content = <p>No items add to Cart</p>;
  } else {
    content = <Fruitlist fruits={Contextctx.cart} />;
  }
  return (
    <section>
      <h1>Welcome to cart!</h1>
      {content}
    </section>
  );
}

export default Addcart;

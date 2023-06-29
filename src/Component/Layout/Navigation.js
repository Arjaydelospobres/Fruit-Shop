import { Link } from "react-router-dom";
import { useContext } from "react";

import design from "./Navigation.module.css";
import CartContext from "../../store/cart-context";

function Navigation() {
  const Cartctx = useContext(CartContext);
  return (
    <header className={design.header}>
      <div className={design.logo}>Fruit List</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Fruit</Link>
          </li>
          <li>
            <Link to="/new-fruit">New Fruit</Link>
          </li>
          <li>
            <Link to="/add-cart">
              Cart
              <span className={design.badge}>{Cartctx.totalcartItems}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;

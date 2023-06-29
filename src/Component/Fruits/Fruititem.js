import { useContext } from "react";
import Swal from "sweetalert2";

import design from "./Fruititem.module.css";
import Card from "../ui/Card";
import CartContext from "../../store/cart-context";
import { useNavigate } from "react-router-dom";

function Fruititem(props) {
  const navigate = useNavigate();
  const Cartctx = useContext(CartContext);

  const itemsCart = Cartctx.itemsCart(props.id);
  // function payMethodHandler() {
  //   return <p>puta</p>;
  // }
  function toggleHandler() {
    if (itemsCart) {
      Swal.fire({
        title: "Remove",
        text: "Remove successful",
        imageUrl:
          "https://scontent.fcrk2-2.fna.fbcdn.net/v/t1.15752-9/297211850_574983904284222_95570019280768814_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFTVytNokLhLdJNvA7dxXpZClvex93CpKsKW97H3cKkq-qK4l1CM-ajNAm0NxONiX_yoCHr1ebLaOK92GLV8ZMm&_nc_ohc=lPv9QBm7rLQAX-T3_dB&_nc_ht=scontent.fcrk2-2.fna&oh=03_AdQg3az3SoHm3zbAmGoJ1P1ZkTWBXZQuciQKgioLmoVMMA&oe=64C49B63",
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Custom image",
      }).then(() => {
        navigate("/");
      });
      Cartctx.removeCart(props.id);
    } else {
      Swal.fire(
        "Successful Add to Cart",
        "You clicked the button!",
        "success"
      ).then(() => {
        navigate("/add-cart");
      });
      Cartctx.addCart({
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        description: props.description,
      });
      // console.log(payMethodHandler());
    }
  }
  return (
    <Card>
      <li className={design.item}>
        <div className={design.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={design.content}>
          <h2>{props.title}</h2>
          <h4>{props.price}</h4>
          <p>{props.description}</p>
        </div>
        <div className={design.actions}>
          <button onClick={toggleHandler}>
            {itemsCart ? "Remove Cart" : "Add Cart"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default Fruititem;

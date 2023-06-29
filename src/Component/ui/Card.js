import design from "./Card.module.css";

function Card(props) {
  return <div className={design.card}>{props.children}</div>;
}

export default Card;

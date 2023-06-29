import design from "./Fruitlist.module.css";
import Fruititem from "./Fruititem";

function Fruitlist(props) {
  return (
    <ul className={design.list}>
      {props.fruits.map((fruit) => (
        <Fruititem
          key={fruit.id}
          id={fruit.id}
          title={fruit.title}
          image={fruit.image}
          price={fruit.price}
          description={fruit.description}
        />
      ))}
    </ul>
  );
}

export default Fruitlist;

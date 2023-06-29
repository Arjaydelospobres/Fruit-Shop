import { useRef } from "react"; //it is like useState but it only view the value not change it
import design from "./Addfruits.module.css";
import Card from "../ui/Card";

function Addfruits(props) {
  const inputTitleRef = useRef(); //only view the value of the inputTitle
  const inputImageRef = useRef(); //only view the value of the inputTitle
  const inputPriceRef = useRef(); //only view the value of the inputTitle
  const inputDescriptionRef = useRef(); //only view the value of the inputTitle

  //event object is for event like onSubmit, onClick
  function handlerSubmit(event) {
    event.preventDefault(); // it is a method to prevent the browser as default

    const inputTitle = inputTitleRef.current.value; //this line make the current value of input store
    const inputImage = inputImageRef.current.value; //this line make the current value of input store
    const inputPrice = inputPriceRef.current.value; //this line make the current value of input store
    const inputDescription = inputDescriptionRef.current.value; //this line make the current value of input store

    const Fruit = {
      title: inputTitle,
      image: inputImage,
      price: inputPrice,
      description: inputDescription,
    };
    // console.log(Fruit);
    props.onAddFruit(Fruit);
  }

  return (
    // Card is an import from another component
    <Card>
      <form className={design.form} onSubmit={handlerSubmit}>
        <div className={design.control}>
          <label htmlFor="title">Add new fruits</label>
          {/* htmlFor is an identifier that connect to another element using id and the value */}
          <input type="text" required id="title" ref={inputTitleRef} />
          {/* ref is an react attribute for react hook useRef */}
        </div>
        <div className={design.control}>
          <label htmlFor="image">Add image </label>
          <input type="url" required id="image" ref={inputImageRef} />
        </div>
        <div className={design.control}>
          <label htmlFor="price">Add price </label>
          <input type="number" required id="price" ref={inputPriceRef} />
        </div>
        <div className={design.control}>
          <label htmlFor="description">Add description </label>
          <textarea
            required
            id="description"
            rows="5"
            ref={inputDescriptionRef}
          />
        </div>
        <div className={design.actions}>
          <button required> Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default Addfruits;

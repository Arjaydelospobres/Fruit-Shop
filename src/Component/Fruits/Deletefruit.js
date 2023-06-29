import { useState } from "react";
import Swal from "sweetalert2";
import Modal from "../Action/Modal";
import Backdrop from "../Action/Backdrop";
import design from "./Delete.module.css";

function Fruitlist(props) {
  const [modalisOpen, setModalisOpen] = useState(false); //react hook

  function handlerDelete() {
    setModalisOpen(true);
  }
  function closeModal() {
    setModalisOpen(false);
  }
  function handlerSubmit() {
    Swal.fire("Successful!", `You deleted ${props.text}!`, "success"); // templetes literal
    setModalisOpen(false);
  }
  return (
    <div className={design.card}>
      <h2>{props.text}</h2>
      <div className={design.actions}>
        <button className={design.btn} onClick={handlerDelete}>
          Delete
        </button>
      </div>
      {modalisOpen && <Modal onBack={closeModal} onConfirm={handlerSubmit} />}{" "}
      {/* Ternary Operation AND operator */}
      {modalisOpen ? <Backdrop onClose={closeModal} /> : null}
      {/* Ternary Operation OR operator boolean true or false */}
    </div>
  );
}

export default Fruitlist;

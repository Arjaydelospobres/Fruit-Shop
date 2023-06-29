import design from "./BackdropandModal.module.css";

function Modal(props) {
  return (
    // className with module css
    <div className={design.modal}>
      <p>Are you sure?</p>
      <button className={design.btn_alt} onClick={props.onBack}>
        Cancel
      </button>
      <button className={design.btn} onClick={props.onConfirm}>
        Confrim
      </button>
    </div>
  );
}

export default Modal;

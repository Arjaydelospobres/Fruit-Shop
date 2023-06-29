import design from "./BackdropandModal.module.css";

function Backdrop(props) {
  return <div className={design.backdrop} onClick={props.onClose} />; //self closing tags and attributes and use props
}

export default Backdrop;

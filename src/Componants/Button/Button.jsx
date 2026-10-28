import "./Button.css";

function Button(props) {
  return (
    <>
      <button
        className={props.className}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.label}
      </button>
    </>
  );
}
export default Button;

import { useState } from "react";
import "./CountInputField.css";
import Button from "../Button/Button";

function CountInputField() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(1);
  const [error, seterror] = useState("");
  const handleCount = (e) => {
    const val = e.target.value;
    setVal(val);
    console.log(typeof val);
  };
  // if (val == 0) {
  //   seterror("Val is empty")
  // }
  const upClick = () => {
    if (val === "0") {
      // alert("Please fill the input value");
      seterror("Val is zero");
      return;
    } else if (val === "") {
      seterror("Val is empty");
      return;
    }
    setCount(count + +val);
    seterror("");
  };
  const downClick = () => {
    if (val == "0") {
      // alert("Please fill the input value");
      seterror("Val is zero");
      return;
    } else if (val === "") {
      seterror("Val is empty");
      return;
    }
    setCount(count - val);
    seterror("");
  };

  return (
    <>
      <div className="container">
        <input
          className="count-btn"
          type="number"
          id="cnum"
          name="cnum"
          value={val}
          onChange={handleCount}
        />

        {error && <p>{error}</p>}

        <Button className="count-btn" label="Increase" onClick={upClick} />
        <h1>{count}</h1>
        <Button className="count-btn" label="Decrease" onClick={downClick} />
      </div>
    </>
  );
}

export default CountInputField;

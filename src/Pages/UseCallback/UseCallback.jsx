import { useState, useCallback, useMemo } from "react";
import Button from "../../Componants/Button/Button";
import "./UseCallback.css";

function UseCallback() {
  const [count, setCount] = useState(0);

  const handleIncr = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const handleDecr = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  const theme = useMemo(() => {
    return count % 2 === 0 ? "light" : "dark";
  }, [count]);

  return (
    <>
      <div
        className={`${theme === "light" ? "callback-background" : "callback-background-light"}`}
      >
        <h1 className="callback-heading">Your no. = {count}</h1>
        <p>Theme: {theme}</p>

        <div className="btn">
          <Button className="cllback-btn" label="INCR" onClick={handleIncr} />
          <Button className="cllback-btn" label="DECR" onClick={handleDecr} />
        </div>
      </div>
    </>
  );
}
export default UseCallback;

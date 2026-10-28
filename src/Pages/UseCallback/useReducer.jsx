import Button from "../../Componants/Button/Button";
import "./useReducer.css";

function useReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case INCR:
        return count + 1;
      case DECR:
        return count - 1;
      case Clear:
        return (count = 0);

      default:
        state;
    }
  };
  return (
    <>
      <div
        className={`${theme === "light" ? "callback-background" : "callback-background-light"}`}
      >
        <h1 className="callback-heading">Your no. = {count}</h1>
        <p>Theme: {theme}</p>

        <div className="btn">
          <Button
            className="cllback-btn"
            label="INCR"
            onClick={() => dispatch({ type: "INCR" })}
          />
          <Button
            className="cllback-btn"
            label="DECR"
            onClick={() => dispatch({ type: "DECR" })}
          />
          <Button
            className="cllback-btn"
            label="Clear the count"
            onClick={() => dispatch({ type: "Clear" })}
          />
        </div>
      </div>
    </>
  );
}
export default useReducer;

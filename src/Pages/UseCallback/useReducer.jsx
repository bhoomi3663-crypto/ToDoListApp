// import Button from "../../Componants/Button/Button";
// import "./UseReducer.css";
// import { useReducer } from "react";
// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCR":
//       return state + 1;
//     case "DECR":
//       return state - 1;
//     case "Clear":
//       return (state = 0);

//     default:
//       return state;
//   }
// };
// function UseReducerDemo() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <div className="callback-background">
//         <h1 className="callback-heading">Your no. = {count}</h1>
//         {/* <p>Theme: {theme}</p> */}

//         <div className="btn">
//           <Button
//             className="cllback-btn"
//             label="INCR"
//             onClick={() => dispatch({ type: "INCR" })}
//           />
//           <Button
//             className="cllback-btn"
//             label="DECR"
//             onClick={() => dispatch({ type: "DECR" })}
//           />
//           <Button
//             className="cllback-btn"
//             label="Clear the count"
//             onClick={() => dispatch({ type: "Clear" })}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
// export default UseReducerDemo;

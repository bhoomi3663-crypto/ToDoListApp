import { Navigate } from "react-router-dom";

function ProtectedRouter({ children }) {
  const user1 = JSON.parse(localStorage.getItem("RegisterUser")) || false;
  const user2 = JSON.parse(localStorage.getItem("LoginUser")) || false;

  if (!user1) {
    return <Navigate to="/RegisterForm" />;
  } else if (user1 && !user2) {
    return <Navigate to="/Login" />;
  } else {
    return children;
  }
}

export default ProtectedRouter;

import { Outlet } from "react-router-dom";
import Navbar from "../Componants/Navbar/Navbar";

export function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

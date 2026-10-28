import { useState } from "react";
import "./App.css";
import CountInputField from "./Componants/CountInputField/CountInputField";
import Navbar from "./Componants/Navbar/Navbar";
import ReactLogo from "./assets/ReactLogo.jpg";
import NodeJsLogo from "./assets/NodeJs.jpeg";
import JavaScriptLogo from "./assets/JavaScriptLogo.png";
import GitLogo from "./assets/GitLogo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import WebDevCard from "./Componants/WebDevCard/WebDevCard";
import RegisterForm from "./Componants/RegisterForm/RegisterForm";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home/Home";
import ToDoForm from "./Componants/ToDoForm/ToDoForm";
import Login from "./Componants/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { route } from "./Route/Applayout";
import { ModeContextProvider } from "./Componants/Context/Context";
function App() {
  // const dummy = [
  //   { title: "React JS", image: ReactLogo },
  //   { title: "Node JS", image: NodeJsLogo },
  //   { title: "JavaScript", image: JavaScriptLogo },
  //   { title: "Git", image: GitLogo },
  // ];
  return (
    <>
      <ModeContextProvider>
        <RouterProvider router={route} />
        <ToastContainer position="top-center" autoClose={1000} />
      </ModeContextProvider>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
      {/* <CountInputField /> */}
      {/* <Navbar />
      <Home /> */}
      {/* <Login /> */}
      {/* <About /> */}
      {/* <RegisterForm /> */}
      {/* Cards of web developing services */}
      {/* <h1 className="web-heading">Web Development Services</h1>
      <div className="card-layout">
        {dummy.map((item) => (
          <WebDevCard title={item.title} image={item.image} />
        ))}
      </div>

      <div className="footer">
        <div className="icons">
          <div>
            <FaInstagram size={25} color={"black"} />
          </div>
          <div>
            <FaTwitter size={25} />
          </div>
          <div>
            <FaFacebook size={25} />
          </div>
          <div>
            <FaLinkedin size={25} />
          </div>
        </div>
        <div className="services">
          <div>Home</div>
          <div>About</div>
          <div>Services</div>
        </div>
        <div className="footer-text">Lorem ipsum dolor sit amet.</div>
      </div> */}
    </>
  );
}

export default App;

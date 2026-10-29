import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../Pages/About/About";
import Login from "../Componants/Login/Login";
import Home from "../Pages/Home/Home";
import AllToDo from "../Pages/AllToDo/AllToDo";
import { Layout } from "./Layout";
import RegisterForm from "../Componants/RegisterForm/RegisterForm";
import ProtectedRouter from "../Componants/Auth/ProtectedRouter";
import ToDoDetail from "../Pages/ToDoDetail/ToDoDetail";
import ConfirmModel from "../CommonComponent/ConfirmationModel/ConfirmModel";
import Posts from "../Pages/Posts/Posts";
import AddForm from "../Pages/Posts/AddForm/AddForm";
// import UseReducerDemo from "../Pages/UseCallback/UseReducer";

export const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <Layout />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/alltodo",
        element: <AllToDo />,
      },
      // {
      //   path: "/useCallback",
      //   element: <UseCallback />,
      // },
      // {
      //   path: "/useReducer",
      //   element: <UseReducerDemo />,
      // },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/addForm",
        element: <AddForm />,
      },
      {
        path: "/todoDetail/:id",
        element: <ToDoDetail />,
      },
    ],
  },
  {
    path: "/Registerform",
    element: <RegisterForm />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaEye } from "react-icons/fa";
import { GrHide } from "react-icons/gr";
import { toast } from "react-toastify";
import { useFormik } from "formik";

function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      pwd: "",
    },
    validate: (values) => {
      const tempError = {};
      if (!values.email.trim()) {
        tempError.email = "Email is required";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
      ) {
        tempError.email = "Email is not valid";
      }
      if (!values.pwd.trim()) {
        tempError.pwd = "Password is required";
      } else if (values.pwd.length < 8) {
        tempError.pwd = "Password must be of 8 character";
      }
      return tempError;
    },
    onSubmit: (values) => {
      const user = JSON.parse(localStorage.getItem("RegisterUser"));
      if (values.email === user?.email && values.pwd === user?.pwd) {
        toast.success("Login successful");
        navigate("/home");
        localStorage.setItem("LoginUser", JSON.stringify(values));
        return;
      } else {
        toast.error("Email or Password not matched");
      }
    },
  });

  // const handleLoginInput = (e) => {
  //   const { name, value } = e.target; //destrucruing
  //   setLoginData({ ...loginData, [name]: value });
  //   setLoginError({
  //     ...loginError,
  //     [name]: "",
  //   });
  // };

  return (
    <>
      <div className="loginBackground">
        <form className="bg-posision" onSubmit={formik.handleSubmit}>
          <div className="loginLayer">
            <div className="loginHeading">
              <h1>LOGIN</h1>
              <p>Welcome back!</p>
            </div>
            <div className="loginInput">
              <label htmlFor="email" className="loginInput">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="off"
                placeholder="Enter your Email..."
              />
              {formik.touched.email && formik.errors.email && (
                <p className="error-msg">{formik.errors.email}</p>
              )}
            </div>
            <div className="loginInput">
              <label htmlFor="password" className="loginInput">
                Password:
              </label>
              <div>
                <input
                  type={showPwd ? "text" : "password"}
                  className="pwd-input"
                  id="pwd"
                  name="pwd"
                  value={formik.values.pwd}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                  placeholder="Enter the password..."
                />
                {formik.touched.pwd && formik.errors.pwd && (
                  <p className="error-msg">{formik.errors.pwd}</p>
                )}
                <div onClick={() => setShowPwd(!showPwd)}>
                  {showPwd ? (
                    <GrHide className="pwd-icon" size={28} />
                  ) : (
                    <FaEye className="pwd-icon" size={20} />
                  )}
                </div>
              </div>
            </div>
            <div className="btn-footer">
              <Button label="Login" className="login-btn" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;

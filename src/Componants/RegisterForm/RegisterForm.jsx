import Button from "../Button/Button";
import { FaEye } from "react-icons/fa";
import { GrHide } from "react-icons/gr";
import "./RegisterForm.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [error, setError] = useState({});
  const [password, setPassword] = useState(false);
  const [cPwdShow, setCPwdShow] = useState(false);
  const [formData, setFormData] = useState({
    uName: "",
    email: "",
    pwd: "",
    cPwd: "",
  });

  const navigate = useNavigate();

  const handleInputchange = (e) => {
    // console.log(e);÷
    const { name, value } = e.target; //destrucruing
    setFormData({ ...formData, [name]: value });
    // setFormData(val);÷
  };

  console.log(formData);
  //   const validate = () => {
  //     const newError = {};

  //     if (!formData.uName.trim()) {
  //       newError.uName = "Username is required";
  //     }
  //     if (!formData.email.trim()) {
  //       newError.email = "Email adress is required";
  //     } else if (
  //       !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
  //     ) {
  //       newError.email = "Email is not valid";
  //     }
  //     if (!formData.pwd.trim()) {
  //       newError.pwd = "Password is required";
  //     } else if (formData.pwd.length < 8) {
  //       newError.pwd = "Password must be of 8 character";
  //     }
  //     if (!formData.cPwd.trim()) {
  //       newError.cPwd = "Confirm Password id required";
  //     } else if (formData.cPwd != formData.pwd) {
  //       newError.cPwd = "Confirm Password not matched";
  //     }
  //     setFormData("");

  //     setError(newError);
  //     return Object.keys(newError).length == 0;
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("RegisterUser", JSON.stringify(formData));
    // console.log(JSON.stringify(formData));
    // console.log(formData);
    toast.success("Registration completed");
    navigate("/login");
  };
  const handleblur = (e) => {
    const { name, value } = e.target;
    let message = "";
    if (name == "uName") {
      if (!value.trim()) {
        message = "Username is required";
      }
    }
    if (name == "email") {
      if (!value.trim()) {
        message = "Email is required";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
      ) {
        message = "Email is not valid";
      }
    }
    if (name == "pwd") {
      if (!value.trim()) {
        message = "Password is required";
      } else if (formData.pwd.length < 8) {
        message = "Password mudt be of 8 character";
      }
    }
    if (name == "cPwd") {
      if (!value.trim()) {
        message = "Confirm password is required";
      } else if (formData.cPwd !== formData.pwd) {
        message = "Confirm Password not matched";
      }
    }
    setError({
      ...error,
      [name]: message,
    });
  };

  const isFormValidate =
    formData.uName.trim() &&
    formData.email.trim() &&
    formData.pwd.trim() &&
    formData.cPwd.trim();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="layer">
          <div className="heading">
            <h1>Register</h1>
            <p>Let's create new account</p>
          </div>
          <div className="register-body">
            <div className="register-input">
              <label htmlFor="uName">User Name:</label>
              <input
                type="text"
                id="uName"
                name="uName"
                value={formData.uName}
                autoComplete="off"
                onChange={handleInputchange}
                onBlur={handleblur}
              />

              {error && <p className="error-msg">{error.uName}</p>}

              {/* <span className="error-msg">Userame is required</span> */}
            </div>
            <div className="register-input">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                autoComplete="off"
                onChange={handleInputchange}
                onBlur={handleblur}
              />
              {error && <p className="error-msg">{error.email}</p>}
              {/* <span className="error-msg">Email Adress is required</span> */}
            </div>
            <div className="register-input">
              <label htmlFor="pwd">Password:</label>
              <div className="pwd-input">
                <input
                  type={password ? "text" : "password"}
                  id="pwd"
                  name="pwd"
                  value={formData.pwd}
                  autoComplete="off"
                  onChange={handleInputchange}
                  onBlur={handleblur}
                />
                <div onClick={() => setPassword(!password)}>
                  {password ? (
                    <FaEye className="eye-icon" />
                  ) : (
                    <GrHide className="eye-icon" size={20} />
                  )}
                </div>
              </div>
              {error && <p className="error-msg">{error.pwd}</p>}
              {/* <span className="error-msg">Password is required</span> */}
            </div>
            <div className="register-input">
              <label htmlFor="cPwd">Confirm Password:</label>
              <div className="pwd-input">
                <input
                  type={cPwdShow ? "text" : "password"}
                  id="cPwd"
                  name="cPwd"
                  value={formData.cPwd}
                  autoComplete="off"
                  onChange={handleInputchange}
                  onBlur={handleblur}
                />
                <div onClick={() => setCPwdShow(!cPwdShow)}>
                  {cPwdShow ? (
                    <FaEye className="eye-icon" />
                  ) : (
                    <GrHide className="eye-icon" size={20} />
                  )}
                </div>
              </div>
              {error && <p className="error-msg">{error.cPwd}</p>}
              {/* <span className="error-msg">Password is not matched</span> */}
            </div>
          </div>
          <div className="btn-footer">
            <Button
              className={`${isFormValidate ? "logout-btn" : "logout-btn-disabled"}`}
              label="Register"
              disabled={!isFormValidate}
            />
          </div>
        </div>
      </form>
    </>
  );
}
export default RegisterForm;

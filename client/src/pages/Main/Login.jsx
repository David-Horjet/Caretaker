import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../context/Context";
import { loginRoute } from "../../utils/APIRoutes";
import RoundLoader from "../../components/Loaders/RoundLoader";
import { IoKeyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsEyeSlash } from "react-icons/bs";
import { Axios } from "../../utils/Axios";
import toastOptions from "../../components/Toast/ToastOptions";
import { SiHomeadvisor } from "react-icons/si";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const { dispatch, isFetching } = useContext(Context);

  useEffect(() => {
    document.title = "User Login - CareTaker";
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (handleValidation()) {
        dispatch({ type: "LOGIN_START" });
        const { password, email } = values;
        const res = await Axios.post(loginRoute, {
          email: email.toLowerCase(),
          password,
        });
        console.log(res);
        if (res.data.status === false) {
          dispatch({ type: "LOGIN_FAILURE" });
          toast.error(res.data.message, toastOptions);
        }
        if (res.data.status === true) {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data.data,
            token: res.data.token,
          });
          toast.success(res.data.message, toastOptions);
          toast.success("Wait while the application redirects you", toastOptions);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      if (error && error.message) {
        toast.error(error.message, toastOptions);
      }
    }
  };

  const handleValidation = () => {
    const { password, email } = values;
    if (email === "") {
      toast.error("Email is required", toastOptions);
      dispatch({ type: "LOGIN_FAILURE" });
      return false;
    } else if (password === "") {
      toast.error("Password is required", toastOptions);
      dispatch({ type: "LOGIN_FAILURE" });
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <FormContainer className="bg-light">
        <div className="row h-100 log-in">
          <div className="col-lg-4 col-sm-2"></div>
          <div className="col-lg-4 col-sm-8 col-12 form-login">
            <div className="card rounded shadow mt-5 p-3">
              <div className="card-body">
                <Link to="/" className="logo  d-flex justify-content-center align-items-center">
                  <SiHomeadvisor />
                  <span className="d-lg-block">CareTaker</span>
                </Link>
                <div className="title-3 my-4 text-center">
                  <h2>Welcome Back</h2>
                </div>
                <form
                  onSubmit={(event) => handleSubmit(event)}
                  autoComplete="off"
                >
                  <div className="form-group mb-4">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <FiUser />
                        </div>
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="form-control shadow-none"
                        placeholder="Enter Email"
                        autoComplete="off"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <IoKeyOutline />
                        </div>
                      </div>
                      <input
                        type="password"
                        name="password"
                        id="pwd-input"
                        className="form-control shadow-none"
                        placeholder="Password"
                        autoComplete="off"
                        maxLength="8"
                        onChange={(e) => handleChange(e)}
                      />
                      <div className="input-group-apend">
                        <div className="input-group-text">
                          <BsEyeSlash />
                        </div>
                      </div>
                    </div>
                    <div className="important-note mb-2">
                      <strong>Note:</strong> password entered is case-sentive to
                      the one entered during signing up of new account
                    </div>
                  </div>
                  <div className="options d-flex justify-content-between mb-5">
                    <label className="d-block mb-0" htmlFor="chk-ani">
                      <input
                        className="checkbox_animated color-2"
                        id="chk-ani"
                        type="checkbox"
                      />
                      Remember me
                    </label>
                    <Link
                      to="/forgotpassword"
                    >
                      Forgot password ?
                    </Link>
                  </div>
                  <div className="auth d-flex justify-content-between">
                    {!isFetching ? (
                      <button
                        type="submit"
                        className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                      >
                        Log in
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                      >
                        <RoundLoader />
                      </button>
                    )}
                    <Link
                      to="/register"
                    >
                      Register
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-2"></div>
        </div>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
  .card {
    border: none;
    .logo {
      padding-left: 10px;
      svg {
        font-size: 26px;
        font-weight: 700;
        color: var(--theme-color);
      }
      span {
        font-size: 26px;
        font-weight: 700;
        color: var(--faded-black);
        padding-left: 8px;
        text-transform: uppercase;
      }
    }
    h2 {
      position: relative;
      overflow: hidden;
      font-size: 20px;
      &:before {
        position: absolute;
        content: "";
        width: 30px;
        height: 2px;
        background-color: var(--theme-color);
        left: 0;
        bottom: -8px;
      }
    }
    .form-group {
      .input-group-text {
        background: none;
        border: none;
        svg {
          font-size: 20px;
        }
      }
      .form-control {
        margin-left: -1px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border: none;
        outline: none;
        border-bottom: 1px solid #eee;
        position: relative;
        font-size: 14px;
        font-weight: 500;
        padding: 10px;
        &:focus {
          outline: none !important;
        }
      }
      .error {
        font-size: 12px;
        padding-left: 35px;
      }
      .important-note {
        color: rgba(88, 97, 103, 0.4);
        padding-left: 35px;
        margin-top: 5px;
        font-size: 14px;
      }
    }
    .options {
      font-size: 14px;
      .checkbox_animated {
        cursor: pointer;
        position: relative;
        margin: 0 5px 0 0;
        &:focus {
          color: var(--pure-white);
          background-color: var(--theme-default3);
        }
      }
      a {
        color: rgba(88, 97, 103, 0.7);
      }
    }
    .auth {
      button {
        background-image: var(--theme-gradient1);
        border-radius: 30px;
        color: #ffffff;
        background-size: 200% auto;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        border: 2px solid transparent;
        padding: 9px 30px;
        font-size: 15px;
        &:hover {
          background-position: right center;
        }
      }
      a {
        border: 1px dashed #d2d2d2;
        color: #1c2d3a;
        background: transparent;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        position: relative;
        text-align: center;
        padding: 9px 30px;
        font-size: 15px;
        border-radius: 30px;
        &:hover {
          border: 1px dashed var(--theme-default3);
          color: var(--theme-default3);
        }
      }
    }
  }
  @media (max-width: 576px) {
    .card {
      padding: 0 !important;
      margin: 0 !important;
      .important-note {
        font-size: 10px;
      }
      .label {
        font-size: 12px;
      }
      .auth {
        flex-direction: column;
        gap: 20px;
      }
    }
  }
`;

export default Login;

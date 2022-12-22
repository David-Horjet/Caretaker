import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoundLoader from "../../components/Loaders/RoundLoader";
import toastOptions from "../../components/Toast/ToastOptions";
import { Axios } from "../../utils/Axios";
import { addTenantRoute, singlePropertyRoute } from "../../utils/APIRoutes";
import StrokeLoader from "../../components/Loaders/StrokeLoader";

function TenantForm() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [property, setProperty] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "Male",
    phone: 0,
    address: "",
    about: "",
  });

  useEffect(() => {
    document.title = "Tenant-Form - CareTaker";
  });

  useEffect(() => {
    async function fetchProperty() {
      try {
        const response = await Axios.get(`${singlePropertyRoute}/${id}`);
        // console.log(response);
        if (response.data.status === true) {
          setProperty(response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (error && error.message === "Network Error") {
          toast.error(
            "Seems you're offline, please connect to a stable network",
            toastOptions
          );
        }
      }
    }
    return () => {
      fetchProperty();
    };
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (handleValidation()) {
        setIsFetching(true)
        const res = await Axios.post(`${addTenantRoute}/${id}`, values);
        // console.log(res);
        if (res.data.status === false) {
          toast.error(res.data.message, toastOptions);
          setIsFetching(false)
        }
        if (res.data.status === true) {
          toast.success(res.data.message, toastOptions);
          setIsFetching(false)
        }
      }
    } catch (error) {
      if (error && error.message === "Network Error") {
        toast.error(
          "Seems you're offline, please connect to a stable network",
          toastOptions
        );
        setIsFetching(false)
      }
    }
  };

  const handleValidation = () => {
    const { firstName, lastName, email, gender, phone, address, about } =
      values;
    if (firstName === "") {
      toast.error("First name is required", toastOptions);
      setIsFetching(false)
      return false;
    } else if (lastName === "") {
      toast.error("Last name is required", toastOptions);
      setIsFetching(false)
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      setIsFetching(false)
      return false;
    } else if (gender === "") {
      toast.error("Gender is required", toastOptions);
      setIsFetching(false)
      return false;
    } else if (phone === "") {
      toast.error("Phone number is required", toastOptions);
      setIsFetching(false)
      return false;
    } else if (address === "") {
      toast.error("Address is required", toastOptions);
      setIsFetching(false)
      return false;
    } else if (about === "") {
      toast.error("About is required", toastOptions);
      setIsFetching(false)
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
          <div className="col-lg-2 col-sm-1"></div>
          {isLoading ? (<StrokeLoader/>) : (<div className="col-lg-8 col-sm-10 form-login">
            <div className="card rounded shadow mt-5 p-4">
              <div className="card-body">
                <div className="title-3 mb-1 text-center">
                  <h2>{property.title}</h2>
                </div>
                <div className="title-3 mb-4 text-center">
                  <p>
                    Welcome To the Tenants Application Form, Please fill in your
                    correct details
                  </p>
                </div>
                <form
                  className="row gx-3"
                  onSubmit={(event) => handleSubmit(event)}
                  autoComplete="off"
                >
                  <div className="form-group col-sm-6">
                    <label>First name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control shadow-none"
                      placeholder="Enter Your Name"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control shadow-none"
                      placeholder="Enter Your Surname"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control shadow-none"
                      placeholder="Enter Your Email"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group col-sm-6 select-group justify-content-between">
                    <label>Gender</label>
                    <select name="gender" onChange={(e) => handleChange(e)}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Phone number</label>
                    <input
                      type="number"
                      name="phone"
                      className="form-control shadow-none"
                      placeholder="Enter Your Mobile Number"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label>Address</label>
                    <input
                      type="tel"
                      name="address"
                      className="form-control shadow-none"
                      placeholder="Enter Your Address"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group col-sm-12">
                    <label>About</label>
                    <textarea
                      type="text"
                      name="about"
                      className="form-control shadow-none"
                      placeholder="Office,Villa,Apartment"
                      onChange={(e) => handleChange(e)}
                      cols="30"
                      rows="10"
                      resize="vertical"
                    ></textarea>
                  </div>
                  <div className="auth d-flex justify-content-center">
                    {!isFetching ? (
                      <button
                        type="submit"
                        className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                      >
                        Continue
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                      >
                        <RoundLoader />
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>)}
          <div className="col-lg-2 col-sm-1"></div>
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
    h2 {
      position: relative;
      overflow: hidden;
      font-weight: 600;
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
      margin-bottom: 16px;
      label {
        color: #586167;
        font-size: 14px;
        font-weight: 600;
      }
      .form-control {
        border-color: #dee2e6;
        padding: 9px 20px 6px;
        text-transform: inherit;
        color: rgba(34, 54, 69, 0.7);
      }

      .important-note {
        color: rgba(88, 97, 103, 0.4);
        padding-left: 35px;
        margin-top: 5px;
        font-size: 14px;
      }
    }
    .select-group {
      display: flex;
      flex-direction: column;
      select,
      option {
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        appearance: none;
        border-radius: 0.375rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        &:focus-visible {
          outline: none;
        }
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
      margin: 0 !important;
      padding: 20px 10px !important;
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

export default TenantForm;

import React, { useState, useContext } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../context/Context";
import { deletePropertyRoute } from "../../utils/APIRoutes";
import RoundLoader from "../Loaders/RoundLoader";
import { useNavigate } from "react-router-dom";
import { authAxios } from "../../utils/Axios";

function DeletePropertyWarning({deleteWarnFunction}) {
  const { user } = useContext(Context);
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const toastOptions = {
    position: "top-right",
    autoClose: "8000",
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  const handlePropertyDelete = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await authAxios.delete(`${deletePropertyRoute}/${user._id}`);
      if (data.status === false) {
        toast.error(data.message, toastOptions);
        setIsLoading(false);
      }
      if (data.status === true) {
        setIsLoading(false);
        toast.success(data.message, toastOptions);
        setTimeout(() => {
          navigate("/admin/dashboard")
        }, 3000);
      }
    } catch (error) {
      console.log(error)
      toast.error(
        "Network Error, Check your network comrade and try again",
        toastOptions
      );
      setIsLoading(false);
    }
  };
  return (
    <>
      <Container className="p-4">
        <h6 className="text-center py-2">
          Delete Property?
        </h6>
        <p className="text-center py-2">
          Are you sure you want to delete this property? This action is not
          reversible.
        </p>
        <div className="row d-flex py-2 justify-content-center">
          <div className="col-5">
            <button id="cancel" onClick={deleteWarnFunction} className="btn btn-primary">
              Cancel
            </button>
          </div>
          <div className="col-5">
            {!isLoading ? (
              <button onClick={handlePropertyDelete} className="btn btn-danger">
                Continue
              </button>
            ) : (
              <button
                disabled
                className="btn btn-danger"
              >
                <RoundLoader/>
              </button>
            )}
          </div>
        </div>
        {isLoading && (
          <p className="text-center py-2 text-danger">
            please don't refresh or close this page!!!
          </p>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  background: rgb(248,249,250);
  border-radius: 20px;
  -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  z-index: 100000;
  width: 300px;
  position: absolute;
  transform: translate(-50%, -50%) scale(1);
  left: 50%;
  top: 50%;
  transition: 0.3s ease-in-out;
  h6 {
    color: var(--secondary-color);
    font-size: 15px;
    line-height: 30px;
  }
  .row {
    gap: 30px;
  }
`;

export default DeletePropertyWarning;

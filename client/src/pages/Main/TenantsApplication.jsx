import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { toastOptions } from "../../utils/Toast";
import { Axios } from "../../utils/Axios";
import { singleTenantRoute } from "../../utils/APIRoutes";
import StrokeLoader from "../../components/Loaders/StrokeLoader";

function TenantsApplication() {
  const location = useLocation();
  const [tenant, setTenant] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const id = location.pathname.split("/")[3];

  useEffect(() => {
    document.title = "Application Form- CareTaker Admin";
  });

  useEffect(() => {
    async function fetchTenant() {
      try {
        const response = await Axios.get(`${singleTenantRoute}/${id}`);
        console.log(response);
        if (response.data.status === true) {
          setTenant(response.data.data);
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
      fetchTenant();
    };
  }, [id]);
  return (
    <>
      <Container className="bg-light">
        <div className="row h-100 log-in">
          <div className="col-lg-2 col-sm-1"></div>
          {isLoading ? (
            <StrokeLoader />
          ) : (
            <div className="col-lg-8 col-sm-10 form-login">
              <div className="card rounded shadow mt-5 p-4">
                <div className="card-body">
                  <div className="title-3 mb-1 text-center">
                    <h2>{tenant.property.title}</h2>
                  </div>
                  <div className="title-3 mb-4 text-center">
                    <p>Applicant Form</p>
                  </div>
                  <div className="row g-5">
                    <div className="col-sm-6">
                      <span>First name</span> : {tenant.firstName}
                    </div>
                    <div className="col-sm-6">
                      <span>Last name</span> : {tenant.firstName}
                    </div>
                    <div className="col-sm-6">
                      <span>Email</span> : {tenant.email}
                    </div>
                    <div className="col-sm-6">
                      <span>Gender</span> : {tenant.gender}
                    </div>
                    <div className="col-sm-6">
                      <span>Address</span> : {tenant.address}
                    </div>
                    <div className="col-sm-6">
                      <span>Phone No</span> : {tenant.phone}
                    </div>
                    <div className="col-sm-6">
                      <span>Date of Application</span> : {new Date(tenant.createdAt).toDateString()}
                    </div>
                    <div className="col-sm-6">
                      <span>Updated At</span> : {new Date(tenant.updatedAt).toDateString()}
                    </div>
                    <div className="col-sm-12">
                      <span>About</span> : {tenant.about}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="col-lg-2 col-sm-1"></div>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div`
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
    span {
        color: var(--faded-black);
        font-weight: 600;
        
    }
  }
  @media (max-width: 576px) {
    .card {
      margin: 0 !important;
      padding: 20px 10px !important;
    }
  }
`;

export default TenantsApplication;

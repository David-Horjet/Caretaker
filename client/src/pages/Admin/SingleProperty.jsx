import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideNav from "../../components/Main/Admin/SideNav";
import TopNav from "../../components/Main/Admin/TopNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SinglePropertyContainer from "../../components/Main/Admin/SinglePropertyContainer";
import { Axios } from "../../utils/Axios";
import { singlePropertyRoute } from "../../utils/APIRoutes";
import { useLocation } from "react-router-dom";
import { toastOptions } from "../../utils/Toast";

function SingleProperty({ FullScreen, handleFullScreen, reportChange }) {
  const location = useLocation();
  const [property, setProperty] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const id = location.pathname.split("/")[3];

  useEffect(() => {
    document.title = "Property Lists- CareTaker Admin";
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
    // return () => {
    //   fetchProperty();
    // };
    fetchProperty();
  }, [id]);

  return (
    <>
      <FullScreen handle={handleFullScreen} onChange={reportChange}>
        <Container>
          <TopNav handleFullScreen={handleFullScreen} />
          <main className="main row">
            <SideNav />
            <SinglePropertyContainer
              property={property}
              isLoading={isLoading}
            />
          </main>
        </Container>
        <ToastContainer />
      </FullScreen>
    </>
  );
}

const Container = styled.div`
  overflow: hidden;
  main {
  }
`;

export default SingleProperty;

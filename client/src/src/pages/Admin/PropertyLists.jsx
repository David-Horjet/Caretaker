import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideNav from "../../components/Main/Admin/SideNav";
import TopNav from "../../components/Main/Admin/TopNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropertyListsContainer from "../../components/Main/Admin/PropertyListsContainer";
import { authAxios } from "../../utils/Axios";
import { allPropertyRoute } from "../../utils/APIRoutes";

function PropertyLists({ FullScreen, handleFullScreen, reportChange }) {

  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await authAxios.get(allPropertyRoute);
      console.log(response);
      if (response.data.status === true) {
        setProperties(response.data.data)
        setIsLoading(false)
      }
    }
    return () => {
      fetchEmployees()
    }
  }, [])

  useEffect(() => {
    document.title = "Property Lists- CareTaker Admin";
  });

  return (
    <>
    <FullScreen handle={handleFullScreen} onChange={reportChange}>
    <Container>
      <TopNav handleFullScreen={handleFullScreen} />
      <main className="main row">
        <SideNav />
        <PropertyListsContainer properties={properties} isLoading={isLoading}/>
      </main>
    </Container>
    <ToastContainer/>
    </FullScreen>
    </>
  );
}

const Container = styled.div`
overflow: hidden;
  main {
  }
`;

export default PropertyLists;

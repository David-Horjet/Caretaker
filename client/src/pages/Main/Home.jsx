import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import Agents from "../../components/Main/User/Agents";
import Featured from "../../components/Main/User/Featured";
import Footer from "../../components/Main/User/Footer";
import Header from "../../components/Main/User/Header";
import Hero from "../../components/Main/User/Hero";
import Offer from "../../components/Main/User/Offer";
import OnRent from "../../components/Main/User/OnRent";
import OnSale from "../../components/Main/User/OnSale";
import { allPropertyRoute } from "../../utils/APIRoutes";
import { authAxios } from "../../utils/Axios";
import { toastOptions } from "../../utils/Toast";

function Home() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "CareTaker - Elegant Retreat In Quiet Coral Gables";
  });

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await authAxios.get(allPropertyRoute);
        console.log(response);
        if (response.data.status === true) {
          setProperties(response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        if (error && error.message === "Network Error") {
          toast.error(
            "Seems you're offline, please connect to a stable network",
            toastOptions
          );
        }
      }
    }
    return () => {
      fetchEmployees();
    };
  }, []);

  return (
    <>
      <Container className="wrapper">
        <Header />
        <Hero />
        <OnSale properties={properties} isLoading={isLoading} />
        <Featured />
        <OnRent properties={properties} isLoading={isLoading} />
        <Offer />
        <Agents />
        <Footer />
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div``;

export default Home;

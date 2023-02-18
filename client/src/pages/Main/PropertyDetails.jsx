import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Main/User/Header";
import Footer from "../../components/Main/User/Footer";
import { singlePropertyRoute } from "../../utils/APIRoutes";
import { Axios } from "../../utils/Axios";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/Toast";
import PropertyDetailsContainer from "../../components/Main/User/PropertyDetailsContainer";
import PropertiesDetailsHero from "../../components/Main/User/PropertiesDetailsHero";
import { useLocation } from "react-router-dom";

function PropertyDetails() {
  const [property, setProperty] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    document.title = "Property Lists - CareTaker";
  });

  useEffect(() => {
    async function fetchProperty() {
      try {
        const response = await Axios.get(`${singlePropertyRoute}/${id}`);
        console.log(response);
        if (response.data.status === true) {
          setProperty(response.data.data);
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
    // return () => {
    //  fetchProperty();
    // };
    fetchProperty();
  }, [id]);
  return (
    <>
      <Container className="wrapper">
        <Header/>
        <PropertiesDetailsHero/>
        <PropertyDetailsContainer properties={property} isLoading={isLoading} />
        <Footer/>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default PropertyDetails;

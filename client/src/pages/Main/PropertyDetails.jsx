import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Main/User/Header";
import ListingContainer from "../../components/Main/User/ListingContainer";
import ListingHero from "../../components/Main/User/ListingHero";
import Footer from "../../components/Main/User/Footer";
import { allPropertyRoute } from "../../utils/APIRoutes";
import { authAxios } from "../../utils/Axios";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/Toast";

function PropertyDetails() {
  const [property, setProperty] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Property Lists - CareTaker";
  });

  useEffect(() => {
    async function fetchProperty() {
      try {
        const response = await authAxios.get(allPropertyRoute);
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
  }, []);
  return (
    <>
      <Container className="wrapper">
        <Header/>
        <ListingHero/>
        <ListingContainer properties={property} isLoading={isLoading} />
        <Footer/>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default PropertyDetails;

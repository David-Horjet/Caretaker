import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Main/User/Header";
import ListingContainer from "../../components/Main/User/ListingContainer";
import ListingHero from "../../components/Main/User/ListingHero";
import Footer from "../../components/Main/User/Footer";

function Listings() {
  useEffect(() => {
    document.title = "Property Lists - CareTaker";
  });
  return (
    <>
      <Container className="wrapper">
        <Header/>
        <ListingHero/>
        <ListingContainer/>
        <Footer/>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default Listings;

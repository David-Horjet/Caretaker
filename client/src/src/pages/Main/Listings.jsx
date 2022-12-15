import React, { useEffect } from "react";
import styled from "styled-components";
import Featured from "../../components/Main/User/Featured";
import Header from "../../components/Main/User/Header";
import Hero from "../../components/Main/User/Hero";
import OnSale from "../../components/Main/User/OnSale";
import Properties from "../../components/Main/User/Properties";

function Listings() {
  useEffect(() => {
    document.title = "Property Lists - CareTaker";
  });
  return (
    <>
      <Container className="wrapper">
        <Header/>
        <Hero/>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default Listings;

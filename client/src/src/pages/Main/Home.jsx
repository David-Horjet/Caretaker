import React, { useEffect } from "react";
import styled from "styled-components";
import Agents from "../../components/Main/User/Agents";
import Featured from "../../components/Main/User/Featured";
import Footer from "../../components/Main/User/Footer";
import Header from "../../components/Main/User/Header";
import Hero from "../../components/Main/User/Hero";
import Offer from "../../components/Main/User/Offer";
import OnSale from "../../components/Main/User/OnSale";
import Properties from "../../components/Main/User/Properties";

function Home() {
  useEffect(() => {
    document.title = "CareTaker - Elegant Retreat In Quiet Coral Gables";
  });
  return (
    <>
      <Container className="wrapper">
        <Header/>
        <Hero/>
        <OnSale/>
        <Featured/>
        <Properties/>
        <Offer/>
        <Agents/>
        <Footer/>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default Home;

import React, { useEffect } from "react";
import styled from "styled-components";
import AgentsContainer from "../../components/Main/User/AgentsContainer";
import AgentsHero from "../../components/Main/User/AgentsHero";
import Footer from "../../components/Main/User/Footer";
import Header from "../../components/Main/User/Header";

function Agents() {
  useEffect(() => {
    document.title = "Agents Lists - CareTaker";
  });
  return (
    <>
      <Container className="wrapper">
        <Header/>
        <AgentsHero/>
        <AgentsContainer/>
        <Footer/>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default Agents;

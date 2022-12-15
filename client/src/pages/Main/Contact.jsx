import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Main/User/Header";
import Hero from "../../components/Main/User/Hero";

function Contact() {
  useEffect(() => {
    document.title = "Contact - CareTaker";
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

export default Contact;

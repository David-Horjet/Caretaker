import React, { useEffect } from "react";
import styled from "styled-components";
import ContactsHero from "../../components/Main/User/ContactsHero";
import Header from "../../components/Main/User/Header";
import Footer from "../../components/Main/User/Footer";
import ContactsContainer from "../../components/Main/User/ContactsContainer";

function Contact() {
  useEffect(() => {
    document.title = "Contact - CareTaker";
  });
  return (
    <>
      <Container className="wrapper">
        <Header/>
        <ContactsHero/>
        <ContactsContainer/>
        <Footer/>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default Contact;

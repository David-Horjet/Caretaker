import React, { useEffect } from "react";
import styled from "styled-components";
import ContactsHero from "../../components/Main/User/ContactsHero";
import Header from "../../components/Main/User/Header";

function Contact() {
  useEffect(() => {
    document.title = "Contact - CareTaker";
  });
  return (
    <>
      <Container className="wrapper">
        <Header/>
        <ContactsHero/>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default Contact;

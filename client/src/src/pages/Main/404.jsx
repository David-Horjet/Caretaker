import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Featured from "../../components/Main/User/Featured";
import Header from "../../components/Main/User/Header";
import Hero from "../../components/Main/User/Hero";
import OnSale from "../../components/Main/User/OnSale";
import Properties from "../../components/Main/User/Properties";

function PageNotFound() {
  useEffect(() => {
    document.title = "Agents Lists - CareTaker";
  });
  return (
    <>
      <Container className="wrapper">
      <Header/>
        <h1>404</h1>
        <p>
          Seems the Page you are looking for does not exist, Kidly click the
          button below to find your way back to the home page
        </p>
        <button>
          <Link to="/">Home</Link>
        </button>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default PageNotFound;

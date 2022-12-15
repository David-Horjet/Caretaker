import React, { useEffect } from "react";
import styled from "styled-components";
import SideNav from "../../components/Main/Admin/SideNav";
import TopNav from "../../components/Main/Admin/TopNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SinglePropertyContainer from "../../components/Main/Admin/SinglePropertyContainer";

function SingleProperty({ FullScreen, handleFullScreen, reportChange }) {

  useEffect(() => {
    document.title = "Property Lists- CareTaker Admin";
  });

  return (
    <>
    <FullScreen handle={handleFullScreen} onChange={reportChange}>
    <Container>
      <TopNav handleFullScreen={handleFullScreen} />
      <main className="main row">
        <SideNav />
        <SinglePropertyContainer/>
      </main>
    </Container>
    <ToastContainer/>
    </FullScreen>
    </>
  );
}

const Container = styled.div`
overflow: hidden;
  main {
  }
`;

export default SingleProperty;

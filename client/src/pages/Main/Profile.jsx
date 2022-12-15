import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Main/User/Header";
import ProfileContainer from "../../components/Main/User/ProfileContainer";
import ProfileHero from "../../components/Main/User/ProfileHero";

function Profile() {
  useEffect(() => {
    document.title = "Profile - CareTaker";
  });
  return (
    <>
      <Container className="wrapper">
        <Header/>
        <ProfileHero/>
        <ProfileContainer/>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default Profile;

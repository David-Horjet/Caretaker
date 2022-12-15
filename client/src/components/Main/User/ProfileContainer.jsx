import React from "react";
import styled from "styled-components";
import UserCard from "../../Widgets/UserCard";
import UserCard2 from "../../Widgets/UserCard2";

function ProfileContainer() {
  return (
    <Container>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <UserCard />
          </div>
          <div className="col-lg-9">
            <UserCard2 />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 60px 0;
  @media (max-width: 576px) {
  }
`;

export default ProfileContainer;

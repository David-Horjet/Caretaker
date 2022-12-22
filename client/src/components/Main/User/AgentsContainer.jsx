import React from "react";
import styled from "styled-components";
import SkeletonLoader from "../../Loaders/SkeletonLoader";
import Agent from "./Agent";

function AgentsContainer({users, isUsersLoading}) {
  const newUsersArray = users.filter(function (e) {
    return e.isAgent === true;
  });
  return (
    <Container className="py-5">
      <div className="container-fluid">
        <div className="heading">
          <h2>All Agents</h2>
          <span className="show-result">
            Showing <span>10</span> Agents
          </span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="listings pt-5">
        {isUsersLoading ? (
              <div className="row">
                <SkeletonLoader />
              </div>
            ) : (
              <div className="row">
                {newUsersArray.map((data) => {
                  return (
                    <Agent
                      data={users}
                      isUsersLoading={isUsersLoading}
                      key={data._id}
                    />
                  );
                })}
              </div>
            )}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  .heading {
    h2 {
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0.001em;
      line-height: 1.1;
      text-transform: capitalize;
      color: #1c2d3a;
    }
  }
`;

export default AgentsContainer;

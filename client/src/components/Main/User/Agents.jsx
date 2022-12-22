import React from "react";
import styled from "styled-components";
import SkeletonLoader from "../../Loaders/SkeletonLoader";
import Agent from "./Agent";

function Agents({users, isUsersLoading}) {
  const newUsersArray = users.filter(function (e) {
    return e.isAgent === true;
  });
  
  return (
    <Container className="bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="title-1 text-center">
              <span className="label label-gradient">Agent</span>
              <h2>Meet Our Agents</h2>
              <hr />
            </div>
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
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 90px 0;
  .title-1 {
    padding-bottom: 50px;
    .label-gradient {
      background-image: var(--theme-gradient2);
      border-radius: 5px;
      padding: 4px 15px 3px;
      font-family: Roboto, sans-serif;
      font-weight: 500;
      font-size: 14px;
      color: #ffffff;
      display: inline-block;
      text-transform: capitalize;
    }
    h2 {
      padding-top: 15px;
      line-height: 1.3;
      text-transform: capitalize;
      font-weight: 700;
      color: #1c2d3a;
    }
    hr {
      color: var(--theme-color);
      width: 80px;
      margin: 20px auto 0;
      padding: 5px;
      opacity: 1;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
    }
  }
`;

export default Agents;

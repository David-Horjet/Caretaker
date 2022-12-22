import React from "react";
import styled from "styled-components";
import SkeletonLoader from "../../Loaders/SkeletonLoader";
import Property from "./Property";

function ListingContainer({properties, isLoading}) {
  return (
    <Container className="py-5">
      <div className="container-fluid">
        <div className="heading">
          <h2>Properties Listing</h2>
          <span className="show-result">
            Showing <span>69</span> Listings
          </span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="listings pt-5">
        {isLoading ? (
              <div className="row">
                <SkeletonLoader />
              </div>
            ) : (
              <div className="row">
                {properties.map((data) => {
                  return (
                    <Property
                      data={data}
                      isLoading={isLoading}
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

export default ListingContainer;

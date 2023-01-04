import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

function SkeletonLoader() {
  const rowSkelotons = 8;
  let skelotonRows = [];
  for (let index = 0; index < rowSkelotons; index++) {
    skelotonRows.push(
      <li key={index} className="col-lg-4 col-sm-6 mb-4">
        <div className="skelt d-flex ustify-content-center align-items-center">
          <Skeleton width={300} height={150} />
          <Skeleton width={300} height={10} />
          <Skeleton width={300} height={30} />
          <Skeleton width={300} height={10} />
          <div className="d-flex gap-3 justify-content-center align-items-center">
            <Skeleton width={90} height={25} />
            <Skeleton width={90} height={25} />
            <Skeleton width={90} height={25} />
          </div>
          <div className="d-flex gap-3 justify-content-center align-items-center">
            <Skeleton width={140} height={30} />
            <Skeleton width={140} height={30} />
          </div>
        </div>
      </li>
    );
  }
  return (
    <SkeletonTheme color="#cac7c7" highlightColor="#d3cfcf">
      <SkeletonContainer className="row">{skelotonRows}</SkeletonContainer>
    </SkeletonTheme>
  );
}

const SkeletonContainer = styled.div`
  .skelt {
    flex-direction: column;
  }
`;

export default SkeletonLoader;

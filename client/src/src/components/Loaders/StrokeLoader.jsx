import React from "react";
import styled from "styled-components";

function StrokeLoader() {
  return (
    <Container title="Loading">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow:hidden;
  .loader {
    gap: 20px;
    color: var(--theme-color);
    span {
        width: 20px;
        height: 20px;
        display: inline-block;
        background-color: var(--theme-color);
        border-radius: 50%;
        animation: loader 1s linear infinite alternate;
        -webkit-animation: preloader 1s linear infinite alternate;
        &:nth-child(1) {
            animation-delay: -0.8s;
        }
        &:nth-child(2) {
            animation-delay: -0.5s;
        }
        &:nth-child(3) {
            animation-delay: -0.2s;
        }
    }
    @keyframes preloader {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
  }
`;

export default StrokeLoader;

import React from "react";
import styled from "styled-components";
import Banner1 from "../../../assets/images/main/banner1.jpg";
import { BsHouseDoor } from "react-icons/bs";

function Offer() {
  // {prop}
  return (
    <Container style={{ backgroundImage: `url(${Banner1})` }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="title-1 text-center">
              <span className="label label-gradient">New Offer</span>
              <h2>Our New Offer</h2>
              <hr />
            </div>
            <div className="row g-3 align-items-center">
              <div className="col-sm-6">
                <div className="offer-box">
                  <div className="offer-wrapper p-3">
                    <div className="media d-flex align-items-start">
                      <div className="media-icon d-flex justify-content-center align-items-center">
                        <BsHouseDoor />
                      </div>
                      <div className="media-body">
                        <h6>CareTaker</h6>
                        <h3>Are you looking for a home ?</h3>
                        <p>
                          350 offers on site, trusted by a community of
                          thousands of users. 10 new offers every day.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="offer-box">
                  <div className="offer-wrapper p-3">
                    <div className="media d-flex align-items-start">
                      <div className="media-icon d-flex justify-content-center align-items-center">
                        <BsHouseDoor />
                      </div>
                      <div className="media-body">
                        <h6>CareTaker</h6>
                        <h3>Are you looking for a home ?</h3>
                        <p>
                          350 offers on site, trusted by a community of
                          thousands of users. 10 new offers every day.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 90px 0;
  position: relative;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  @media (max-width: 576px) {
    .media {
      flex-direction: column;
      justify-content: center;
      align-items: center !important;
      .media-body {
        text-align: center;
      }
    }
  }
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
      color: var(--pure-white);
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

  .offer-box {
    .offer-wrapper {
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      .media-icon {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
        width: 90px;
        height: 90px;
        border-radius: 100%;
        position: relative;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        background-color: rgba(255, 255, 255, 0.1);
        svg {
          display: block;
          font-size: 40px;
          color: var(--pure-white);
        }
        &::before {
          background-image: var(--theme-gradient1);
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          vertical-align: middle;
          width: 88%;
          height: 88%;
          -webkit-transform: scale(0);
          transform: scale(0);
          background-image: var(--theme-gradient1);
          border-radius: 100%;
          z-index: -1;
        }
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          border-radius: 50%;
          border: 1px dashed #ffffff;
          padding: 10px;
          -webkit-transition: 0.8s;
          transition: 0.8s;
          -webkit-animation: spin 10s infinite linear;
          animation: spin 10s infinite linear;
        }
      }
      .media-body {
        margin-left: 20px;
        flex: 1;
        h6 {
          color: var(--pure-white);
          letter-spacing: 5px;
          line-height: 1.8;
          text-transform: uppercase;
          position: relative;
          margin-bottom: 0;
          font-weight: 500;
          &::after {
            position: absolute;
            content: "";
            width: 100px;
            left: 60px;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.1);
          }
        }
        h3 {
          color: var(--pure-white);
          font-weight: 700;
          margin: 16px 0;
          font-size: 25px;
          letter-spacing: 0.03em;
          line-height: 1.2;
        }
        p {
          line-height: 1.7;
          margin-bottom: 0;
          color: var(--pure-white);
          font-size: 15px;
        }
      }
    }
  }
`;

export default Offer;

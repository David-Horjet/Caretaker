import React from "react";
import { BsHouse, BsHouseDoor, BsPersonBadge } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroImg from "../../../assets/images/main/hero.jpg";

function Hero() {
  return (
    <Container className="home-section layout-1 layout-6">
      <div className="home-main" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container-fluid">
          <div className="hero pt-2">
            <div className="row">
              <div className="col-lg-7">
                <div className="container-fluid">
                  <div className="home-content">
                    <h6 className="mt-5">Looking for a way to better manage your properties ?</h6>
                    <h1 className="my-4">
                      Manage your properties and Rentals with our platform
                    </h1>
                    <Link to="/listings" className="btn btn-gradient color-6">
                      check listings
                    </Link>
                  </div>
                  <div className="home-left">
                    <div className="looking-icons mt-4">
                      <h5 className="mb-2">What are you looking for?</h5>
                      <ul className="d-flex p-0 mb-0 mt-4 align-items-center gap-3">
                        <li>
                          <Link to="/listings" className="looking-icon">
                            <BsHouseDoor />
                            <h6>House</h6>
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" className="looking-icon">
                            <BsPersonBadge />
                            <h6>Booking</h6>
                          </Link>
                        </li>
                        <li>
                          <Link to="/listings" className="looking-icon">
                            <BsHouse />
                            <h6>Garage</h6>
                          </Link>
                        </li>
                      </ul>
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
  background-image: unset;
  padding: 0;
  height: unset;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  @media (max-width: 576px) {
    .home-main {
      .hero {
        padding-top: 5px !important;
        .home-content {
          h6 {
            font-size: 15px;
          }
          h1 {
            font-size: 35px !important;
          }
        }
        .home-left {
          .looking-icons {
            h5 {
              font-size: 16px;
            }
            ul {
              li {
                .looking-icon {
                  padding: 5px !important;
                  min-width: 80px !important;
                  svg {
                    font-size: 15px;
                  }
                  h6 {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .home-main {
    background-color: rgba(0, 0, 0, 0.8);
    background-blend-mode: overlay;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    padding-top: 75px;
    .home-content {
      h6 {
        color: var(--pure-white);
      }
      h1 {
        color: var(--pure-white);
        font-size: 40px;
        font-weight: 700;
        letter-spacing: 0.03em;
        line-height: 1.3;
        text-transform: capitalize;
      }
      a {
        background-image: var(--theme-gradient2);
        border-radius: 30px;
        color: #ffffff;
        background-size: 200% auto;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        padding: 9px 30px;
        text-transform: capitalize;
        font-size: 15px;
        &:hover {
          background-position: right center;
        }
      }
    }
    .home-left {
      .looking-icons {
        h5 {
          color: var(--pure-white);
        }
        ul {
          li {
            -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
            box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
            .looking-icon {
              background-color: rgba(255, 255, 255, 0.1);
              display: block;
              padding: 10px;
              min-width: 100px;
              text-align: center;
              color: var(--pure-white);
              transition: all 0.5s;
              font-size: 25px;
              svg {
                font: 25px;
              }
              h6 {
                margin-top: 10px;
              }
            }
            &:hover .looking-icon {
              color: var(--theme-color);
            }
          }
        }
      }
    }
  }
`;

export default Hero;

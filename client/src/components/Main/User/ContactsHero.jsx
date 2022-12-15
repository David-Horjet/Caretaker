import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroImg from "../../../assets/images/main/hero.jpg";

function ContactsHero() {
  return (
    <Container className="home-section layout-1 layout-6">
      <div className="home-main" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container-fluid">
          <div className="breadcrumb-content">
            <div>
              <h2>Contact</h2>
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Contact
                  </li>
                </ol>
              </nav>
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
        padding-top: 25px !important;
      }
    }
  }
  .home-main {
    background-color: rgba(0, 0, 0, 0.8);
    background-blend-mode: overlay;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 75px;
    h2 {
      color: #ffffff;
      font-size: 28px;
      line-height: 1.2;
      display: inline-block;
    }
    .breadcrumb-content {
      padding: 80px 0;

      .breadcrumb-item,
      a {
        line-height: 1.4;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.8);
        text-transform: capitalize;
        font-weight: 600;
      }
    }
  }
`;

export default ContactsHero;

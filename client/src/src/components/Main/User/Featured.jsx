import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosBed } from "react-icons/io";
import { FaBath, FaRulerCombined } from "react-icons/fa";
import Banner1 from "../../../assets/images/main/banner1.jpg";
import FeaturedImg from "../../../assets/images/main/featured.jpg";

function Featured() {
// {prop}
  const prop = "prop";
  return (
    <Container style={{ backgroundImage: `url(${Banner1})` }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="title-1 text-center">
              <span className="label label-gradient">Featured</span>
              <h2>Featured Property</h2>
              <hr />
            </div>
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="image w-100">
                  <img className="w-100" src={FeaturedImg} alt="featuredImg" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="property-details bg-white rounded p-5">
                  <span className="font-roboto mb-2">
                    Nigeria{prop.country}
                  </span>
                  <Link to="/properties/">
                    <h4>Merrick in ghana{prop.title}</h4>
                  </Link>
                  <h6>$50000{prop.price}</h6>
                  <p className="font-roboto light-font">
                    Real estate is divided into several categories, including
                    residential property, commercial property and industrial
                    property.
                  </p>
                  <ul className="px-0 mb-4 d-flex justify-content-between align-items-center">
                    <li>
                      <IoIosBed /> Bed : 4
                    </li>
                    <li>
                      <FaBath />
                      Baths : 4
                    </li>
                    <li>
                      <FaRulerCombined />
                      Sq Ft : 5000
                    </li>
                  </ul>
                  <div className="property-btn d-flex align-items-center justify-content-between">
                    <span>August 4, 2022</span>
                    <button
                      type="button"
                      className="btn btn-dashed btn-pill color-2"
                    >
                      <Link to={`/admin/property/${prop._id}`}>Details</Link>
                    </button>
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
    .property-details{
      padding: 25px !important;
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

  .property-details {
    span {
      display: block;
      margin-top: -3px;
      margin-bottom: 5px;
      letter-spacing: 5px;
      color: #959595;
      text-transform: uppercase;
      font-weight: 500;
    }
    a {
      display: block;
      -webkit-transition: 0.8s;
      transition: 0.8s;
      color: var(--pure-black);
      font-size: 14px;
    }
    h6 {
      font-weight: 600;
      font-size: 17px;
      color: var(--theme-color);
    }
    p {
      line-height: 1.8;
      font-size: 15px;
      color: rgba(88, 97, 103, 0.7);
    }
    ul {
      li {
        font-size: 15px;
        svg {
          color: var(--theme-color);
          margin-right: 8px;
        }
      }
      li + li {
        border-left: 1px solid rgba(0, 0, 0, 0.2);
        padding-left: 10px;
      }
    }
    .property-btn {
      span {
        color: #878787;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 500;
      }
      .btn {
        padding: 8px 20px;
        background-color: rgba(255, 92, 65, 0.1);
        &:hover {
          border-color: var(--theme-default4);
          color: var(--theme-default4);
        }
      }
    }
  }
`;

export default Featured;

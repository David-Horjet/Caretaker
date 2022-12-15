import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PropertyItem({ properties }) {
  return (
    <>
      {properties.map((prop) => {
        return (
          <Container key={prop._id} className="col-lg-4 col-md-6 mb-4">
            <div className="property-box">
              <div className="property-image">
                <img className="w-100 h-100" src={prop.image} alt="" />
              </div>

              <div className="property-details p-3">
                <span className="font-roboto mb-2">{prop.country}</span>
                <a href="../main/single-property-8.html mb-1">
                  <h4>{prop.title}</h4>
                </a>
                <h6>${prop.price}</h6>
                <p className="font-roboto light-font py-2">
                  Real estate is divided into several categories, including
                  residential property, commercial property and industrial
                  property.
                </p>
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
          </Container>
        );
      })}
    </>
  );
}

const Container = styled.div`
  transition: .5s all;
  &:hover {
    transform: translateY(-5px);
  }
  .property-box {
    border-radius: 10px;
    overflow: hidden;
    -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 4%);
    box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 4%);
    background: #ffffff;
    .property-image {
      height: 150px;
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
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(#1c2d3a),
          to(#1c2d3a)
        );
        background: linear-gradient(to right, #1c2d3a 0%, #1c2d3a 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
        margin-bottom: 20px;
        color: rgba(88, 97, 103, 0.7);
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
  }
`;

export default PropertyItem;

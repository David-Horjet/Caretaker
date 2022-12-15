import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import agent1 from "../../../assets/images/agents/agent1.jpg";
import { BsEnvelope, BsEye, BsHeart } from "react-icons/bs";

function Agent() {
  // { prop }
  const prop = "prop";
  return (
    <>
      <Container key={prop._id} className="col-sm-6 mb-4">
        <div className="agent-box row mx-0">
          <div className="col-md-6 agent-image">
            <img className="w-100 h-100" src={agent1} alt="" />
          </div>

          <div className="col-md-6 agent-details p-3">
            <Link to="/">
              <h6 className="d-flex align-items-center">
                Ty R. Leeva
                <span className="d-flex justify-content-center align-items-center">
                  <BsHeart />
                </span>
              </h6>
            </Link>
            <h3>Sellers Of Property...</h3>
            <span>
              <BsEnvelope />
              caretaker@gmail.com
            </span>
            <p>
              A real estate agent or broker is a person who represents sellers
              or buyers advised to consult a licensed.
            </p>
            <Link to="/" className="btn mt-2">
              <BsEye />
              View Portfolio
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  transition: 0.5s all;
  &:hover {
    transform: translateY(-5px);
  }
  &:hover .options {
    opacity: 1 !important;
  }
  &:hover h4 {
    color: var(--theme-color);
  }
  .agent-box {
    border-radius: 10px;
    -webkit-box-shadow: 3.346px 3.716px 25px rgb(0 0 0 / 7%);
    box-shadow: 3.346px 3.716px 25px rgb(0 0 0 / 7%);
    background-color: #ffffff;
    position: relative;
    .agent-image {
      padding: 0;
      img {
        border-radius: 10px;
        object-fit: cover;
      }
    }
    .agent-details {
      border-radius: 0 10px 10px 0;
      -webkit-box-shadow: 3.346px 3.716px 25px rgb(0 0 0 / 7%);
      box-shadow: 3.346px 3.716px 25px rgb(0 0 0 / 7%);
      background-color: #ffffff;
      position: relative;
      a {
        color: var(--theme-color);
      }
      h6 {
        font-weight: 700;
        span {
          color: var(--theme-color);
          margin-left: 10px;
          width: 34px;
          height: 34px;
          border-radius: 100%;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.1;
            background-color: var(--theme-color);
            border-radius: 50%;
          }
        }
      }
      h3 {
        line-height: 1.45;
        font-weight: 700;
        color: var(--faded-black);
        font-size: 22px;
      }
      span {
        line-height: normal;
        margin-bottom: -2px;
        display: block;
        svg {
          margin-right: 5px;
        }
      }
      p {
        font-size: 13px;
        line-height: 1.8;
        margin: 8px 0;
        letter-spacing: 0.5px;
        color: #647589;
      }
      .btn {
        color: var(--pure-white);
        background-image: var(--theme-gradient2);
        border-radius: 30px;
        background-size: 200% auto;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        border: 2px solid transparent;
        font-weight: 600;
        text-transform: capitalize;
        padding: 8px 30px 7px;
        border-radius: 8px;
        font-size: 14px;
        position: relative;
        &::after {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 30px;
          opacity: 0.3;
          -webkit-box-shadow: -5.15px 8.572px 25px var(--theme-default8);
          box-shadow: -5.15px 8.572px 25px var(--theme-default8);
        }
        svg {
          margin-right: 7px;
        }
      }
    }
  }
`;

export default Agent;

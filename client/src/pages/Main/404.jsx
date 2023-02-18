import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Main/User/Header";
import Footer from "../../components/Main/User/Footer";

function PageNotFound() {
  useEffect(() => {
    document.title = "Agents Lists - CareTaker";
  });
  return (
    <>
      <Container className="wrapper">
        <Header />
        <div className="content">
          <div className="details">
          <h1>404</h1>
          <p>
            Seems the Page you are looking for does not exist, Kidly click the
            button below to find your way back to the home page
          </p>
          <div className="btn">
          <button>
            <Link to="/">Home</Link>
          </button>
          </div>
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    padding-top: 75px;
    .details {
      padding: 100px 0;
      h1 {
        font-size: 70px;
        line-height: 1.2;
        text-align: center;
      }
      p {
        text-align: center;
      }
      .btn {
        display: flex;
        justify-content: center;
        button {
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
            a {
              color: white;
            }
        }
      }

    }`;

export default PageNotFound;

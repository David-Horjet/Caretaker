import React from "react";
import { BsEnvelopeFill, BsGeoAltFill, BsPhoneFill } from "react-icons/bs";
import { SiHomeadvisor } from "react-icons/si";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-lg-4 col-sm-6">
            <div className="footer-links footer-details">
              <div className="footer-content">
                <Link to="/" className="logo d-flex align-items-center">
                  <SiHomeadvisor />
                  <span className="d-lg-block">CareTaker</span>
                </Link>
                <p className="my-4">
                  Looking for a way to better manage your properties? Manage your
                  properties and Rentals with our platform
                </p>
                <div className="footer-contact">
                  <ul className="d-grid gap-4 p-0">
                    <li>
                      <BsGeoAltFill />
                      House 5, Off Stateline Road, Akure
                    </li>
                    <li>
                      <BsPhoneFill />
                      (+234) 802 - 818 - 7950
                    </li>
                    <li>
                      <BsEnvelopeFill /> info@caretaker.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-3">
            <div className="footer-links footer-left-space">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="d-grid gap-4 mt-4 p-0 footer-content">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/listings">Listing</Link>
                </li>
                <li>
                  <Link to="/listings">Property</Link>
                </li>
                <li>
                  <Link to="/agents">Agents</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="footer-links">
              <h5 className="footer-title">Our Location</h5>
              <div className="footer-content pt-4">
                <div className="footer-map">
                  <iframe
                    title="caretaker location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563449626439!5m2!1sen!2sin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-3">
            <div className="footer-links footer-left-space">
              <h5 className="footer-title">Tags</h5>
              <ul className="d-grid gap-4 mt-4 p-0 footer-content">
              <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/listings">Listing</Link>
                </li>
                <li>
                  <Link to="/listings">Property</Link>
                </li>
                <li>
                  <Link to="/agents">Agents</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background-color: var(--pure-black);
  padding: 80px 0;
  .logo {
    svg {
      font-size: 26px;
      font-weight: 700;
      color: var(--theme-color);
    }
    span {
      font-size: 26px;
      font-weight: 700;
      color: var(--pure-white);
      padding-left: 8px;
      text-transform: uppercase;
    }
  }
  p {
    font-size: 14px;
    color: #d2d2d2;
    line-height: 1.6;
  }
  .footer-contact {
    ul {
      li {
        display: block;
        color: var(--pure-white);
        font-weight: 600;
        font-size: 14px;
        svg {
          margin-right: 8px;
        }
      }
    }
  }
  .footer-links {
    h5 {
      position: relative;
      line-height: 1.6;
      color: var(--pure-white);
      font-weight: 500;
      font-size: 18px;
    }
  }
  .footer-content {
    li {
      a {
        color: rgba(255, 255, 255, 0.9);
        font-size: 15px;
        transition: all 0.3s;
        &:hover {
          color: var(--theme-color);
        }
      }
    }
  }
`;

export default Footer;

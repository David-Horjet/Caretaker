import React from "react";
import styled from "styled-components";
import {
  MdOutlineBathroom,
  MdOutlineBedroomParent,
} from "react-icons/md";
import { BsFileEarmarkPdf, BsFillStarFill } from "react-icons/bs";
import StrokeLoader from "../../Loaders/StrokeLoader";

function PropertyDetailsContainer({ property, isLoading }) {
    // console.log(property);
  return (
    <Container className="bg-light">
      {isLoading ? (
        <StrokeLoader />
      ) : (
        <div className="container-fluid">
          <div className="single-title d-flex justify-content-between align-items-center mt-3">
            <div className="left-single">
              <div className="d-flex align-items-center">
                <h2 className="mb-0">{property?.title}</h2>
                <span>
                  <span className="label label-shadow ms-2">For {property?.status}</span>
                </span>
              </div>
              <p className="mt-1 mb-3">
              {property?.address}
              </p>
              <ul className="d-flex">
                <li>
                  <div className="d-flex align-items-center">
                    <MdOutlineBedroomParent />
                    <span>{property?.room} Rooms</span>
                  </div>
                </li>
                <li>
                  <div>
                    <MdOutlineBathroom />
                    <span>{property?.bed} Bedrooms</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right-single">
              <div className="rating d-flex gap-2 pb-2 justify-content-end">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
              </div>
              <h2 className="price">
              ₦{property?.price} <span>/ start From</span>
              </h2>
            </div>
          </div>
          <div className="single-body mt-4">
            <div
              class="tab-pane fade show active about page-section"
              id="about"
            >
              <div className="head d-flex justify-content-between align-items-center">
                <h4 class="content-title mb-3">Property Details</h4>
              </div>
              <div class="row">
                <div class="col-md-6 col-xl-4">
                  <ul class="property-list-details">
                    <li>
                      <span>Property Type :</span> {property?.type}
                    </li>
                    <li>
                      <span>Property ID :</span> {property?._id}
                    </li>
                    <li>
                      <span>Property status :</span> For {property?.status}
                    </li>
                    <li>
                      <span>Operating Since :</span> {new Date(property?.createdAt)?.toDateString()}
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 col-xl-4">
                  <ul class="property-list-details">
                    <li>
                      <span>Price :</span> ₦{property?.price}
                    </li>
                    <li>
                      <span>Property Size :</span> NaN
                    </li>
                    <li>
                      <span>City :</span> {property?.city}
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 col-xl-4">
                  <ul class="property-list-details">
                    <li>
                      <span>Rooms :</span> {property?.room}
                    </li>
                    <li>
                      <span>Bedrooms :</span> {property?.bed}
                    </li>
                    <li>
                      <span>Bathrooms :</span> 4
                    </li>
                  </ul>
                </div>
              </div>
              <h4 class="content-title mt-4 mb-3">Attachments</h4>
              <a href="j" class="attach-file">
                <BsFileEarmarkPdf /> Demo Property Document{" "}
              </a>
              <h4 class="mt-4 mb-3">Property Brief</h4>
              <p>
                {property?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  .single-title {
    padding: 30px;
    background-color: #ffffff;
    -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
    box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
    .left-single {
      h2 {
        text-transform: capitalize;
        color: #1c2d3a;
        font-weight: 600;
      }
      .label {
        border-radius: 5px;
        padding: 4px 15px;
        font-family: Roboto, sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: #ffffff;
        display: inline-block;
        text-transform: capitalize;
        background-color: #f13439;
        -webkit-box-shadow: 0 0 9px 3px rgb(241 52 57 / 20%);
        box-shadow: 0 0 9px 3px rgb(241 52 57 / 20%);
      }
      ul {
        padding: 0;
        li {
          margin: 5px 10px;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
          display: inline-block;
          font-size: 15px;
          color: var(--pure-black);
          svg {
            margin-right: 5px;
          }
        }
      }
    }
    .right-single {
      .rating {
        svg {
          color: #ffcc33;
          font-size: 20px;
        }
      }
      h2 {
        color: var(--theme-color);
        font-weight: 700;
        span {
          color: #878787;
          font-size: 16px;
          font-weight: 500;
          text-transform: capitalize;
        }
      }
      .feature-label {
        span {
          border: 1px dashed #d2d2d2;
          color: #1c2d3a;
          font-size: 12px;
          font-weight: 600;
          text-transform: capitalize;
        }
      }
    }
  }
  .single-body {
    padding: 30px;
    background-color: #ffffff;
    -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
    box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
    .head {
      a {
        font-size: 16px;
        font-weight: 600;
        color: var(--theme-color);
        text-transform: capitalize;
        svg {
          font-size: 20px;
        }
      }
    }
    ul {
      padding: 0;
      li {
        display: block;
        line-height: 2;
        font-weight: 500;
        color: rgba(88, 97, 103, 0.85);
        span {
          font-weight: 600;
          min-width: 140px;
          display: inline-block;
          color: #586167;
        }
      }
    }
    .attach-file {
      color: #444444;
      font-weight: 500;
      font-size: 18px;
    }
  }
`;

export default PropertyDetailsContainer;

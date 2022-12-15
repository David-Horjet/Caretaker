import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLocationOn, MdOutlineBathroom, MdOutlineBedroomParent } from "react-icons/md";
import { BsFileEarmarkPdf, BsFillStarFill, BsRulers } from "react-icons/bs";

function SinglePropertyContainer() {

    return (
        <Container className="col-lg-3 bg-light">
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="page-header-left">
                                <h3>
                                    Property Details
                                    <small>Welcome to admin panel</small>
                                </h3>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb pull-right">
                                <li className="breadcrumb-item">
                                    <Link to="index.html">
                                        <FaHome />
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">My properties</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="single-title d-flex justify-content-between align-items-center">
                    <div className="left-single">
                        <div className="d-flex align-items-center">
                            <h2 className="mb-0">Orchard House </h2>
                            <span><span className="label label-shadow ms-2">For
                                Sale</span></span>
                        </div>
                        <p className="mt-1 mb-3">Mina Road, Bur Dubai, Dubai, United
                            Arab
                            Emirates</p>
                        <ul className="d-flex">
                            <li>
                                <div className="d-flex align-items-center">
                                    <MdOutlineBedroomParent />
                                    <span>4 Bedrooms</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <MdOutlineBathroom />
                                    <span>4 Bathrooms</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <BsRulers />
                                    <span>5000 Sq ft</span>
                                </div>
                            </li>
                        </ul>
                        {/* <div className="share-buttons">
                            <div className="d-inline-block">
                                <Link to={"/"} className="btn btn-gradient btn-pill color-2"><i className="far fa-share-square"></i>
                                    share
                                </Link>
                                <div className="share-hover">
                                    <ul>
                                        <li>
                                            <Link to="https://www.facebook.com/" className="icon-facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link>
                                        </li>
                                        <li>
                                            <Link to="https://twitter.com/" className="icon-twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.instagram.com/" className="icon-instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Link to={"/"} className="btn btn-dashed btn-pill color-2 ms-md-2 ms-1 save-btn"><i className="far fa-heart"></i>
                                Save</Link>
                            <Link to={"/"} className="btn btn-dashed btn-pill color-2 ms-md-2 ms-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-printer"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                                Print</Link>
                        </div> */}
                    </div>
                    <div className="right-single">
                        <div className="rating d-flex gap-2 pb-2 justify-content-end">
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                        </div>
                        <h2 className="price">$20,45,472 <span>/ start From</span></h2>
                        <div className="feature-label mt-3 d-flex gap-2 justify-content-end">
                            <span className="btn btn-dashed color-2 btn-pill">Wi-fi</span>
                            <span className="btn btn-dashed color-2 ms-1 btn-pill">Swimming Pool</span>
                        </div>
                    </div>
                </div>
                <div className="single-body mt-4">
                    <div class="tab-pane fade show active about page-section" id="about">
                        <div className="head d-flex justify-content-between align-items-center">
                            <h4 class="content-title mb-3">Property Details</h4>
                            <a href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.697488,-73.979681,8z/data=!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=en">
                                <MdLocationOn /> view on map</a>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-xl-4">
                                <ul class="property-list-details">
                                    <li><span>Property Type :</span> House</li>
                                    <li><span>Property ID :</span> ZOEA245</li>
                                    <li><span>Property status :</span> For sale</li>
                                    <li><span>Operating Since :</span> 2008</li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-xl-4">
                                <ul class="property-list-details">
                                    <li><span>Price :</span> $ 1,50,000</li>
                                    <li><span>Property Size :</span> 1730 sq / ft</li>
                                    <li><span>Balcony :</span> 2</li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-xl-4">
                                <ul class="property-list-details">
                                    <li><span>City :</span> Newyork</li>
                                    <li><span>Bedrooms :</span> 8</li>
                                    <li><span>Bathrooms :</span> 4</li>
                                </ul>
                            </div>
                        </div>
                        <h4 class="content-title mt-4 mb-3">Attachments</h4>
                        <a href="j" class="attach-file"><BsFileEarmarkPdf /> Demo Property
                            Document </a>
                        <h4 class="mt-4 mb-3">Property Brief</h4>
                        <p>
                            Residences can be classified by and how they are connected residences and land. Different types of housing tenure can be used for the same physical type.

                            Connected residences owned by a single entity leased out, or owned separately with an agreement covering the relationship between units and common areas.

                            Residential real estate may contain either a single family or multifamily structure that is available for occupation or for non-business purposes.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
  flex: 0 0 auto;
  width: 82%;
  margin-top: 76px;
  right: 0;
  left: auto;
  height: calc(100vh - 77px);
  overflow: auto;
  .page-header {
    padding: 30px 0;
    h3 {
      text-transform: capitalize;
      margin-bottom: 0;
      font-weight: 600;
      small {
        font-size: 13px;
        letter-spacing: 1px;
        display: block;
        margin-top: 6px;
        color: #959595;
        font-weight: normal;
        overflow: hidden;
      }
    }
    .breadcrumb {
      float: right;
      background-color: transparent;
      padding: 0;
      margin: 0;
      li {
        font-size: 14px;
        a {
          color: var(--theme-color);
          padding: 5px;
          padding: 4px 5px 3px;
          position: relative;
          background-color: #fef6f7;
        }
      }
    }
    .breadcrumb-item {
      overflow: hidden;
      a {
        background-color: #fef6f7;
        border-radius: 50%;
        svg {
          line-height: 5px;
        }
      }
    }
    .breadcrumb-item.active {
      color: #1c2d3a;
    }
  }
  .single-title {
    padding: 30px;
    background-color: #ffffff;
    -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
    box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
    .left-single {
        h2{
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

export default SinglePropertyContainer;

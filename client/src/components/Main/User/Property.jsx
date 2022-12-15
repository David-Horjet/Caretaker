import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsHeart, BsShare } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FaBath, FaRulerCombined } from "react-icons/fa";
import { toastOptions } from "../../../utils/Toast";

function Property({data}) {
  const copyUsernameLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `http://localhost:3000/${data._id}`
      );
      toast.success("Property Link successfully copied", toastOptions);
    } catch (err) {
      toast.error("An error occured copying property link", toastOptions);
    }
  };
  return (
    <>
      <Container className="col-lg-4 col-sm-6 mb-4">
        <div className="property-box">
          <div className="property-image">
            <img className="w-100 h-100" src={data.image} alt="propertyImage" />
            <div className="status">
              <span>{data.status}</span>
            </div>
            <div className="options">
              <div className="wish">
                <BsHeart />
              </div>
              <div className="copy">
                <BsShare onClick={copyUsernameLink} />
              </div>
            </div>
          </div>

          <div className="property-details p-3">
            <span className="font-roboto mb-2">{data.country}</span>
            <Link to="/properties/">
              <h4>{data.title}</h4>
            </Link>
            <h6>{data.price}</h6>
            <p className="font-roboto light-font">
              {data.description}
            </p>
            <ul className="px-0 mb-3 d-flex justify-content-between align-items-center">
              <li>
                <IoIosBed /> Bed : {data.bed}
              </li>
              <li>
                <FaBath />
                Baths : {data.bath}
              </li>
              <li>
                <FaRulerCombined />
                Sq Ft : {data.area}
              </li>
            </ul>
            <div className="property-btn d-flex align-items-center justify-content-between">
              <span>August 4, 2022</span>
              <button type="button" className="btn btn-dashed btn-pill color-2">
                <Link to={`/admin/property/${data._id}`}>Details</Link>
              </button>
            </div>
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
  .property-box {
    border-radius: 10px;
    overflow: hidden;
    -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 4%);
    box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 4%);
    background: #ffffff;
    .property-image {
      position: relative;
      height: 200px;
      .status {
        position: absolute;
        top: 10px;
        left: 12px;
        margin: 0 auto;
        span {
          text-transform: uppercase;
          font-size: 10px;
          font-weight: 600;
          background-image: var(--theme-gradient1);
          border-radius: 5px;
          padding: 4px 15px 3px;
          display: inline-block;
          color: var(--pure-white);
          -webkit-box-shadow: 0 0 9px 3px rgb(241 52 57 / 20%);
          box-shadow: 0 0 9px 3px rgb(241 52 57 / 20%);
        }
      }
      .options {
        position: absolute;
        top: 10px;
        right: 12px;
        margin: 0 auto;
        display: grid;
        gap: 5px;
        -webkit-transition: 0.8s;
        transition: 0.8s;
        opacity: 0;
        transition: all 0.5s;
        .copy,
        .wish {
          width: 35px;
          height: 35px;
          cursor: pointer;
          background: var(--pure-white);
          border-radius: 5px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            background-image: var(--theme-gradient1);
            color: var(--pure-white);
          }
        }
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
          font: 15px;
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
  }
`;

const SkeletonContainer = styled.div``;

export default Property;
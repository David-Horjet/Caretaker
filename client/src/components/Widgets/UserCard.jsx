import React from "react";
import { BsFacebook, BsGoogle, BsLinkedin, BsTwitter } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import ProfilePic from "../../assets/images/avatars/1.png"

function UserCard() {
  return (
    <Container className="sidebar-user sticky-cls">
      <div className="user-profile">
        <div className="media mb-4 d-flex align-items-center">
          <div className="avatar">
            <img
              src={ProfilePic}
              className="img-fluid update_img"
              alt="ProfilePic"
            />
          </div>
          <div className="media-body">
            <h5>Zack Lee</h5>
            <h6 className="font-roboto">zackle@gmail.com</h6>
            <h6 className="font-roboto mb-0">+91 846 - 547 - 210</h6>
          </div>
        </div>
        <div className="social mt-3">
          <ul className="p-0 mb-0">
            <li>
              <Link
                to="https://www.facebook.com/"
                className="facebook d-flex align-items-center justify-content-center"
              >
                <BsFacebook/>
              </Link>
            </li>
            <li>
              <Link
                to="https://twitter.com/"
                className="twitter d-flex align-items-center justify-content-center"
              >
                <BsTwitter/>
              </Link>
            </li>
            <li>
              <Link
                to="https://account.google.com"
                className="google d-flex align-items-center justify-content-center"
              >
            <BsGoogle/>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/"
                className="linkedin d-flex align-items-center justify-content-center"
              >
                <BsLinkedin/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashboard-list py-4">
        <ul>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/listing">
              My Listing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/favourites">
              favourites
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cards">
              Cards &amp; payment
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/privacy">
              Privacy
            </NavLink>
          </li>
          <li className="nav-item">
              Log out
          </li>
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.section`
  -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  border-radius: 8px;
  position: sticky;
  z-index: 1;
  top: 75px;
  .user-profile {
    padding: 20px;
    .media {
      .media-body {
        margin-left: 20px;
        h5 {
          font-weight: 600;
          margin-bottom: 5px;
          font-size: 18px;
        }
        h6 {
          color: #959595;
          font-size: 13px;
          margin-bottom: 3px;
          font-size: 14px;
        }
      }
    }
    .social {
      ul {
        li {
          display: inline-block;
          font-size: 14px;
          a {
            width: 30px;
            height: 30px;
            border-radius: 8px;
            color: #ffffff;
            transition: 0.5s ease;
          }
          a.facebook {
            background-color: #3b5998;
          }
          a.twitter {
            background-color: #55acee;
          }
          a.google {
            background-color: #dd4b39;
          }
          .linkedin {
            background-color: #007bb6;
          }
        }
      }
    }
  }
  .dashboard-list {
    border-top: 1px solid #efefef;
    ul {
      li {
        font-size: 14px;
        .nav-link {
          color: var(--pure-black);
          background-color: #fff;
          border: none;
          border-left: 2px solid transparent;
          border-radius: 0;
          padding: 8px 20px;
          font-size: 16px;
          text-transform: capitalize;
          font-weight: 500;
          &:hover {
          border-left-color: var(--theme-color);
          color: var(--theme-color);
          }
        }
        .nav-link.active {
          border-left-color: var(--theme-color);
          color: var(--theme-color);
        }
      }
    }
  }
`;

export default UserCard;

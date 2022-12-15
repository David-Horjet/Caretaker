import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../../context/Context";

function UserCard() {
  const { user } = useContext(Context);

  const profileText1 = user.firstName.split("")[0];
  const profileText2 = user.lastName.split("")[0];

  const profileText = profileText1 + profileText2;
  return (
    <Container className="sidebar-user sticky-cls">
      <div className="user-profile">
        <div className="media mb-4 d-flex align-items-center">
          <div className="avatarText d-flex justify-content-center align-items-center">
            <span>{profileText}</span>
          </div>
          <div className="media-body">
            <h5>{user.firstName + ' ' + user.lastName}</h5>
            <h6 className="font-roboto">{user.email}</h6>
            <h6 className="font-roboto mb-0">{user.phone}</h6>
          </div>
        </div>
      </div>
      <div className="dashboard-list py-4">
        <ul>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
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
      .avatarText {
        width: 50px;
        height: 50px;
        background-color: var(--theme-color);
        border-radius: 50%;
        span {
          font-weight: 600;
          color: var(--pure-white);
        }
      }
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
          padding: 20px;
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

import React, { useContext } from "react";
import styled from "styled-components";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsGlobe, BsHeart } from "react-icons/bs";
import { SiHomeadvisor } from "react-icons/si";
import { FiUser } from "react-icons/fi";
import { Context } from "../../../context/Context";
import Pic from "../../../assets/images/avatars/1.png";

function Header() {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <Container id="header" className="header fixed-top align-items-center py-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-4 hamburger d-flex align-items-center justify-content-between">
            <Link to="/" className="logo d-flex align-items-center">
              <SiHomeadvisor />
              <span className="d-lg-block">CareTaker</span>
            </Link>
          </div>
          <nav className="col-4 header-nav">
            <ul className="d-flex align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link nav-icon" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-icon" to="/listings">
                  Listing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-icon" to="/agents">
                  Agents
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-icon" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="col-4 rounded-2 d-flex justify-content-end account">
            <ul className="d-flex align-items-center gap-4 p-0 mb-0">
              <li>
                <BsGlobe />
              </li>
              <li>
                <BsHeart />
              </li>
              {user ? (
                <li className="user">
                  <div className="avatar">
                    <img className="w-100" src={Pic} alt="user" />
                  </div>
                  <ul className="profile-dropdown d-none position-absolute position-relative rounded onhover-show-div">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="position-absolute top-0 start-50 translate-middle mt-1 bi bi-caret-up-fill"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                    <li className="rounded">
                      <Link to="/profile">
                        <span>Profile </span>
                      </Link>
                    </li>
                    <li className="rounded">
                      <Link to="/listings">
                        <span>Listings </span>
                      </Link>
                    </li>
                    <li className="rounded">
                      <button onClick={handleLogout}>
                        <span>Log Out </span>
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li>
                  <Link to={"/login"}>
                    <FiUser />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.header`
  background-color: unset;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transition: 0.8s;
  transition: 0.8s;
  @media (max-width: 992px) {
    .row {
      justify-content: space-between;
      .hamburger {
        /* display: none !important; */
        .logo {
          svg {
            font-size: 20px !important;
          }
          span {
            font-size: 20px !important;
          }
        }
      }
      .header-nav {
        display: none !important;
      }
    }
  }

  @media (max-width: 576px) {
    .header-nav {
      ul {
        justify-content: space-between !important;
      }
    }
  }
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
  .header-nav {
    ul {
      margin: 0;
      li {
        display: inline-block;
        position: relative;
        width: auto;
        padding: 2px 15px;
        color: var(--pure-white);
        a {
          &:hover {
            color: var(--theme-color);
          }
        }
        a.active {
          color: var(--theme-color);
        }
      }
    }
  }
  .account {
    li {
      color: var(--pure-white);
      cursor: pointer;
      svg {
        color: var(--pure-white);
        font-size: 18px;
      }
      img {
        border-radius: 50%;
      }
    }
    .user {
      cursor: pointer;
      &:hover .profile-dropdown {
        display: block !important;
      }
      .profile-dropdown {
        right: 15px;
        background-color: var(--pure-white);
        top: 55px;
        display: grid;
        gap: 5px;
        padding: 10px;
        li {
          padding: 10px 40px;
          transition: all 0.5s;
          background-color: #f8f9fa;
          a,
          button {
            color: var(--pure-black);
            background: none;
            border: none;
            cursor: pointer;
          }
          &:hover {
            background-color: var(--theme-color);
          }
          &:hover a,
          &:hover button {
            color: var(--pure-white);
          }
        }
      }
    }
  }
`;

export default Header;

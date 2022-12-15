import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { BiFullscreen } from "react-icons/bi";
import avatar from "../../../assets/images/avatars/1.png";
import { Context } from "../../../context/Context";

function TopNav({ handleFullScreen }) {
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);
  const [profileActive, setProfileActive] = useState(false);
  const handleProfile = () => {
    setProfileActive(!profileActive);
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/admin/login");
  };
  return (
    <Container id="header" className="header fixed-top align-items-center py-3">
      <div className="row container-fluid">
        <div className="col-sm-4 hamburger d-flex align-items-center justify-content-between">
          <i className="bi bi-list toggle-sidebar-btn" />
        </div>
        <div className="col-sm-8 col-lg-4 rounded-2  search-bar">
          <form
            className="search-form w-100 d-flex align-items-center"
            method="POST"
            action="#"
          >
            <GoSearch />
            <div className="form-group">
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Search here..."
              />
            </div>
          </form>
        </div>
        <nav className="col-sm-4 header-nav ms-auto">
          <ul className="d-flex h-100 justify-content-end align-items-center">
            <li className="nav-item">
              <Link className="nav-link nav-icon" to="#">
                <BiFullscreen onClick={handleFullScreen.enter} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-icon" to="#">
                <FiFileText />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-icon" to="#">
                <BsBell className="bell" />
                <span className="label label-shadow label-pill notification-badge">
                  3
                </span>
              </Link>
            </li>
            <li className="profile-avatar onhover-dropdown">
              <div className="avatar">
                <img
                  src={avatar}
                  onClick={handleProfile}
                  className="w-100 h-100 rounded"
                  alt="user"
                />
              </div>
              {profileActive && (
                <ul className="profile-dropdown position-absolute position-relative rounded onhover-show-div">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="position-absolute top-0 start-50 translate-middle mt-1 bi bi-caret-up-fill"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                  <li className="rounded">
                    <Link to="/admin/profile">
                      <span>Account </span>
                    </Link>
                  </li>
                  <li className="rounded">
                    <Link to="/admin/property/all">
                      <span>Listing </span>
                    </Link>
                  </li>
                  <li className="rounded">
                    <button onClick={handleLogout}>
                      <span>Log Out </span>
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}

const Container = styled.div`
  -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  z-index: 9;
  background-color: var(--pure-white);

  @media (max-width: 992px) {
    background-color: var(--pure-white);
    left: 0;
    right: 0;
    top: calc(100vh - 76px);
    .hamburger {
      display: none !important;
    }
  }

  @media (max-width: 576px) {
    .search-bar {
      display: none;
    }
    .header-nav {
      ul {
        justify-content: space-between !important;
      }
    }
  }
  .search-bar {
    background-color: rgba(100, 117, 137, 0.05);
    .search-form {
      margin-bottom: 0;
      input {
        border: none;
        background: transparent;
        padding: 10px 16px;
        &:focus {
          outline: none;
        }
      }
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
        svg {
          font-size: 23px;
        }
        .bell {
          animation: bell 1.5s ease infinite;
        }
        @keyframes bell {
          0% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
          10% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
          }
          20% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
          }
          30% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
          }
          50% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
          }
          70% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
          }
          90% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
          }
          40% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
          }
          60% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
          }
          80% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
          }
          100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
        }
        .notification-badge {
          position: absolute;
          top: -1px;
          right: 5px;
          font-size: 11px;
          padding: 2px 6px 0;
          background-color: #f13439;
          border-radius: 9px;
          font-family: Roboto, sans-serif;
          font-weight: 500;
          color: var(--pure-white);
          display: inline-block;
          text-transform: capitalize;
        }
      }
      .profile-avatar {
        .profile-dropdown {
          right: 15px;
          background-color: var(--pure-white);
          top: 70px;
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
  }
`;

export default TopNav;

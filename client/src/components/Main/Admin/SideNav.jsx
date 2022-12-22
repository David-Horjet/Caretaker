import React from "react";
import styled from "styled-components";
import { SiHomeadvisor } from "react-icons/si";
import { MdOutlineDashboard } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { BsList, BsPeople } from "react-icons/bs";
import { CgChevronDoubleRight } from "react-icons/cg";
import { NavLink, Link } from "react-router-dom";

function SideNav() {
  const handleProperty = () => {};
  return (
    <>
      <Container className="sidenav p-3">
        <div id="mainsidebar">
          <Link to="/" className="logo d-flex align-items-center">
            <SiHomeadvisor />
            <span className="d-lg-block">CareTaker</span>
          </Link>
          <div className="col-md-4 toggle-btn d-flex align-items-center justify-content-between">
            <BsList />
          </div>
          <ul className="sidebar-menu custom-scrollbar">
            <li className="sidebar-item">
              <NavLink to="/admin/dashboard" className="sidebar-link only-link">
                <MdOutlineDashboard />
                <span>Dashboard</span>
                <div className="according-menu">
                  <i className="fa fa-angle-right"></i>
                </div>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="/admin/property/new" className="sidebar-link">
                <BiBuildingHouse />
                <span>Add Property</span> 
                <div className="according-menu">
                  <i className="fa fa-angle-right"></i>
                </div>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="/admin/property/all" className="sidebar-link">
                <BsPeople />
                <span>Property Lists</span>
                <div className="according-menu">
                  <i className="fa fa-angle-right"></i>
                </div>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="/admin/tenants" className="sidebar-link">
                <BsPeople />
                <span>Tenants</span>
                <div className="according-menu">
                  <i className="fa fa-angle-right"></i>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  flex: 0 0 auto;
  width: 18%;
  padding: 0;
  /* position: fixed; */
  border-bottom: none;
  top: 0;
  z-index: 9;
  height: 100vh;
  line-height: inherit;
  background: #ffffff;
  text-align: left;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  margin-left: 0;

  @media (max-width: 992px) {
    flex: 0 0 auto;
    width: 100%;
    height: 70px;
    #mainsidebar {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .toggle-btn {
        width: auto;
        display: block !important;
      }
      .sidebar-menu {
        display: none;
      }
    }
  }

  .logo {
    padding-left: 10px;
    svg {
      font-size: 20px;
      font-weight: 700;
      color: var(--theme-color);
    }
    span {
      font-size: 20px;
      font-weight: 700;
      color: var(--faded-black);
      padding-left: 8px;
      text-transform: uppercase;
    }
  }
  .toggle-btn {
    display: none !important;
    svg {
      font-size: 25px;
      cursor: pointer;
    }
  }
  .sidebar-menu {
    border-radius: 0;
    height: calc(100vh - 120px);
    padding: 0 10px;
    margin-bottom: 0;
    z-index: 99;
    overflow: auto;
    margin-top: 40px;
    &::-webkit-scrollbar {
      width: 5px;
      background-color: #ffffff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c1c1c1;
    }
    li {
      display: block;
      width: 100%;
      padding: 0;
      margin-bottom: 5px;
      font-weight: 500;
      font-size: 15px;
      .sidebar-offlink {
        position: relative;
        color: #586167;
        padding: 12px 20px;
        display: block;
        border-radius: 0 20px 20px 0;
        text-decoration: unset;
        font-weight: 500;
        border-left: 5px solid transparent;
        text-decoration: unset;
        letter-spacing: 0.4px;
        transition: 0.5s;
        svg {
          margin-right: 10px;
          font-size: 18px;
        }
      }
      a {
        position: relative;
        color: #586167;
        padding: 12px 20px;
        display: block;
        border-radius: 0 20px 20px 0;
        text-decoration: unset;
        font-weight: 500;
        border-left: 5px solid transparent;
        text-decoration: unset;
        letter-spacing: 0.4px;
        transition: 0.5s;
        &:hover {
          color: var(--theme-color);
          border-left: 5px solid var(--theme-color);
          -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;
          position: relative;
          background-color: #fef6f7;
        }
        svg {
          margin-right: 10px;
          font-size: 18px;
        }
        span {
          vertical-align: middle;
        }
      }
      a.active {
        color: var(--theme-color);
        border-left: 5px solid var(--theme-color);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        position: relative;
        background-color: #fef6f7;
      }
    }
  }

  @media (max-width: 992px) {
    .sidebar-menu ul {
      padding-left: 0;
    }
  }
`;

export default SideNav;

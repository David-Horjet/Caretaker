import React, { useContext } from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import SkeletonLoader from "../../Loaders/SkeletonLoader";
import { Context } from "../../../context/Context";
import Tenant from "../User/Tenant";

function TenantsContainer({ tenants, isLoading }) {
  console.log(tenants)
  const { user } = useContext(Context);
  const newTenantsArray = tenants.filter(function (e) {
    return e.property?.caretaker === user?._id;
  });
  console.log(newTenantsArray);
  return (
    <Container className="col-lg-3 bg-light">
      <div className="container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-header-left">
                <h3>
                  Tenants List
                  <small>Welcome to admin panel</small>
                </h3>
              </div>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb pull-right">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <FaHome />
                  </a>
                </li>
                <li className="breadcrumb-item active">My Tenants lists</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="property-lists mt-4 row">
          {isLoading ? (
            <div className="row">
              <SkeletonLoader />
            </div>
          ) : (
            <div className="row">
              {newTenantsArray.map((data) => {
                return (
                  <Tenant data={data} isLoading={isLoading} key={data._id} />
                );
              })}
            </div>
          )}
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
  @media (max-width: 992px) {
    flex: 0 0 auto;
    width: 100%;
    margin-top: 0;
    margin-bottom: 76px;
    .card .card-body .light-box {
      justify-content: center;
    }
  }
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
`;

export default TenantsContainer;

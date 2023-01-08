import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import DashProp from "../../Widgets/DashProp";
import DashInvoice from "../../Widgets/DashInvoice";
function DashboardContainer({totalProperties, loadingProperties, tenants, isLoading}) {
  return (
    <Container className="bg-light col-lg-3">
      <div className="container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-header-left">
                <h3>
                  Dashboard
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
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row gx-3">
          <div className="col-lg-6 col-md-6">
            <DashProp totalProperties={totalProperties} loadingProperties={loadingProperties} tenants={tenants} isLoading={isLoading}/>
          </div>
          <div className="col-lg-6 col-md-6">
            <DashInvoice/>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <DashChart/>
          </div>
        </div>
      </div> */}
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

  }}
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

export default DashboardContainer;

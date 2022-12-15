import React from "react";
import styled from "styled-components";

function DashChart() {
  return (
    <Container className="card">
      <div className="monthly-sales">
        <div className="icon-box">
          <i className="fas fa-chevron-left light-font"></i>
        </div>
        <h6>Monthly Chart As of Today</h6>
        <div className="icon-box">
          <i className="fas fa-chevron-right light-font"></i>
        </div>
      </div>
      <div className="bar-sales">
        <div id="sale-chart">
          <div
            id="apexcharts9bzft8ih"
            className="apexcharts-canvas apexcharts9bzft8ih light"
          >
            <div className="apexcharts-legend"></div>
            <div className="apexcharts-tooltip light">
              <div
                className="apexcharts-tooltip-title"
              ></div>
              <div className="apexcharts-tooltip-series-group">
                <span
                  className="apexcharts-tooltip-marker"
                ></span>
                <div
                  className="apexcharts-tooltip-text"
                >
                  <div className="apexcharts-tooltip-y-group">
                    <span className="apexcharts-tooltip-text-label"></span>
                    <span className="apexcharts-tooltip-text-value"></span>
                  </div>
                  <div className="apexcharts-tooltip-z-group">
                    <span className="apexcharts-tooltip-text-z-label"></span>
                    <span className="apexcharts-tooltip-text-z-value"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resize-triggers">
          <div className="expand-trigger">
            <div></div>
          </div>
          <div className="contract-trigger"></div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  border: none;
  -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  border-radius: 8px;
  margin-bottom: 30px;
  .card-header {
    border-bottom: none;
    padding: 30px;
    background-color: transparent;
    h5 {
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
    }
  }
  .card-body {
    padding: 30px;
    .media {
      img {
        width: 12%;
      }
      .media-body {
        margin-left: 20px;
        h4 {
          font-weight: 500;
          line-height: 1.2;
        }
        h6 {
          font-weight: 400;
          color: rgba(88, 97, 103, 0.7);
        }
      }
      .arrow-animated {
        margin-left: auto;
        color: var(--theme-color);
        svg {
          width: 16px;
          height: 16px;
          vertical-align: middle;
          -webkit-animation: Arrowanimation 3s ease-in-out infinite;
          animation: Arrowanimation 3s ease-in-out infinite;
        }
      }
      @keyframes Arrowanimation {
        0% {
          -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
          -webkit-transition: 0.8s;
          transition: 0.8s;
        }
        75% {
          -webkit-transform: translate(5px, 0);
          transform: translate(5px, 0);
          -webkit-transition: 0.8s;
          transition: 0.8s;
        }
        100% {
          -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
          -webkit-transition: 0.8s;
          transition: 0.8s;
        }
      }
    }
    .light-box {
      border-radius: 5px;
      padding: 20px;
      position: relative;
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #878787;
        opacity: 0.05;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 5px;
      }
      li {
        width: 100%;
        display: flex;
        svg {
          font-size: 1.45rem;
          margin-right: 5px;
        }
        h5 {
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 1.2;
          margin: 0;
        }
        .light-font {
          font-size: 14px;
          color: rgba(88, 97, 103, 0.7);
        }
      }
      li + li {
        border-left: 1px solid #dee2e6;
        padding-left: 20px;
      }
    }
  }
  .calculations {
    li {
      width: 100%;
      text-align: center;
      .font-success {
        color: #89c826 !important;
      }
      .light-font {
        color: rgba(88, 97, 103, 0.7);
      }
      .font-danger {
        color: #f13439;
      }
    }
    li + li {
      padding-left: 20px;
      margin-left: 10px;
      border-left: 1px solid #dee2e6;
    }
  }
  .label {
    border-radius: 5px;
    padding: 4px 15px 3px;
    font-family: Roboto, sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: var(--theme-color);
    display: inline-block;
    text-transform: capitalize;
    svg {
      margin-right: 5px;
    }
  }
  .arrow-animated {
    margin-left: auto;
    color: var(--theme-color);
    svg {
      width: 16px;
      height: 16px;
      vertical-align: middle;
      -webkit-animation: Arrowanimation 3s ease-in-out infinite;
      animation: Arrowanimation 3s ease-in-out infinite;
    }
  }
  @keyframes Arrowanimation {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
      -webkit-transition: 0.8s;
      transition: 0.8s;
    }
    75% {
      -webkit-transform: translate(5px, 0);
      transform: translate(5px, 0);
      -webkit-transition: 0.8s;
      transition: 0.8s;
    }
    100% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
      -webkit-transition: 0.8s;
      transition: 0.8s;
    }
  }
`;

export default DashChart;

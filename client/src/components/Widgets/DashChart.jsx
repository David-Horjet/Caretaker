import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";

function DashChart() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  let today = new Date();
  let date =
    today.toLocaleString("default", { month: "short" }) +
    " " +
    today.getDate() +
    "," +
    " " +
    today.getFullYear();

  return (
    <Container className="card">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div className="card-left">
          <h6>Sales summary</h6>
          <div className="status-price mt-4">
            <h3>$16,230/-</h3>
            <span>
              last week
              <span className="font-success">
                + 10%
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-trending-up"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </span>
            </span>
          </div>
          <div className="my-4">
            <ul className="p-0">
              <li>
                <div className="circle-label"></div>
                <span>Last week</span>
              </li>
              <li className="mt-1">
                <div className="circle-label"></div>
                <span>Running week</span>
              </li>
            </ul>
          </div>
          <div className="p-3 light-box">
            <span className="mb-2">Last updated</span>
            <h5>{date}</h5>
          </div>
        </div>
        <div className="card-middle">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="amt"
              isAnimationActive={true}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#ff5c41"
              label
            />
            <Pie
              dataKey="amt"
              data={data}
              cx={500}
              cy={200}
              innerRadius={40}
              outerRadius={80}
              fill="#ff5c41"
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="card-right">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="#ff5c41" background={{ fill: "#eee" }} />
          </BarChart>
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
  background-color: var(--pure-white);
  .card-body {
    padding: 30px;
    .card-left {
      border-bottom: none;
      background-color: transparent;
      h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.2;
      }
      .circle-label {
        width: 10px;
        height: 10px;
        border-radius: 25px;
        display: inline-block;
        margin-right: 10px;
        background-color: var(--theme-color);
      }
      .light-box {
        background-color: var(--faded-white);
        border-radius: 10px;
      }
      span {
        color: rgba(88, 97, 103, 0.7);
        font-size: 14px;
        .font-success {
          color: #89c826 !important;
        }
      }
    }
  }
`;

export default DashChart;

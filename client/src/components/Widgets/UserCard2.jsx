import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../../context/Context";

function UserCard2() {
  const {user} = useContext(Context)
  return (
    <Container className="sidebar-user sticky-cls">
      <div className="page-header d-flex justify-content-between align-items-center">
        <h3>About</h3>
        <Link className="rounded" to={`/edit/${user._id}`}>Edit</Link>
      </div>
      <div className="user-profile">
        <ul className="d-flex mb-0 p-0 gap-3">
          <li>
            <span>First name :</span> {user.firstName}
          </li>
          <li>
            <span>Last name :</span> {user.lastName}
          </li>
          <li>
            <span>Email :</span> {user.email}
          </li>
          <li>
            <span>Gender :</span> {user.gender}
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

  .page-header {
    padding: 30px;
    h3 {
      text-transform: capitalize;
      margin-bottom: 0;
      font-weight: 600;
    }
    a {
      color: var(--theme-color);
      padding: 5px 20px;
      background-color: var(--faded-color);
    }
  }
  .user-profile {
    padding: 0 30px 30px 30px;
    ul {
        flex-direction: column;
        li {
            display: block;
            line-height: 2;
            font-weight: 500;
            color: rgba(88, 97, 103, 0.85);
            span {
                font-weight: 600;
                min-width: 140px;
                display: inline-block;
                color: #586167;
            }
        }
    }
  }
`;

export default UserCard2;

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import AgentsContainer from "../../components/Main/User/AgentsContainer";
import AgentsHero from "../../components/Main/User/AgentsHero";
import Footer from "../../components/Main/User/Footer";
import Header from "../../components/Main/User/Header";
import toastOptions from "../../components/Toast/ToastOptions";
import { usersRoute } from "../../utils/APIRoutes";
import { Axios } from "../../utils/Axios";

function Agents() {

  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  useEffect(() => {
    document.title = "Agents Lists - CareTaker";
  });

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await Axios.get(usersRoute);
        console.log(response);
        if (response.data.status === true) {
          setUsers(response.data.data);
          setIsUsersLoading(false);
        }
      } catch (error) {
        console.log(error);
        if (error && error.message === "Network Error") {
          toast.error(
            "Seems you're offline, please connect to a stable network",
            toastOptions
          );
        }
      }
    }
    // return () => {
    //   getUsers();
    // };
    getUsers();
  }, []);
  return (
    <>
      <Container className="wrapper">
        <Header/>
        <AgentsHero/>
        <AgentsContainer users={users} isUsersLoading={isUsersLoading}/>
        <Footer/>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div``;

export default Agents;

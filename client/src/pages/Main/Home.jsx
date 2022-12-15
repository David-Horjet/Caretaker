import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import Agents from "../../components/Main/User/Agents";
import Featured from "../../components/Main/User/Featured";
import Footer from "../../components/Main/User/Footer";
import Header from "../../components/Main/User/Header";
import Hero from "../../components/Main/User/Hero";
import Offer from "../../components/Main/User/Offer";
import OnRent from "../../components/Main/User/OnRent";
import OnSale from "../../components/Main/User/OnSale";
import { Context } from "../../context/Context";
import { allPropertyRoute, usersRoute } from "../../utils/APIRoutes";
import { authAxios } from "../../utils/Axios";
import { toastOptions } from "../../utils/Toast";

function Home() {
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  useEffect(() => {
    document.title = "CareTaker - Elegant Retreat In Quiet Coral Gables";
  });

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await authAxios.get(allPropertyRoute);
        if (response.data.status === true) {
          setProperties(response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (error && error.message === "Network Error") {
          toast.error(
            "Seems you're offline, please connect to a stable network",
            toastOptions
          );
        }
      }
    }
    return () => {
      fetchProperties();
    };
  }, []);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await authAxios.get(usersRoute);
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
    return () => {
      getUsers();
    };
  }, []);

  return (
    <>
      <Container className="wrapper">
        <Header handleLogout={handleLogout} user={user} />
        <Hero />
        <OnSale properties={properties} isLoading={isLoading} />
        <Featured />
        <OnRent properties={properties} isLoading={isLoading} />
        <Offer />
        <Agents users={users} isUsersLoading={isUsersLoading} />
        <Footer />
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div``;

export default Home;

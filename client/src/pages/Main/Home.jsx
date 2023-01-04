import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import Agents from "../../components/Main/User/Agents";
// import Featured from "../../components/Main/User/Featured";
import Footer from "../../components/Main/User/Footer";
import Header from "../../components/Main/User/Header";
import Hero from "../../components/Main/User/Hero";
import Offer from "../../components/Main/User/Offer";
import OnRent from "../../components/Main/User/OnRent";
// import Trusted from "../../components/Main/User/Trusted";
import { Context } from "../../context/Context";
import { allPropertyRoute, usersRoute } from "../../utils/APIRoutes";
import { Axios } from "../../utils/Axios";
import { toastOptions } from "../../utils/Toast";

function Home() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/admin/login");
  };

  useEffect(() => {
    document.title = "CareTaker - Elegant Retreat In Quiet Coral Gables";
  });

  useEffect(() => {
    console.log('step one')
    async function fetchProperties() {
      console.log('step two')
      try {
        
        const response = await Axios.get(allPropertyRoute);
        console.log('step three',response)
        // console.log(response);
        if (response.data.status === true) {
          setProperties(response.data.data);
          setIsLoading(false);
          console.log('step four')
        }
        
      } catch (error) {
        if (error && error.message === "Network Error") {
          toast.error(
            "Seems you're offline, please connect to a stable network",
            toastOptions
          );
          

        }
        setIsLoading(false);
        console.log("failed",error)
      }
    }
    // return () => {
    //   fetchProperties();
    // };
    fetchProperties();
  }, []);

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
    return () => {
      getUsers();
    };
  }, []);

  return (
    <>
      <Container className="wrapper">
        <Header handleLogout={handleLogout} user={user} />
        <Hero />
        {/* <Trusted /> */}
        {/* <Featured /> */}
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

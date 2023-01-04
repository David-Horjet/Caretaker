import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Header from "../../components/Main/User/Header";
import ProfileContainer from "../../components/Main/User/ProfileContainer";
import ProfileHero from "../../components/Main/User/ProfileHero";
import { userRoute } from "../../utils/APIRoutes";
import { authAxios } from "../../utils/Axios";
import { toastOptions } from "../../utils/Toast";

function Profile() {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    document.title = "Profile - CareTaker";
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await authAxios.get(userRoute);
        console.log(response);
        if (response.data.status === true) {
          setUser(response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        if (error && error.message === "Network Error") {
          toast.error(
            "Seems you're offline, please connect to a stable network",
            toastOptions
          );
        }toast.error(
          "Internal Server Error",
          toastOptions
        );
      }
    }
    // return () => {
    //   fetchUser();
    // };
    fetchUser();
  }, []);
  return (
    <>
      <Container className="wrapper">
        <Header/>
        <ProfileHero/>
        <ProfileContainer user={user} isLoading={isLoading}/>
      </Container>
    </>
  );
}

const Container = styled.div``;

export default Profile;

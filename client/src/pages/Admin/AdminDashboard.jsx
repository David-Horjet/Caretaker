import React, { useState, useEffect, useContext } from 'react'
import styled from "styled-components";
import DashboardContainer from '../../components/Main/Admin/DashboardContainer';
import SideNav from '../../components/Main/Admin/SideNav';
import TopNav from '../../components/Main/Admin/TopNav';
import { Context } from '../../context/Context';
import { allPropertyRoute, getTenantsRoute } from '../../utils/APIRoutes';
import { useLocation } from 'react-router-dom';
import { Axios } from '../../utils/Axios';
import { authAxios } from '../../utils/Axios';
import { ToastContainer, toast } from 'react-toastify';
import { toastOptions } from '../../utils/Toast';

function AdminDashboard({ FullScreen, handleFullScreen, reportChange }) {
  const [totalProperties, setTotalProperties] = useState("NaN");
  const [loadingProperties, setLoadingProperties] = useState(false);
  const [tenants, setTenants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const id = location.pathname.split("/")[3];

  const { user } = useContext(Context);

  useEffect(() => {
    async function fetchPropertiesLength() {
      const response = await authAxios.get(allPropertyRoute);
      console.log(response);
      if (response.data.status === true) {
        setLoadingProperties(true)
        const newPropertiesArray = response.data.data.filter(function (e) {
          return e.caretaker?._id === user?._id;
        });
        setTotalProperties(newPropertiesArray.length);
      }
    }
    fetchPropertiesLength()
  }, [user])

  useEffect(() => {
    async function fetchTenants() {
      try {
        const response = await Axios.get(`${getTenantsRoute}`);
        // console.log(response);
        if (response.data.status === false) {
          setTenants(response.data.message);
          setIsLoading(false);
        }
        if (response.data.status === true) {
          setTenants(response.data.data);
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
    fetchTenants();
  }, [id]);

  useEffect(() => {
    document.title = "Admin Dashboard - CareTaker";
  });


  return (
    <>
      <FullScreen handle={handleFullScreen} onChange={reportChange}>
        <Container>
          <TopNav handleFullScreen={handleFullScreen} />
          <main className='main row'>
            <SideNav />
            <DashboardContainer totalProperties={totalProperties} loadingProperties={loadingProperties} tenants={tenants} isLoading={isLoading} />
          </main>
        </Container>
      </FullScreen>
      <ToastContainer />
    </>
  )
}

const Container = styled.div`
overflow: hidden;
main {
}
`;

export default AdminDashboard
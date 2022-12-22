import React, { useEffect, useState } from 'react'
import { FullScreen } from 'react-full-screen';
import { ToastContainer, toast } from 'react-toastify';
import TopNav from '../../components/Main/Admin/TopNav';
import SideNav from '../../components/Main/Admin/SideNav';
import { useLocation } from 'react-router-dom';
import { Axios } from '../../utils/Axios';
import styled from 'styled-components';
import { toastOptions } from '../../utils/Toast';
import TenantsContainer from '../../components/Main/Admin/TenantsContainer';
import { getTenantsRoute } from '../../utils/APIRoutes';

function Tenants({handleFullScreen, reportChange}) {
    const location = useLocation();
  const [tenants, setTenants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const id = location.pathname.split("/")[3];

  useEffect(() => {
    document.title = "Property Lists- CareTaker Admin";
  });

  useEffect(() => {
    async function fetchProperty() {
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
    return () => {
      fetchProperty();
    };
  }, [id]);
  return (
    <>
      <FullScreen handle={handleFullScreen} onChange={reportChange}>
        <Container>
          <TopNav handleFullScreen={handleFullScreen} />
          <main className="main row">
            <SideNav />
            <TenantsContainer tenants={tenants} isLoading={isLoading}/>
          </main>
        </Container>
        <ToastContainer />
      </FullScreen>
    </>
  )
}

const Container = styled.div`
  overflow: hidden;
  main {
  }
`;

export default Tenants
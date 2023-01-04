import React, {useState, useEffect } from 'react'
import styled from "styled-components";
import DashboardContainer from '../../components/Main/Admin/DashboardContainer';
import SideNav from '../../components/Main/Admin/SideNav';
import TopNav from '../../components/Main/Admin/TopNav';
import { allPropertyRoute } from '../../utils/APIRoutes';
import { authAxios } from '../../utils/Axios';

function AdminDashboard({FullScreen, handleFullScreen, reportChange}) {
  const [totalProperties, setTotalProperties] = useState("NaN");
  const [loadingProperties, setLoadingProperties] = useState(false);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await authAxios.get(allPropertyRoute);
      console.log(response);
      if (response.data.status === true) {
        setLoadingProperties(true)
        setTotalProperties(response.data.data.length);
      }
    }
  
    // return () => {
    //   fetchEmployees()
    // }
    fetchEmployees()
  }, [])

  useEffect(() => {
    document.title = "Admin Dashboard - CareTaker";
  });


  return (
    <FullScreen handle={handleFullScreen} onChange={reportChange}>
      <Container>
      <TopNav handleFullScreen={handleFullScreen}/>
      <main className='main row'>
        <SideNav/>
        <DashboardContainer totalProperties={totalProperties} loadingProperties={loadingProperties}/>
      </main>
    </Container>
    </FullScreen>
  )
}

const Container = styled.div`
overflow: hidden;
main {
}
`;

export default AdminDashboard
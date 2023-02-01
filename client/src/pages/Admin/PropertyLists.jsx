import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideNav from "../../components/Main/Admin/SideNav";
import TopNav from "../../components/Main/Admin/TopNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropertyListsContainer from "../../components/Main/Admin/PropertyListsContainer";
import { authAxios } from "../../utils/Axios";
import { allPropertyRoute } from "../../utils/APIRoutes";
// import { PropertiesData } from "../../components/DummyDatas/Properties";

function PropertyLists({ FullScreen, handleFullScreen, reportChange }) {

  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("")
  // const [filteredList, setFilteredList] = useState(properties);

  console.log(properties);

  const filterBySearch = (event) => {
    // Access input value
    setSearchText(event.target.value);
    // Create copy of item list
    var updatedList = [...properties];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setProperties(updatedList);
  };

  useEffect(() => {
    async function fetchProperties() {
      const response = await authAxios.get(allPropertyRoute);
      // console.log(response);
      if (response.data.status === true) {
        setIsLoading(false)
        setProperties(response.data.data)
      }
    }
    fetchProperties()
  }, [])


  useEffect(() => {
    document.title = "Property Lists- CareTaker Admin";
  });

  return (
    <>
      <FullScreen handle={handleFullScreen} onChange={reportChange}>
        <Container>
          <TopNav handleFullScreen={handleFullScreen} filterBySearch={filterBySearch} />
          <main className="main row">
            <SideNav />
            <PropertyListsContainer properties={properties} isLoading={isLoading} />
          </main>
        </Container>
        <ToastContainer />
      </FullScreen>
    </>
  );
}

const Container = styled.div`
overflow: hidden;
  main {
  }
`;

export default PropertyLists;

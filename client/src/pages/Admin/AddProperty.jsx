import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import AddPropertyContainer from "../../components/Main/Admin/AddPropertyContainer";
import SideNav from "../../components/Main/Admin/SideNav";
import TopNav from "../../components/Main/Admin/TopNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addPropertyRoute, uploadRoute } from "../../utils/APIRoutes";
import RoundLoader from "../../components/Loaders/RoundLoader";
import toastOptions from "../../components/Toast/ToastOptions";
import { authAxiosFile, authAxios } from "../../utils/Axios";
import { useNavigate } from "react-router-dom";

function AddProperty({ FullScreen, handleFullScreen, reportChange }) {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    title: "",
    type: "Apartment",
    status: "Rent",
    price: 0,
    room: 1,
    bed: 1,
    country: "",
    city: "",
    address: "",
    description: "",
  });
  const [isFetching, setIsFetching] = useState(false);
  
  const [image, setImage] = useState({ preview: "", data: "" });
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  useEffect(() => {
    document.title = "Add Property - CareTaker Admin";
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (handleValidation()) {
        setIsFetching(true)
        if(image) {
          let formData = new FormData();
          const fileName = Date.now() + image.data.name
          // console.log(fileName)
          formData.append("imageName", fileName);
          formData.append("image", image.data);
          values.image = fileName;
          try {
            await authAxiosFile.post(uploadRoute, formData);
          } catch (error) {
            toast.error("Image upload failed", toastOptions);
          }
        }           
        const response = await authAxios.post(addPropertyRoute, values);
        if (response.data.status === false) {
          toast.error(response.data.message, toastOptions);
          setIsFetching(false)
        }
        if (response.data.status === true) {
          toast.success(response.data.message, toastOptions);
          setTimeout(() => {
            navigate("/admin/dashboard")
          }, 3000);
          setIsFetching(false)
        }
      }
    } catch (error) {
      toast.error("Internal server error occured", toastOptions);
      setIsFetching(false)
    }
  };

  const handleValidation = () => {
    const { title, type, status, price, room, bed, country, city, address, description } =
      values;
    if (title === "") {
      toast.error("Title is required", toastOptions);
      
      return false;
    } else if (type === "") {
      toast.error("Last name is required", toastOptions);
      
      return false;
    } else if (status === "") {
      toast.error("Status is required", toastOptions);
      
      return false;
    } else if (price === "") {
      toast.error("Price is required", toastOptions);
      
      return false;
    } else if (room === "") {
      toast.error("Room is required", toastOptions);
      
      return false;
    } else if (bed === "") {
      toast.error("Bed is required", toastOptions);
      
      return false;
    } else if (country === "") {
      toast.error("Country is required", toastOptions);
      
      return false;
    } else if (city === "") {
      toast.error("City is required", toastOptions);
      
      return false;
    } else if (address === "") {
      toast.error("Addresponses is required", toastOptions);
      
      return false;
    } else if (description === "") {
      toast.error("Description is required", toastOptions);
      
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <FullScreen handle={handleFullScreen} onChange={reportChange}>
        <Container className="bg-light">
          <TopNav handleFullScreen={handleFullScreen} />
          <main className="main row">
            <SideNav />
            <AddPropertyContainer
              handleChange={handleChange}
              handleClick={handleClick}
              handleFileChange={handleFileChange}
              handleSubmit={handleSubmit}
              isFetching={isFetching}
              RoundLoader={RoundLoader}
              image={image}
              inputRef={inputRef}
            />
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

export default AddProperty;

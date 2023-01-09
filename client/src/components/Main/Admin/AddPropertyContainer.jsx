import React from "react";
import styled from "styled-components";
import { FaHome, FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function AddPropertyContainer({
  handleChange,
  handleFileChange,
  handleClick,
  handleSubmit,
  isFetching,
  RoundLoader,
  inputRef, 
  image
}) {

  return (
    <Container className="col-lg-3">
      <div className="container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-header-left">
                <h3>
                  Add Property
                  <small>Welcome to admin panel</small>
                </h3>
              </div>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb pull-right">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <FaHome />
                  </a>
                </li>
                <li className="breadcrumb-item active">My properties</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="h-100 log-in">
          <div className="form-login">
            <div className="card rounded shadow p-3">
              <div className="card-body">
                <div className="title-3 mb-4 text-left">
                  <h5>Add property details</h5>
                </div>
                <form
                  className="row gx-3"
                  onSubmit={(event) => handleSubmit(event)}
                  autoComplete="off"
                >
                  <div className="form-group col-lg-4">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control shadow-none"
                      placeholder="Merrick in Spring Way"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group col-lg-4 select-group justify-content-between">
                    <label>Property Type</label>
                    <select name="type" onChange={(e) => handleChange(e)}>
                      <option value="Apartment">Apartment</option>
                      <option value="Office">Office</option>
                      <option value="Villa">Villa</option>
                      <option value="Duplex">Duplex</option>
                      <option value="Shop">Shop</option>
                      <option value="Land">Land</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4 select-group justify-content-between">
                    <label>Property Status</label>
                    <select name="status" onChange={(e) => handleChange(e)}>
                      <option value="Rent">Rent</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4">
                    <label>Property Price</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control shadow-none"
                      placeholder="Amount in Naira(₦)"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group col-lg-4 select-group justify-content-between">
                    <label>Max Rooms</label>
                    <select name="room" onChange={(e) => handleChange(e)}>
                      <option value={1} >1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4 select-group justify-content-between">
                    <label>Beds</label>
                    <select name="bed" onChange={(e) => handleChange(e)}>
                      <option value={1} >1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-12">
                    <label>Description</label>
                    <textarea
                      type="text"
                      name="description"
                      className="form-control shadow-none"
                      placeholder="Office,Villa,Apartment"
                      onChange={(e) => handleChange(e)}
                      cols="20"
                      rows="10"
                      resize="vertical"
                    ></textarea>
                  </div>
                  <div className="form-group col-lg-4">
                    <label>Country</label>
                    <input
                      type="text"
                      name="country"
                      className="form-control shadow-none"
                      placeholder="Nigeria"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group col-lg-4">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control shadow-none"
                      placeholder="Akure"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group col-lg-4">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control shadow-none"
                      placeholder="Address of your property"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <label>Image (*JPEG*, *PNG*, *JPG*)</label>
                    {image.preview ? (
                      <div
                        onClick={handleClick}
                        className="preview d-flex"
                      >
                        <img
                          src={image.preview}
                          className="w-100"
                          alt="property-img"
                        />
                      </div>)
                      : (<div className="dropzone"
                        onClick={handleClick}>
                        <div className="icon"><i><FaCloudUploadAlt /></i></div>
                        <h6>Drag & Drop file here or click to upload</h6>
                        <input
                          style={{ display: "none" }}
                          ref={inputRef}
                          type="file"
                          name="image"
                          onChange={handleFileChange}
                          className="form-control shadow-none"
                          accept="image/*"
                        />
                      </div>)}
                  </div>
                  <div className="auth d-flex justify-content-between">
                    {!isFetching ? (
                      <button
                        type="submit"
                        className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-gradient btn-pill color-2 me-sm-3 me-2"
                      >
                        <RoundLoader />
                      </button>
                    )}
                    <Link
                      to="/"
                      className="btn btn-dashed btn-pill color-2"
                    >
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  flex: 0 0 auto;
  width: 82%;
  margin-top: 76px;
  right: 0;
  left: auto;
  height: calc(100vh - 77px);
  overflow: auto;
  @media (max-width: 992px) {
    flex: 0 0 auto;
    width: 100%;
    margin-top: 0;
    margin-bottom: 76px;
  }
  .page-header {
    padding: 30px 0;
    h3 {
      text-transform: capitalize;
      margin-bottom: 0;
      font-weight: 600;
      small {
        font-size: 13px;
        letter-spacing: 1px;
        display: block;
        margin-top: 6px;
        color: #959595;
        font-weight: normal;
        overflow: hidden;
      }
    }
    .breadcrumb {
      float: right;
      background-color: transparent;
      padding: 0;
      margin: 0;
      li {
        font-size: 14px;
        a {
          color: var(--theme-color);
          padding: 5px;
          padding: 4px 5px 3px;
          position: relative;
          background-color: #fef6f7;
        }
      }
    }
    .breadcrumb-item {
      overflow: hidden;
      a {
        background-color: #fef6f7;
        border-radius: 50%;
        svg {
          line-height: 5px;
        }
      }
    }
    .breadcrumb-item.active {
      color: #1c2d3a;
    }
  }
  .card {
    border: none;
    -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
    box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
    border-radius: 8px;
    margin-bottom: 30px;
    h5 {
      font-weight: 600;
    }
    .form-group {
      margin-bottom: 16px;
      label {
        color: #586167;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 5px;
      }
      .dropzone {
    margin-right: auto;
    margin-left: auto;
    padding: 30px;
    border: 2px dashed #eee;
    border-radius: 15px;
    -o-border-image: none;
    border-image: none;
    background: rgba(149, 149, 149, 0.05);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-height: 150px;
    position: relative;
    cursor: pointer;
    text-align: center;
    i {
    font-size: 50px;
    color: #eee;
} 
.preview img {
height: 70px !important;
}
h6 {
  color: #959595;
    font-weight: 400;
}
}
      .form-control {
        border-color: #dee2e6;
        padding: 9px 20px 6px;
        text-transform: inherit;
        color: rgba(34, 54, 69, 0.7);
      }

      .important-note {
        color: rgba(88, 97, 103, 0.4);
        padding-left: 35px;
        margin-top: 5px;
        font-size: 14px;
      }
    }
    .select-group {
      display: flex;
      flex-direction: column;
      select,
      option {
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        appearance: none;
        border-radius: 0.375rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        &:focus-visible {
          outline: none;
        }
      }
    }
    .options {
      font-size: 14px;
      .checkbox_animated {
        cursor: pointer;
        position: relative;
        margin: 0 5px 0 0;
        &:focus {
          color: var(--pure-white);
          background-color: var(--theme-default3);
        }
      }
      a {
        color: rgba(88, 97, 103, 0.7);
      }
    }
    .auth {
      button {
        background-image: var(--theme-gradient1);
        border-radius: 30px;
        color: #ffffff;
        background-size: 200% auto;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        border: 2px solid transparent;
        padding: 9px 30px;
        font-size: 15px;
        &:hover {
          background-position: right center;
        }
      }
      a {
        border: 1px dashed #d2d2d2;
        color: #1c2d3a;
        background: transparent;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        position: relative;
        padding: 9px 30px;
        font-size: 15px;
        border-radius: 30px;
        &:hover {
          border: 1px dashed var(--theme-default3);
          color: var(--theme-default3);
        }
      }
    }
  }
`;

export default AddPropertyContainer;

import React, { useCallback, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { Context } from "./context/Context";
import AdminLogin from "./pages/Admin/AdminLogin";
import CareTakerLogin from "./pages/Agent/AgentLogin";
import TenantForm from "./pages/User/TenantForm";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Home from "./pages/Main/Home";
import AddProperty from "./pages/Admin/AddProperty";
import PropertyLists from "./pages/Admin/PropertyLists";
import SingleProperty from "./pages/Admin/SingleProperty";
import Login from "./pages/Main/Login";
import Listings from "./pages/Main/Listings";
import Agents from "./pages/Main/Agents";
import Contact from "./pages/Main/Contact";
import Profile from "./pages/Main/Profile";
import Register from "./pages/Main/Register";
import PageNotFound from "./pages/Main/404";


function App() {
  // const {user} = useContext(Context);

  const user = () => true

  const handleFullScreen = useFullScreenHandle();
  const reportChange = useCallback((state, handle) => {
    if (handle === handleFullScreen) {
      // console.log('Screen 1 went to', state, handle);
    }
  }, [handleFullScreen]);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/listings" element={<Listings/>}/>
            <Route exact path="/agents" element={<Agents/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/:username" element={<Profile/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/admin/dashboard" element={user ? <AdminDashboard handleFullScreen={handleFullScreen} FullScreen={FullScreen} reportChange={reportChange}/> : <AdminLogin/>}/>
            <Route exact path="/admin/property/new" element={<AddProperty handleFullScreen={handleFullScreen} FullScreen={FullScreen} reportChange={reportChange}/>}/>
            <Route exact path="/admin/property/all" element={<PropertyLists handleFullScreen={handleFullScreen} FullScreen={FullScreen} reportChange={reportChange}/>}/>
            <Route exact path="/admin/property/:id" element={<SingleProperty handleFullScreen={handleFullScreen} FullScreen={FullScreen} reportChange={reportChange}/>}/>
            <Route exact path="/admin/login" element={<AdminLogin/>}/>
            <Route exact path="/caretaker/login" element={<CareTakerLogin/>}/>
            <Route exact path="/tenant/new" element={<TenantForm/>}/>
            <Route exact path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

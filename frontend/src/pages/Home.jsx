import React from "react";
import Header from "../components/Header";
import MainSlider from "../components/main/MainSlider";
import About from "../components/About";
import Events from "../components/Events";
import Member from "../components/Member";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { Outlet } from "react-router";


const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  );
};

export default Home;

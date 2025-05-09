import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Events from "../components/Events";
import Member from "../components/Member";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";


const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Events/>
      <Member />
      <Gallery />
      <Footer />

    </>
  );
};

export default Home;

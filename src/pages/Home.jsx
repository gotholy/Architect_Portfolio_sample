import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

import Header from "../components/Header";
import ProjectLorum from "../components/ProjectLorum";
import About from "../components/About";
import MainFocus from "../components/MainFocus";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <ProjectLorum />
      <About />
      <MainFocus />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

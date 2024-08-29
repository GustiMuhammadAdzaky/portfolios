import React, { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import './App.css'
import Services from "./Components/Services/Services";
import Experience from "./Components/Experince/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import { Worker } from "./Components/Worker/Worker";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar/>
      <div id="home">
        <Intro/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="experience">
        <Experience/>
      </div>
      <div id="work">
        <Worker/>
      </div>
      <div id="portfolio">
        <Portfolio/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
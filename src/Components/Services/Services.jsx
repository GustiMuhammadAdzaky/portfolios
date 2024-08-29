import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './webdev.pdf'
import { themeContext } from '../../Context'
import { motion } from "framer-motion"



const Services = () => {

    const cardVariants = {
        offscreen: {
          opacity: 0,
          x: -100,
        },
        onscreen: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
          }
        }
      };

    // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services">
        {/* left */}
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
          <span>Services</span>
          <span style={{ fontSize:"1rem" }}>
           Saya menyediakan berbagai jasa, termasuk desain UI/UX, pembuatan pamflet, konsultasi skripsi,desain Instagram, bantuan publikasi jurnal, serta pengembangan aplikasi web dan mobile.
          </span>
          <a href={Resume} download>
              <button className="button s-button">Download CV</button>
          </a>
          <div className="blur s-blur1" style={{ background:"#ABF1FF94" }}></div>
          <div className="blur s-blur2" style={{ background:"var(--purple)" }}></div>
        </div>
        {/* right side */}
        <div className="cards">
          <div className="card-p" style=
          {{ 
            position:"relative", 
            top: "20rem",
          }}>
            <Card
              emoji={HeartEmoji}
              Headings={"Web Developer"}
              detail={"Laravel, Codeigniter, React, Vue, Php Native"}
            />
          </div>
          <div className="card-p" style=
          {{ 
            position:"relative", 
            top: "10rem",
          }}>
            <Card
              emoji={Humble}
              Headings={"Journal Writer"}
              detail={"Copy Writter, Turnitin Chacker, Good Comunication"}
            />
          </div>
          <div className="card-p" style=
          {{ 
            position:"relative", 
            // top: "10rem",
          }}>
            <Card
              emoji={Glasses}
              Headings={"Design"}
              detail={"Figma, Adobe Ilustator, Canva"}
            />
          </div>
      </div>    
    </div>
  )
}

export default Services
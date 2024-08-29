// 46:05
// https://www.youtube.com/watch?v=CKAn5dCK6RE
import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vektor1 from '../../img/Vector1.png'
import Vektor2 from '../../img/Vector2.png'
import Boy from '../../img/me.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { useContext } from 'react'
import { themeContext } from "../../Context";
// import { motion } from "framer-motion"
import { motion } from "framer-motion"



const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                <span>Zaky</span>
                <span style={{ marginBottom:"5rem" }}>
                  Lulusan S1 Teknik Informatika Universitas Muhammadiyah Pontianak 2023. Pengalaman 2+ tahun pengembangan web dan aplikasi. Fokus pada pengembangan aplikasi web dan mobile. Senang kerja tim dan terus mengembangkan keterampilan.
                </span>
            </div>
            <a 
              href="https://wa.me/089691789422?text=Halo%20Zaky%20(CodeforEvrything)" 
              className="button i-button" 
              style={{ textDecoration: "none", textAlign: "center" }} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
            <div className="i-icons">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
              </a>
            </div>
        </div>
        <div className="i-right">
          <img src={Vektor1} alt="" />
          <img src={Vektor2} alt="" />
          <img src={Boy} width={600} alt="" />
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
          />
          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatingDiv image={Crown} txt1="WEB" txt2="DEVELOPER" />
          </motion.div>


          
          <div style={{ bottom: '10px', right: '500px' }}>
            <FloatingDiv image={thumbup} txt1="2 YEARS" txt2="EXPERIENCE"/>
          </div>
          {/* blur div */}
          <div className="blur" 
            style={{ background: "rgb(238 210 255)" }}></div>
          <div className="blur" 
          style={{ 
            background : "#C1F5FF",
            top: "30rem",
            width: "21rem",
            height: '11rem',
            left:'15rem'

          }}
          ></div>
          
        </div>
    </div>
  )
}

export default Intro
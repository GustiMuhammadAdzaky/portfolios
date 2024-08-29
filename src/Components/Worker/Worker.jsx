import React, { useContext } from 'react'
import './Worker.css'
import TokoPedia from '../../img/tokopedia.png'
import Shopee from '../../img/shopee.png'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
import { motion } from "framer-motion"

export const Worker = () => {

    let url = "https://wa.me/089691789422?text=Hi%20Zaky%20(CodeforEvrything),%20saya%20ingin%20membeli%20produk%20ini";

    function goUrlBtn(){
        window.location.href=url;
    }
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works">

        {/* left side */}

        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Digital</span>
            <span>Products</span>
            <span style={{ fontSize:"1rem" }}>
                Saya Menjual Beberapa Produk Digital, Seperti, Web E-commers, <br />
                Web Optimasi Traveling Saleman Problem dengan Algoritma Genetika<br />
                Web berbasis Erd,dan masih banyak lagi !
            </span>
            <button className="button s-button" onClick={goUrlBtn}>Buy Product</button>
            <div className="blur w-blur1" style={{ background:"#ABF1FF94" }}></div>
            <div className="blur w-blur2" style={{ background:"var(--purple)" }}></div>
            <div className="blur w-blur2" style={{ background:"var(--purple)" }}></div>
        </div>

        {/* Right Side */}
        <div className="w-right">
            <div className="all-circle">
                <motion.div 
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}
                className="w-mainCircle"
                >
                    <div className="w-secCircle">
                        <img className='w-image' src={TokoPedia} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img className='w-image' src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img className='w-image' src={Facebook} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img className='w-image' src={Shopee} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img className='w-image' src={Fiverr} alt="" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCirle"></div>
                <div className="w-backCircle yellowCirlce"></div>
            </div>
        </div>
        
    </div>
  )
}

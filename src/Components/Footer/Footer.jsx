import React from 'react'
import './Footer.css'


import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Tele from '@iconscout/react-unicons/icons/uil-telegram'
import Fb from '@iconscout/react-unicons/icons/uil-github'
import Wafe from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wafe} alt="" />
      <div className="f-content">
        <span>gmadzaky@gmail.com</span>
        <div className="f-icons">
          <Insta color='white' size='3rem'/>
          <Tele color='white' size='3rem'/>
          <Fb color='white' size='3rem'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
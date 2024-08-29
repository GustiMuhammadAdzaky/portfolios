import React from 'react'
import './Floating.css'

const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <div className="floatingdiv">
      <img src={image} alt="" className="floatingdiv-image" />
      <span className="floatingdiv-text">
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  )
}

export default FloatingDiv
import React from 'react'
import './Card.css'

const Card = ({emoji, Headings, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{Headings}</span>
        <span>{detail}</span>
    </div>
  )
}

export default Card
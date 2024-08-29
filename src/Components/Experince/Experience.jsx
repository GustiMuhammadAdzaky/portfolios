// 1:16:22 
import React, { useContext } from 'react'
import './Experience.css'
import { themeContext } from '../../Context';

const Experience = () => {
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
        <div className="achievement">
            <div className="circle" style={{ color: darkMode ? "black" : "" }}>2+</div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{ color: darkMode ? "black" : "" }}>70+</div>
            <span style={{ color: darkMode ? "white" : "" }}>App</span>
            <span>Repository</span>
        </div>
    </div>
  )
}

export default Experience
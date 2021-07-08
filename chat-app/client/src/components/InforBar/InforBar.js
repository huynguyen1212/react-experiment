import React from 'react';
import './InforBar.css';
import closeIcon from "../../icons/closeIcon.svg"
import onlineIcon from "../../icons/onlineIcon.svg"

const InforBar = ({ room }) => {
  return (
    <div className="inforBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="online" className="onlineIcon" />
        <h3>{room}</h3>
      </div>

      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  )
}

export default InforBar;
import React from 'react'
import './suggestions.css'
import { Avatar } from "@mui/material";

const Suggestions = ({suggestPhoto, suggestUserName, suggestDescription}) => {
  return (
    <div className="suggestions">
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <img src={suggestPhoto} alt="" className='suggest-photo' />
            </span>
            <div className="username__info">
              <span className="username">{suggestUserName}</span>
              <span className="relation">{suggestDescription}</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestions
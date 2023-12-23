import React from 'react'
import './statusbar.css'

const Statusbar = ({userName, userPhoto}) => {
  return (
    <div>
            <div className="statusbar__container">
                        <div className="status">
                            <img src={userPhoto} alt="" className="statusbar__status" />
                            <div className="statusbar__text">{userName}</div>
                        </div>
            </div>
        </div>
  )
}

export default Statusbar
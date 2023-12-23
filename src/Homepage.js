import React from 'react'
import './homepage.css'
import Sidenav from './Navigation/Sidenav'
import Timeline from './components/Timeline/Timeline'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className="homepage-nav">
          <Sidenav />
      </div>
      <div className="homepage-timeline">
          <Timeline />
      </div>
    </div>
  )
}

export default Homepage
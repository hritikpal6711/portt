import React from 'react'
import "./navbar.css"
import "/workspaces/portt/src/App.css"

const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>Hritik</div>
        <span>Toggle</span>  
      </div>


      <div className='n-right'>
        <div className='n-list'>
          <ul style={{listStyleType:"none"}}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>

          </ul>
        </div>
        <button className='button n-button'>
          Contact us
        </button>

      </div>

    </div>
  )
}

export default Navbar

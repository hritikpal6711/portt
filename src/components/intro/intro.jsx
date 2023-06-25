import React from 'react'
import './intro.css'
import Github from "/workspaces/portt/src/img/github.png"
import LinkedIn from "/workspaces/portt/src/img/linkedin.png"
import Insta from "/workspaces/portt/src/img/instagram.png"
import vector1 from   "/workspaces/portt/src/img/Vector1.png"
import vector2 from "/workspaces/portt/src/img/Vector2.png"
import boy from "/workspaces/portt/src/img/Hritik1-removebg-preview.png"
import thumbup from "/workspaces/portt/src/img/thumbup.png"
import crown from "/workspaces/portt/src/img/crown.png"
import glassemoji from "/workspaces/portt/src/img/glassesimoji.png"
import floatingdiv from '/workspaces/portt/src/components/floating div/floatingdiv.jsx'
const intro = () => {
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span>Hi! I Am</span>
                <span>Hritik Pal</span>
                <span>Frontend Developer with 
                expertise in developing and deploying
                beautiful websites.
                </span>
            </div>  


            <button className="button i-button">Hire Me</button>
            <div className='i-icons'>
              <img src={Github} alt="" />
              <img src={LinkedIn} alt="" />
              <img src={Insta} alt="" />
            </div>
        </div>
        
        
        
        
        <div className='i-right'>
        
       {/* <img src={vector1} alt="" /> */}
        <img src={vector2} alt="" />  
        <img src={boy} alt="" />  
        <span>
          <floatingdiv/>
        </span>
            
        </div>      
    </div>
  )
}

export default intro

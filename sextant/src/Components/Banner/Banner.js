import React from 'react'

import "./Banner.scss"
const Banner = () => {
  return (
   <div id='banner'>
        <nav > 
          <input type="checkbox" id="check"/>
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <label class="logo">Sextant</label>
          <ul>
            <li><a class="active" href="#">Home</a></li>
            
          </ul>
        </nav>
        </div>
  )
}

export default Banner
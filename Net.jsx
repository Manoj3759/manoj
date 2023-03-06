import React from 'react'
import STYLE from "./net.module.css"

const Net = () => {
  return (
    <nav>
    <div id={STYLE.nav}>
    
    <ul>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="" />
        <li>Home</li>
        <li>TV Shows</li>
        <li>My list</li>
        <li>New & popular</li>
        <li>Browse by languages</li>
    </ul>
    </div>
   <div className={STYLE.btn}>
   <i class="fa-solid fa-magnifying-glass"></i> 
   <i class="fa-sharp fa-regular fa-bell"></i>
   <i class="fa-sharp fa-solid fa-user"></i>
   </div>
    </nav>
  )
}

export default Net
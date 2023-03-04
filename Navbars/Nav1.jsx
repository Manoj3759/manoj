import React from 'react'
import STYLE from "./nav1.module.css"


const Nav1 = () => {
  return (
    <nav>
    <ul className={STYLE.list}>
        <li><a href="#">intro</a></li>
        <li><a href="#">port</a></li>
        <li><a href="#">portrait</a></li>
    </ul>
</nav>
  )
}

export default Nav1
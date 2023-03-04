import React from 'react'
import STYLE from "./nav2.module.css"


const nav2 = () => {
  return (
    <nav id={STYLE.navblock}>
        <h1>Logo</h1>
        <ul>
            <li>HOME</li>
            <li>LOGIN</li>
            <li>SIGN-UP</li>
        </ul>
    </nav>
  )
}

export default nav2
import React from "react"

import { Link } from 'gatsby'
import * as headerCss from "./header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile_pic from '../img/Bakhshish-Singh-Dhillon.png';

const Header = () => {
  return (
    <header class="container header active" id="home">
        <div class="header-content">
            <div class="left-header">
                <div class="h-shape"></div>
                <div class="image">
                    <img src={profile_pic} alt="" />
                </div>
            </div>
            <div class="right-header">
                <h1 class="name">
                    Hi, I'm <span>Bakhshish Singh Dhillon</span> 
                    
                </h1>
                <p>
                    I'm a Web Developer, I love to create beautiful and functional websites with <strong>Laravel, WordPress, PHP, and Vue</strong>. I have worked with a wide array of technologies including C, C++, Java, Arduinos, Microcontroller programming, Android Application development, C graphics, and Embedded C
                </p>
                <div class="btn-con">
                    <a href="https://www.linkedin.com/in/bakhshish-singh-dhillon/" class="main-btn">
                        <span class="btn-text">LinkedIn</span>
                        <span class="btn-icon"><i class="fab fa-linkedin-in"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
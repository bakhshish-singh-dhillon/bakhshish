import React from "react"

import { Link } from 'gatsby'
import * as headerCss from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerCss.headerCurve}>
      <div className={headerCss.container}>
        <div className={headerCss.row}>
          <div className={headerCss.column}>
            <h1>
              Bakhshish <span className={headerCss.hideMiddle}> Singh</span> <span className={headerCss.hideLast}>Dhillon</span>
            </h1>
          </div>
          <div className={headerCss.column}>
            <nav className={headerCss.navMenu}>
              <ul>
                <li>
                  <Link to="/" >Home</Link>
                </li>
                <li>
                  <Link to="/blog" > Blog </Link>
                </li>
                <li>
                  <Link to="/about-me" >About</Link>
                </li>
                <li>
                  <Link to="/contact-me">Contact</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
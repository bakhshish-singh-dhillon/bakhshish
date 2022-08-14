import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/layout'
import * as  homeCss from '../scss/index.module.scss'
import profilePic from '../img/Bakhshish-Singh-Dhillon.png'
import tempConst from '../img/under-construction.png'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <div>
        <div className={homeCss.container}>
          <div className={homeCss.row}>
            <div className={homeCss.column}>
              <div className={homeCss.profileImageContainer}>
                <div >
                  <img className={homeCss.profileImage} src={profilePic} alt="Bakhshish Profile" />
                </div>
              </div>
            </div>
            <div className={homeCss.column}>
              <div className={homeCss.intro}>
                <h1>Web Developer</h1>
                <p>Laravel | Vue | React | Wordpress</p>
                <img className={homeCss.constructionImage} src={tempConst} alt="Under Construction" />
              </div>
            </div>
          </div>      
        </div>
        <div className={homeCss.containerCurve}>
          <div className={homeCss.container}>
            <div className={homeCss.row}>
              <div className={homeCss.column}>
                <div className={homeCss.blockContainer}>
                  <h2>Areas of exposure</h2>
                  <div className={homeCss.list}>
                    <ul>
                      <li><FontAwesomeIcon icon={faCheck} size="1x" />Embedded Systems</li>
                      <li><FontAwesomeIcon icon={faCheck} size="1x" />Cisco Router Programming</li>
                      <li><FontAwesomeIcon icon={faCheck} size="1x" />Web Development</li>
                      <li><FontAwesomeIcon icon={faCheck} size="1x" />Application Development</li>
                      <li><FontAwesomeIcon icon={faCheck} size="1x" />Java, C, C++, Python, PHP...</li>
                      <li><FontAwesomeIcon icon={faCheck} size="1x" />Android App Development</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={homeCss.column}>
                <div className={homeCss.blockContainer}>
                  <div className={homeCss.block}>
                    PHP
                  </div>
                  <div className={homeCss.block}>
                    React
                  </div>
                  <div className={homeCss.block}>
                    Vue
                  </div>
                  <div className={homeCss.block}>
                    Wordpress
                  </div>
                  <div className={homeCss.block}>
                    Laravel
                  </div>
                  <div className={homeCss.block}>
                    Scss
                  </div>
                  <div className={homeCss.block}>
                    Html 5
                  </div>
                  <div className={homeCss.block}>
                    MySQL
                  </div>
                  <div className={homeCss.block}>
                    JQuery
                  </div>
                  <div className={homeCss.block}>
                    Html 5
                  </div>
                  <div className={homeCss.block}>
                    Css 3
                  </div>
                  <div className={homeCss.block}>
                    Html
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
